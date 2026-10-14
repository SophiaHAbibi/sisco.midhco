const assert = require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript');
const root=path.resolve(__dirname,'..');
function load(filename,dependencies={}){
  const file=fs.readFileSync(path.join(root,filename),'utf8');
  const transpiled=ts.transpileModule(file,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022},fileName:filename,reportDiagnostics:true});
  const syntax=(transpiled.diagnostics||[]).filter(x=>x.category===ts.DiagnosticCategory.Error);
  assert.equal(syntax.length,0,filename+': '+syntax.map(e=>e.messageText).join(','));
  const exports={}; const sandbox={exports,require:(name)=>{
    if(dependencies[name])return dependencies[name];
    throw new Error('Unresolved '+name+' for '+filename);
  }};
  vm.runInNewContext(transpiled.outputText,sandbox,{filename});
  return exports;
}
const data=load('lib/site-data.ts');
const routes=load('lib/routes.ts',{'./site-data':data});
assert.equal(data.MENU.length,9);
assert.equal(data.PRODUCTS.length,4);
assert.equal(data.COMPLEXES.length,2);
assert.equal(data.OUTBOUND.length,4);
assert.equal(data.EMPLOYEE.length,5);
const slugs=routes.allStaticSlugs();
const keys=slugs.map(x=>x.join('/'));
assert.equal(new Set(keys).size,keys.length,'All generated routes unique');
for(const route of ['products','complexes','news','about','shareholders','customers','suppliers','contact','directory','sustainability',...data.PRODUCTS.map(x=>'products/'+x.id),...data.COMPLEXES.map(x=>'complexes/'+x.id)])assert.ok(keys.includes(route),'Missing '+route);
for(const item of data.MENU)for(const group of item.groups)for(const [title,id,url] of group.items){
  assert.ok(title&&id&&url,'Broken menu item');
  const href=routes.resolveHref(id,url);
  assert.ok(/^https?:\/\//.test(href)||href.startsWith('/'),'Invalid link '+href);
  if(href.startsWith('/info/'))assert.ok(keys.includes('info/'+id),'Missing info route '+id);
}
const sources=fs.readdirSync(path.join(root,'components')).filter(x=>x.endsWith('.tsx'));
const tsFiles=['app/page.tsx','app/layout.tsx','app/not-found.tsx','app/[...slug]/page.tsx',...sources.map(x=>'components/'+x)];
for(const file of tsFiles){
 const source=fs.readFileSync(path.join(root,file),'utf8');
 const result=ts.transpileModule(source,{fileName:file,reportDiagnostics:true,compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}});
 const errors=(result.diagnostics||[]).filter(x=>x.category===ts.DiagnosticCategory.Error);
 assert.equal(errors.length,0,file+': '+errors.map(x=>x.messageText));
}
console.log(`PASS: 9 menus, ${data.MENU.flatMap(x=>x.groups.flatMap(g=>g.items)).length} submenu entries, ${keys.length} generated routes, ${tsFiles.length} TSX files parse, external services remain offsite.`);
