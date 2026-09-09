import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { stripTypeScriptTypes } from 'node:module';

const origin = process.argv[2] || 'http://127.0.0.1:3001';
const siteUrl = 'https://minhabateriasalvador.com.br';
const attrs = tag=>Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)].map(m=>[m[1],m[2].replaceAll('&amp;','&')]));
const pages = ['/', '/contato/', '/servicos/', '/sobre-nos/'];
const report = {capturedAt:new Date().toISOString(),origin,pages:[],assets:[],checks:[]};
const assets = new Set();
for (const route of pages) {
  const response = await fetch(origin+route);
  assert.equal(response.status,200,route);
  const html=await response.text();
  const markup=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
  assert.equal((markup.match(/<h1\b/g)||[]).length,1,`${route}: one h1`);
  const ids=[...markup.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,`${route}: unique ids`);
  const tags=[...markup.matchAll(/<(?:meta|link)\b[^>]*>/g)].map(m=>attrs(m[0]));
  assert.equal(tags.find(x=>x.rel==='canonical')?.href,siteUrl+route);
  assert.match(tags.find(x=>x.name==='robots')?.content||'',/noindex/);
  assert.equal(tags.find(x=>x.property==='og:image')?.content,siteUrl+'/images/compartilhar.webp');
  assert.ok(!/wp-content|jquery|elementor/i.test(markup));
  for(const m of markup.matchAll(/<img\b[^>]*>/g)){
    const image=attrs(m[0]);
    assert.ok(image.alt && image.width && image.height,`${route}: image attributes`);
    assets.add(image.src);
  }
  for(const m of markup.matchAll(/<a\b[^>]*>/g)){
    const a=attrs(m[0]);
    if(a.href?.startsWith('/')){
      const u=new URL(a.href,origin);
      assert.ok(pages.includes(u.pathname),`Unknown route: ${a.href}`);
      if(u.pathname===route && u.hash)assert.ok(ids.includes(u.hash.slice(1)),`Missing anchor: ${a.href}`);
    }
    if(a['data-contact']==='whatsapp') {
      const u=new URL(a.href);
      assert.equal(u.hostname,'wa.me');assert.equal(u.pathname,'/5571993151471');assert.ok(u.searchParams.get('text'));
    }
  }
  const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  assert.equal(schemas[0]['@type'],'AutomotiveBusiness');
  assert.equal(schemas[0].url,siteUrl);assert.ok(!schemas[0].aggregateRating);
  report.pages.push({route,status:response.status,title:markup.match(/<title>(.*?)<\/title>/)?.[1],htmlBytes:Buffer.byteLength(html),h1:1,canonical:siteUrl+route,previewNoindex:true});
}
for(const src of assets){const r=await fetch(new URL(src,origin),{headers:{Accept:'image/avif,image/webp'}});assert.equal(r.status,200,src);assert.match(r.headers.get('content-type')||'',/^image\//);report.assets.push({url:src,status:r.status,bytes:(await r.arrayBuffer()).byteLength});}
assert.equal((await fetch(origin+'/nao-existe/')).status,404);
const robots=await(await fetch(origin+'/robots.txt')).text();assert.match(robots,/Allow: \//);
const sitemap=await(await fetch(origin+'/sitemap.xml')).text();assert.ok(!sitemap.includes('<loc>'));
// Verify indexation gates with the actual TypeScript module under each deployment environment.
const source=fs.readFileSync(new URL('../app/site.ts',import.meta.url),'utf8');
const compiled=stripTypeScriptTypes(source).replace(/^export /gm,'')+'\nglobalThis.result = indexable;';
for(const [env,flag,expected] of [['preview','true',false],['production','false',false],['production','true',true],[undefined,'true',false]]){
  const sandbox={process:{env:{VERCEL_ENV:env,SITE_INDEXABLE:flag}}};vm.runInNewContext(compiled,sandbox);assert.equal(sandbox.result,expected);
}
report.checks=['4 routes 200','404 real','all image endpoints 200','canonical per route','one H1 and unique IDs','WhatsApp destination and context','valid JSON-LD','social metadata per route','preview noindex','production/preview indexability matrix','robots and sitemap'];
fs.writeFileSync(new URL('../../analise-seo/verification-new.json',import.meta.url),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
