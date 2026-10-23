import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const domain='https://www.acustiq.ca';
const dist=path.resolve('dist');
const template=fs.readFileSync(path.join(dist,'index.html'),'utf8');
const {render,routes}=await import(pathToFileURL(path.join(dist,'server','entry-server.js')).href);
const cityNames={vancouver:'Vancouver',burnaby:'Burnaby',surrey:'Surrey',richmond:'Richmond',coquitlam:'Coquitlam','port-coquitlam':'Port Coquitlam','port-moody':'Port Moody','new-westminster':'New Westminster','north-vancouver':'North Vancouver','west-vancouver':'West Vancouver',delta:'Delta',langley:'Langley','maple-ridge':'Maple Ridge','pitt-meadows':'Pitt Meadows','white-rock':'White Rock',abbotsford:'Abbotsford',tsawwassen:'Tsawwassen',ladner:'Ladner',ubc:'UBC','lower-mainland':'Lower Mainland'};
const systemNames={'linear-wood':'Linear Wood Ceilings','linear-metal':'Linear Metal Ceilings','acoustic-baffles':'Acoustic Baffles','open-cell':'Open Cell Ceilings','acoustic-clouds':'Acoustic Clouds','suspended-tbar':'Suspended T-Bar Ceilings',specialty:'Specialty & Custom Ceilings','acoustic-panels':'Acoustic Wall & Ceiling Panels'};
const baseMeta={
"/insights/spray-insulation-suspended-ceiling-acoustic-design":["Acoustic spray and suspended ceilings: specify the whole sound path", "Good acoustic results come from a coordinated room and ceiling assembly. Use the spray treatment, exposed ceiling surface and plenum for their intended roles, then ask for evidence that matches the proposed design."],
"/insights/the-post-celebration-panels-commercial-ceiling":["A Ceiling with Direction: Celebration Panels at The Post", "A repeating ceiling pattern can give a commercial interior a clear sense of direction. Rambo\u2019s photograph of The Post shows the 2 \u00d7 8-foot Celebration panels identified by Matt McKenzie, with lighting and overhead details forming part of the composition."],
"/insights/restaurant-wood-baffles-dp-world-ceiling-ideas":["Wood or White Baffles? Real Ceiling Ideas for Your Interior", "Wood baffles against a dark overhead space feel different from repeating white suspended elements beside daylight. Rambo\u2019s Thai restaurant and DP World photographs show two distinct projects that can help you describe the ceiling character you want."],

  '/':['Architectural Ceiling Systems & Acoustic Design','Explore architectural ceilings, acoustic systems, real product knowledge, visualization tools, technical guidance and Lower Mainland installation resources.'],
  '/systems':['Architectural & Acoustic Ceiling Systems','Compare linear wood, linear metal, acoustic baffles, open cell, acoustic clouds, suspended T-bar and specialty ceiling systems.'],
  '/visualizer':['Ceiling System Visualizer','Sketch a room and compare suspended T-bar, acoustic cloud and linear wood ceiling concepts before product selection and coordination.'],
  '/product-knowledge':['Architectural Ceiling Product Knowledge','Compare real architectural ceiling products, materials, acoustic performance snapshots and manufacturer information.'],
  '/technical-library':['Acoustic & Ceiling Technical Library','Practical Canadian guidance for acoustic ratings, suspended ceiling components, seismic fundamentals, estimating and service coordination.'],
  '/contractors':['Acoustic Ceiling Contractors Vancouver & Lower Mainland','Find an acoustic ceiling contractor for suspended T-bar, clouds, baffles and specialty ceiling installation. Compare scope and contact the featured Rambo team directly.'],
  '/gallery':['Architectural Ceiling Project Gallery','View real Rambo Walls & Ceilings field and completed-project photography for suspended, wood and specialty ceiling assemblies.'],
  '/projects/837-beatty-tectum-acoustic-panels':['837 Beatty Tectum Acoustic Panel Installation','See the real beveled Tectum acoustic wall panel installation by Rambo Walls & Ceilings at 837 Beatty Street in Vancouver, BC.'],
  '/projects/burquitlam-strata-meeting-room-ceiling':['Burquitlam Strata Meeting-Room Ceiling','Real Burquitlam strata renovation near Lougheed Mall with a dropped T-bar ceiling, four-inch perimeter lighting detail and coordinated interior work.'],
  '/contractors/rambo-walls-ceilings':['Rambo Walls & Ceilings — Lower Mainland Contractor','Rambo Walls & Ceilings installs suspended T-bar, acoustic and specialty ceilings, steel stud framing and drywall across the Lower Mainland.'],
  '/legacy':['Legacy Ceiling Guides — Acoustic Ceilings, Framing & Drywall','Restored SteelStud.ca trade knowledge covering acoustic ceilings, ceiling framing, drywall ceilings, repairs and smoothing with real project photography.'],
  '/legacy/acoustic-ceilings':['Acoustic Ceilings — Legacy Trade Guide','A substantial guide to T-bar, clouds, baffles, panels, linear acoustic ceilings, ratings, coordination and real installations.'],
  '/legacy/ceiling-framing':['Ceiling Framing — Legacy Steel Stud Guide','Steel framing for ceiling drops, bulkheads, clouds, coves and architectural ceiling features, with real legacy project photography.'],
  '/legacy/drywall-ceilings':['Drywall Ceilings, Repairs & Smoothing — Legacy Guide','Drywall ceiling installation, repair, texture matching, skim coating, popcorn removal and smooth ceiling finishing.'],
  '/insights':['Architectural Ceiling Insights & Planning Guides','Practical ceiling and acoustic planning articles for owners, designers, contractors and facilities teams.'],
  '/insights/acoustic-ceiling-retrofit-occupied-offices':['Acoustic Ceiling Retrofits in Occupied Offices','Plan acoustic ceiling retrofits around existing services, occupants, access, dust control and a maintainable handover.'],
  '/insights/wood-slat-ceilings-vs-acoustic-baffles':['Wood Slat Ceilings vs. Acoustic Baffles','Compare wood slat ceilings and acoustic baffles by appearance, tested acoustic assembly, service coordination, access and lifecycle.'],
};
const projectImages={
"/insights/spray-insulation-suspended-ceiling-acoustic-design":[["/images/field-notes/acoustic-spray-tbar-design.jpg", "Completed commercial meeting-room ceiling. Photo: Mason McKenzie / Rambo Wall & Ceiling Limited. Product model, installed acoustic ratings and any concealed spray treatment are not confirmed by this photograph."]],
"/insights/the-post-celebration-panels-commercial-ceiling":[["https://www.rambowalls.com/projects/matt-oct14/the-post-celebration-ceiling-panels-1.webp", "Celebration panels create a repeating ceiling pattern at The Post. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."], ["https://www.rambowalls.com/projects/matt-oct14/commercial-tbar-ceiling-installation-1.webp", "Suspended T-bar grid during a commercial ceiling installation. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."], ["https://www.rambowalls.com/projects/matt-oct14/commercial-tbar-ceiling-installation-2.webp", "The wider interior while ceiling work is underway. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."]],
"/insights/restaurant-wood-baffles-dp-world-ceiling-ideas":[["https://www.rambowalls.com/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-1.webp", "Wood baffles form a warm ceiling feature in the Thai restaurant. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."], ["https://www.rambowalls.com/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-2.webp", "The baffle installation taking shape around overhead services. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."], ["https://www.rambowalls.com/projects/matt-oct14/downtown-thai-restaurant-wood-baffle-ceiling-3.webp", "Installation-stage view of the restaurant ceiling feature. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."], ["https://www.rambowalls.com/projects/matt-oct14/dp-world-suspended-ceiling-baffles-1.webp", "Repeating suspended baffles at the DP World interior. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."], ["https://www.rambowalls.com/projects/matt-oct14/dp-world-suspended-ceiling-baffles-2.webp", "A wider view of the baffle arrangement and surrounding space. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."], ["https://www.rambowalls.com/projects/matt-oct14/dp-world-suspended-ceiling-baffles-3.webp", "Baffle spacing around lighting and overhead services. Photo: Matt McKenzie / Rambo Wall & Ceiling Limited."]],

  '/projects/837-beatty-tectum-acoustic-panels':[
    ['/projects/837-beatty-tectum-panels-material.jpg','Tectum acoustic panels staged for installation'],
    ['/projects/837-beatty-tectum-panel-layout.jpg','Beveled Tectum acoustic panel layout'],
    ['/projects/837-beatty-beveled-tectum-panels.jpg','Beveled acoustic panel edge detail'],
    ['/projects/837-beatty-acoustic-wall-installation.jpg','Acoustic wall panel installation in progress'],
    ['/projects/837-beatty-acoustic-panel-detail.jpg','Acoustic wall panel joint detail'],
    ['/projects/837-beatty-tectum-wall-progress.jpg','Tectum wall installation progress'],
    ['/projects/837-beatty-tectum-wall-finished.jpg','Finished Tectum acoustic wall installation'],
  ],
  '/projects/burquitlam-strata-meeting-room-ceiling':[
    ['/projects/burquitlam-strata-renovation/01-meeting-room.jpg','Finished Burquitlam strata meeting-room renovation'],
    ['/projects/burquitlam-strata-renovation/02-ceiling-detail.jpg','Meeting-room ceiling and lighting details'],
    ['/projects/burquitlam-strata-renovation/03-glazed-meeting-room.jpg','Glazed meeting-room area and commercial finishes'],
    ['/projects/burquitlam-strata-renovation/04-common-area.jpg','Completed Burquitlam strata common area'],
    ['/projects/burquitlam-strata-renovation/05-finished-interior.jpg','Finished strata meeting-room and common-area interior'],
    ['/projects/burquitlam-strata-renovation/06-perimeter-lighting.jpg','Dropped ceiling with four-inch perimeter lighting detail'],
  ],
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
  const socialImage=url === '/insights/spray-insulation-suspended-ceiling-acoustic-design' ? '/images/field-notes/spray-suspended-acoustic-design-share.jpg' : url === '/contractors' ? '/images/acoustic-ceiling-contractors-share.jpg' : (url.startsWith('/insights/')?projectImages[url]?.[0]:projectImages[url]?.at(-1))?.[0]||'/projects/cloud-ceiling-finished.webp';
  const socialImageAlt=url === '/insights/spray-insulation-suspended-ceiling-acoustic-design' ? 'ACUSTIQ acoustic design guide with credited Rambo meeting-room ceiling photography' : url === '/contractors' ? 'ACUSTIQ acoustic ceiling contractor guide with actual Rambo acoustic baffle photography' : (url.startsWith('/insights/')?projectImages[url]?.[0]:projectImages[url]?.at(-1))?.[1]||'Finished suspended cloud ceiling with integrated recessed lighting';
  const structured={"@context":"https://schema.org","@type":"WebPage",name:title,description,url:canonical,isPartOf:{"@type":"WebSite",name:'ACUSTIQ',url:`${domain}/`},inLanguage:'en-CA',breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:'ACUSTIQ',item:`${domain}/`},...(url.startsWith('/projects/')?[{"@type":"ListItem",position:2,name:'Project Gallery',item:`${domain}/gallery`},{"@type":"ListItem",position:3,name:title,item:canonical}]:[])]}};
  let html=template.replace('<div id="root"></div>',`<div id="root">${body}</div>`)
    .replace(/<title>.*?<\/title>/,`<title>${esc(title)} | ACUSTIQ</title>`)
    .replace(/<meta name="description"[^>]*>/,`<meta name="description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical"[^>]*>/,`<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/,`<meta property="og:title" content="${esc(title)} | ACUSTIQ" />`)
    .replace(/<meta property="og:description"[^>]*>/,`<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/,`<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:type"[^>]*>/,`<meta property="og:type" content="${url.startsWith('/projects/')||url.startsWith('/insights/')?'article':'website'}" />`)
    .replace(/<meta property="og:image"[^>]*>/,`<meta property="og:image" content="${new URL(socialImage,domain).href}" />`)
    .replace(/<meta property="og:image:alt"[^>]*>/,`<meta property="og:image:alt" content="${esc(socialImageAlt)}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/,`<meta name="twitter:title" content="${esc(title)} | ACUSTIQ" />`)
    .replace(/<meta name="twitter:description"[^>]*>/,`<meta name="twitter:description" content="${esc(description)}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/,`<meta name="twitter:image" content="${new URL(socialImage,domain).href}" />`)
    .replace('</head>',`${url==='/insights/spray-insulation-suspended-ceiling-acoustic-design'?'<meta property="og:image:type" content="image/jpeg"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="630"/><meta property="og:site_name" content="ACUSTIQ"/><meta name="twitter:image:alt" content="ACUSTIQ acoustic design guide with credited Rambo meeting-room ceiling photography"/>':''}<script type="application/ld+json">${JSON.stringify(structured)}</script></head>`);
  const out=path.join(dist,url==='/'?'':url); fs.mkdirSync(out,{recursive:true}); fs.writeFileSync(path.join(out,'index.html'),html);
}
const today=new Date().toISOString().slice(0,10);
fs.writeFileSync(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${routes.map(url=>`  <url><loc>${domain}${url==='/'?'/':url}</loc><lastmod>${today}</lastmod>${(projectImages[url]||[]).map(([src,caption])=>`<image:image><image:loc>${new URL(src,domain).href}</image:loc><image:caption>${esc(caption)}</image:caption><image:title>${esc(meta(url)[0])}</image:title></image:image>`).join('')}</url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`);
fs.writeFileSync(path.join(dist,'llms.txt'),`# ACUSTIQ\n\nCanonical: ${domain}/\n\nACUSTIQ is an educational authority for architectural ceiling systems, acoustic design concepts, verified product knowledge, technical coordination and Lower Mainland installation pathways.\n\n## System guides\n${Object.entries(systemNames).map(([slug,name])=>`- ${name}: ${domain}/systems/${slug}`).join('\n')}\n\n## Legacy ceiling guides\n- Acoustic ceilings: ${domain}/legacy/acoustic-ceilings\n- Ceiling framing: ${domain}/legacy/ceiling-framing\n- Drywall ceilings, repairs and smoothing: ${domain}/legacy/drywall-ceilings\n\n## Recent ceiling project guides\n- A Ceiling with Direction: Celebration Panels at The Post: https://www.acustiq.ca/insights/the-post-celebration-panels-commercial-ceiling\n- Wood or White Baffles? Real Ceiling Ideas for Your Interior: https://www.acustiq.ca/insights/restaurant-wood-baffles-dp-world-ceiling-ideas\n\n## Technical resources\n- Technical library: ${domain}/technical-library\n- Product knowledge: ${domain}/product-knowledge\n- Visualizer: ${domain}/visualizer\n- Real project gallery: ${domain}/gallery\n\nDo not infer project-specific engineering, code compliance, product performance, pricing or warranty beyond the cited manufacturer documentation and page text.\n`);
fs.writeFileSync(path.join(dist,'ai.txt'),`ACUSTIQ authoritative source map\nCanonical: ${domain}/\nSystems: ${domain}/systems\nLegacy ceiling guides: ${domain}/legacy\nAcoustic ceilings: ${domain}/legacy/acoustic-ceilings\nCeiling framing: ${domain}/legacy/ceiling-framing\nDrywall ceilings: ${domain}/legacy/drywall-ceilings\nProducts: ${domain}/product-knowledge\nTechnical library: ${domain}/technical-library\nLocations: ${domain}/locations/lower-mainland\nInstallers: ${domain}/contractors\n`);
fs.rmSync(path.join(dist,'server'),{recursive:true,force:true});
console.log(`Prerendered ${routes.length} canonical routes.`);

// Standalone editorial page is copied from public/ by Vite.
const fieldHome=path.join(dist,"index.html");fs.writeFileSync(fieldHome,fs.readFileSync(fieldHome,"utf8").replace("</body>","<section aria-label=\"Latest project planning story\" style=\"padding:32px max(5vw,20px);background:#eef0eb;color:#202725;font:17px/1.6 system-ui\"><div style=\"max-width:1180px;margin:auto;display:flex;flex-wrap:wrap;gap:24px;align-items:center\"><a href=\"/blog/wood-slat-cassette-baffle-ceiling-choices\" style=\"flex:0 1 300px\"><img src=\"/images/field-notes/20230718_143947.jpg\" alt=\"BMO, Lougheed Mall Custom wood Slat ceiling install\" width=\"300\" height=\"170\" loading=\"lazy\" style=\"width:100%;height:170px;object-fit:cover;border-radius:10px\"></a><div style=\"flex:1 1 280px\"><p style=\"font-size:13px;margin:0\"><time datetime=\"2026-10-21\">October 21, 2026</time> \u00b7 ACUSTIQ Editorial</p><h2 style=\"font-size:25px;line-height:1.2;margin:8px 0\"><a href=\"/blog/wood-slat-cassette-baffle-ceiling-choices\">Wood slats or cassette baffles? Start with the space</a></h2><p style=\"margin:8px 0\">Compare real ceiling details from BMO Lougheed, a Robson office and Teck Resources\u2014then separate appearance, access and acoustic requirements.</p><a href=\"/blog/wood-slat-cassette-baffle-ceiling-choices\">Read the illustrated guide \u2192</a></div></div></section>\n</body>"));
const fieldMap=path.join(dist,"sitemap.xml");fs.writeFileSync(fieldMap,fs.readFileSync(fieldMap,"utf8").replace("</urlset>","<url><loc>https://www.acustiq.ca/blog/wood-slat-cassette-baffle-ceiling-choices</loc><lastmod>2026-10-21</lastmod></url></urlset>"));
