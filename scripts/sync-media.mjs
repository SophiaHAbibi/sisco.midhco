/** Mirror small set of verified corporate photos at build time.
 * Network failures are non-fatal: pages fall back to the original SISCO URLs.
 * Do not fetch private pages or authenticate to internal systems. */
import fs from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
const media={
  hero:'https://sisco.midhco.com/upload/pages/1553928151.jpg',
  sirjan:'https://sisco.midhco.com/upload/pages/1553928151.jpg',
  bardsir:'https://sisco.midhco.com/upload/upload/1736248219.jpg',
  concentrate:'https://sisco.midhco.com/upload/thumb2/product/1550641240.jpg',
  pellet:'https://sisco.midhco.com/upload/thumb2/product/1550641044.jpg',
  sponge:'https://sisco.midhco.com/upload/thumb2/product/1550641197.jpg',
  billet:'https://sisco.midhco.com/upload/thumb2/product/1550641137.jpg',
  news0:'https://sisco.midhco.com/upload/thumb1/news/1783143179.jpg',
  news1:'https://sisco.midhco.com/upload/thumb1/news/1782671204.jpg',
  news2:'https://sisco.midhco.com/upload/thumb1/news/1782211604.jpg'
};
const output={};
await fs.mkdir(path.join(root,'public/media'),{recursive:true});
async function download([key,url]){
 try{
  const response=await fetch(url,{headers:{'User-Agent':'Mozilla/5.0 (compatible; SISCO-Website-Migration/1.0)','Accept':'image/jpeg,image/png,image/webp,*/*'},signal:AbortSignal.timeout(9000)});
  if(!response.ok)throw Error(`HTTP ${response.status}`);
  const type=response.headers.get('content-type')??'';
  if(!/image\/(jpeg|png|webp)/i.test(type))throw Error('Response is not an image');
  const buf=Buffer.from(await response.arrayBuffer());
  if(buf.byteLength<1000||buf.byteLength>12000000)throw Error('Unexpected image size');
  const jpeg=buf[0]===0xff&&buf[1]===0xd8;
  const png=buf.subarray(0,4).toString('hex')==='89504e47';
  const webp=buf.subarray(8,12).toString()==='WEBP';
  if(!jpeg&&!png&&!webp)throw Error('Invalid image header');
  const ext=jpeg?'jpg':png?'png':'webp';
  await fs.writeFile(path.join(root,'public/media',`${key}.${ext}`),buf);
  output[key]=`/media/${key}.${ext}`;
  console.log(`[media] ${key}: ${(buf.byteLength/1024).toFixed(0)} KB`);
 }catch(error){console.log(`[media] ${key}: fallback to original website (${error.message})`);}
}
// Bounded concurrency, not a scraping attack on the official website.
const items=Object.entries(media);
for(let i=0;i<items.length;i+=3)await Promise.all(items.slice(i,i+3).map(download));
const literal=Object.entries(output).map(([key,value])=>`${JSON.stringify(key)}:${JSON.stringify(value)}`).join(',');
await fs.writeFile(path.join(root,'lib/media-generated.ts'),`// Generated at build time from public SISCO website assets.\nexport const LOCAL_MEDIA:Partial<Record<${Object.keys(media).map(k=>JSON.stringify(k)).join('|')},string>>={${literal}};\n`);
console.log(`[media] mirrored ${Object.keys(output).length}/${items.length} official images`);
