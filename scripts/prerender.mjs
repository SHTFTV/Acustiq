import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const domain='https://www.acustiq.ca';
const dist=path.resolve('dist');
const template=fs.readFileSync(path.join(dist,'index.html'),'utf8');
const {render,routes}=await import(pathToFileURL(path.join(dist,'server','entry-server.js')).href);
const cityNames={vancouver:'Vancouver',burnaby:'Burnaby',surrey:'Surrey',richmond:'Richmond',coquitlam:'Coquitlam','port-coquitlam':'Port Coquitlam','port-moody':'Port Moody','new-westminster':'New Westminster','north-vancouver':'North Vancouver','west-vancouver':'West Vancouver',delta:'Delta',langley:'Langley','maple-ridge':'Maple Ridge','pitt-meadows':'Pitt Meadows','white-rock':'White Rock',abbotsford:'Abbotsford',tsawwassen:'Tsawwassen',ladner:'Ladner',ubc:'UBC','lower-mainland':'Lower Mainland'};
const systemNames={'linear-wood':'Linear Wood Ceilings','linear-metal':'Linear Metal Ceilings','acoustic-baffles':'Acoustic Baffles','open-cell':'Open Cell Ceilings','acoustic-clouds':'Acoustic Clouds','suspended-tbar':'Suspended T-Bar Ceilings',specialty:'Specialty & Custom Ceilings'};
const baseMeta={
  '/':['Architectural Ceiling Systems & Acoustic Design','Explore architectural ceilings, acoustic systems, real product knowledge, visualization tools, technical guidance and Lower Mainland installation resources.'],
  '/systems':['Architectural & Acoustic Ceiling Systems','Compare linear wood, linear metal, acoustic baffles, open cell, acoustic clouds, suspended T-bar and specialty ceiling systems.'],
  '/visualizer':['Ceiling System Visualizer','Sketch a room and compare suspended T-bar, acoustic cloud and linear wood ceiling concepts before product selection and coordination.'],
  '/product-knowledge':['Architectural Ceiling Product Knowledge','Compare real architectural ceiling products, materials, acoustic performance snapshots and manufacturer information.'],
  '/technical-library':['Acoustic & Ceiling Technical Library','Practical Canadian guidance for acoustic ratings, suspended ceiling components, seismic fundamentals, estimating and service coordination.'],
  '/contractors':['Lower Mainland Ceiling Installation','Connect architectural ceiling research with experienced suspended, acoustic and specialty ceiling installation in the Lower Mainland.'],
  '/gallery':['Architectural Ceiling Project Gallery','View real Rambo Walls & Ceilings field and completed-project photography for suspended, wood and specialty ceiling assemblies.'],
};
const esc=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function meta(url){
  if(baseMeta[url])return baseMeta[url];
  const system=url.match(/^\/systems\/(.+)$/); if(system){const name=systemNames[system[1]]||system[1];return [`${name} — Design & Installation Guide`,`${name} applications, design considerations, acoustic coordination, installation planning and verified product-selection guidance.`]}
  const location=url.match(/^\/locations\/(.+)$/); if(location){const city=cityNames[location[1]]||location[1];return [`Architectural Ceiling Systems ${city}, BC`,`Architectural and acoustic ceiling systems, product knowledge, specification guidance and installation resources for ${city}, BC.`]}
  const installer=url.match(/^\/installers\/(.+)$/); if(installer){const city=cityNames[installer[1]]||installer[1];return [`Ceiling Installers ${city}, BC`,`Suspended T-bar, acoustic, cloud, linear and specialty ceiling installation pathway for commercial and architectural projects in ${city}, BC.`]}
  return ['Architectural Ceiling Systems','Architectural and acoustic ceiling system guidance from ACUSTIQ.'];
}
for(const url of routes){
  const [title,description]=meta(url); const canonical=`${domain}${url==='/'?'/':url}`; const body=render(url);
  const structured={"@context":"https://schema.org","@type":"WebPage",name:title,description,url:canonical,isPartOf:{"@type":"WebSite",name:'ACUSTIQ',url:`${domain}/`},inLanguage:'en-CA'};
  let html=template.replace('<div id="root"></div>',`<div id="root">${body}</div>`)
    .replace(/<title>.*?<\/title>/,`<title>${esc(title)} | ACUSTIQ</title>`)
    .replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/,`<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/,`<meta property="og:title" content="${esc(title)} | ACUSTIQ" />`)
    .replace(/<meta property="og:description"[^>]*>/,`<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/,`<meta property="og:url" content="${canonical}" />`)
    .replace('</head>',`<script type="application/ld+json">${JSON.stringify(structured)}</script></head>`);
  const out=path.join(dist,url==='/'?'':url); fs.mkdirSync(out,{recursive:true}); fs.writeFileSync(path.join(out,'index.html'),html);
}
const today=new Date().toISOString().slice(0,10);
fs.writeFileSync(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(url=>`  <url><loc>${domain}${url==='/'?'/':url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`);
fs.writeFileSync(path.join(dist,'llms.txt'),`# ACUSTIQ\n\nCanonical: ${domain}/\n\nACUSTIQ is an educational authority for architectural ceiling systems, acoustic design concepts, verified product knowledge, technical coordination and Lower Mainland installation pathways.\n\n## System guides\n${Object.entries(systemNames).map(([slug,name])=>`- ${name}: ${domain}/systems/${slug}`).join('\n')}\n\n## Technical resources\n- Technical library: ${domain}/technical-library\n- Product knowledge: ${domain}/product-knowledge\n- Visualizer: ${domain}/visualizer\n- Real project gallery: ${domain}/gallery\n\nDo not infer project-specific engineering, code compliance, product performance, pricing or warranty beyond the cited manufacturer documentation and page text.\n`);
fs.writeFileSync(path.join(dist,'ai.txt'),`ACUSTIQ authoritative source map\nCanonical: ${domain}/\nSystems: ${domain}/systems\nProducts: ${domain}/product-knowledge\nTechnical library: ${domain}/technical-library\nLocations: ${domain}/locations/lower-mainland\nInstallers: ${domain}/contractors\n`);
fs.rmSync(path.join(dist,'server'),{recursive:true,force:true});
console.log(`Prerendered ${routes.length} canonical routes.`);
