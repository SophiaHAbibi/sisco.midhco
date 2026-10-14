const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const cache=new Map();
const jsx=(type,props)=>({type,props:props||{}});
function reactModule(name){
  if(name==='react/jsx-runtime')return {jsx,jsxs:jsx,Fragment:Symbol.for('Fragment')};
  if(name==='next/link')return {__esModule:true,default:({children,...props})=>jsx('a',{...props,children})};
  if(name==='next/navigation')return {notFound:()=>{throw new Error('NOT_FOUND')}};
  return null;
}
function load(importName){
 const third=reactModule(importName);if(third)return third;
 const name=importName.startsWith('@/')?importName.slice(2):importName;
 if(cache.has(name))return cache.get(name);
 let filename=path.join(root,name);
 if(!/\.tsx?$/.test(filename)) filename+=fs.existsSync(filename+'.tsx')?'.tsx':'.ts';
 if(!fs.existsSync(filename))throw new Error('Cannot resolve '+importName);
 const file=fs.readFileSync(filename,'utf8');
 const compiled=ts.transpileModule(file,{fileName:filename,compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022}});
 const exports={};cache.set(name,exports);
 vm.runInNewContext(compiled.outputText,{exports,require:(id)=>{
   const m=reactModule(id);if(m)return m;
   if(id.startsWith('./'))return load(path.join(path.dirname(name),id));
   return load(id);
 }},{filename});
 return exports;
}
function html(node){
 if(node==null||typeof node==='boolean')return '';
 if(['string','number'].includes(typeof node))return String(node);
 if(Array.isArray(node))return node.map(html).join('');
 if(typeof node.type==='function')return html(node.type(node.props));
 if(typeof node.type==='symbol')return html(node.props.children);
 return `<${node.type}>${html(node.props.children)}</${node.type}>`;
}
(async()=>{
 const d=load('lib/site-data');
 const routes=load('lib/routes');
 const Page=load('app/[...slug]/page').default;
 const Home=load('components/Home').default;
 assert.ok(html(jsx(Home,{})).includes('از قلب زمین'));
 const slugs=routes.allStaticSlugs();
 for(const slug of slugs){
  const react=await Page({params:Promise.resolve({slug})});
  const markup=html(react);
  assert.ok(markup.includes('<div>'),'No content for /'+slug.join('/'));
  assert.ok(markup.includes('<h1>') && markup.length > 300,'Missing page body at /'+slug.join('/'));
 }
 const services=await Page({params:Promise.resolve({slug:['suppliers']})});
 const servicesHtml=html(services);
 assert.ok(servicesHtml.includes('سامانه‌های معرفی‌شده مستقل'));
 assert.ok(servicesHtml.includes('SRM'));
 assert.ok(d.MENU.length===9);
 console.log('PASS: React component rendering for homepage and '+slugs.length+' routes; stakeholders and external-only SRM note intact.');
})().catch(e=>{console.error(e);process.exitCode=1});
