import React from 'react';
import {createPortal} from 'react-dom';
import {ArrowRight, Building2, CheckCircle2, Grid3X3, Layers3, MousePointer2, PanelsTopLeft, PenTool, Sparkles, Upload, WandSparkles} from 'lucide-react';
import './enhancements.css';

const gallery = [
  {src:'/projects/linear-wood-feature-ceiling.webp',title:'Linear Wood Feature Ceiling',type:'Linear wood / architectural ceiling',description:'Real installation photography showing the visual rhythm, suspension zone and integrated services of a linear wood ceiling assembly.',tags:['Linear wood','Feature ceiling','Integrated services']},
  {src:'/projects/cloud-ceiling-finished.webp',title:'Finished Suspended Cloud Ceiling',type:'Acoustic cloud / custom ceiling',description:'Completed suspended ceiling feature with integrated lighting, showing how shaped ceiling elements can define a space while coordinating with building services.',tags:['Cloud ceiling','Integrated lighting','Finished installation']},
  {src:'https://raw.githubusercontent.com/SHTFTV/rambowalls.com/main/public/images/service-ceilings.png',title:'Cloud Ceiling Installation Detail',type:'Installation / specialty ceiling',description:'In-progress ceiling construction showing framing, boarding and field coordination before final finishing — useful context for designers, estimators and installers.',tags:['Installation','Framing','Drywall','Coordination']}
];

function Visualizer(){
  const [mode,setMode]=React.useState<'grid'|'cloud'|'wood'>('grid');
  return <section id="visualizer" className="visualizer-section" aria-labelledby="visualizer-title">
    <div className="visualizer-copy">
      <span>ROOM GRID + CEILING VISUALIZER</span>
      <h2 id="visualizer-title">Sketch the room. Test the ceiling.</h2>
      <p>ACUSTIQ is being shaped around a fast design workflow: trace or sketch a room, set dimensions, choose a ceiling family, test layout and finish directions, then coordinate the ceiling plane with lights, diffusers, sprinklers and access points.</p>
      <div className="visualizer-steps">
        <div><PenTool/><b>1. Sketch or trace</b><small>Start from a simple room outline, field dimensions or an imported plan.</small></div>
        <div><Grid3X3/><b>2. Set the ceiling grid</b><small>Establish module direction, borders, clouds, baffles or linear runs.</small></div>
        <div><WandSparkles/><b>3. Visualize systems</b><small>Switch ceiling styles and, later, manufacturer finishes and product assets.</small></div>
        <div><MousePointer2/><b>4. Coordinate + specify</b><small>Place services, compare options and move toward product/specification records.</small></div>
      </div>
      <div className="visualizer-note"><Sparkles size={17}/><span>The first version is a design explainer and interactive concept preview. The architecture is ready to grow into a faster room-to-system visualization tool as product libraries are added.</span></div>
    </div>
    <div className="visualizer-demo">
      <div className="demo-toolbar"><b>ROOM 01</b><span>24' × 18'</span><div>{(['grid','cloud','wood'] as const).map(x=><button key={x} onClick={()=>setMode(x)} className={mode===x?'active':''}>{x==='grid'?'T-Bar':x==='cloud'?'Clouds':'Linear Wood'}</button>)}</div></div>
      <div className={`room-plan mode-${mode}`}>
        <div className="room-label">CONCEPT ROOM</div>
        <i className="service light one"/><i className="service light two"/><i className="service vent"/><i className="service sprinkler s1"/><i className="service sprinkler s2"/>
        {mode==='cloud'&&<><i className="cloud c1"/><i className="cloud c2"/><i className="cloud c3"/></>}
        {mode==='wood'&&<div className="wood-lines">{Array.from({length:15}).map((_,i)=><i key={i}/>)}</div>}
      </div>
      <div className="demo-footer"><span><i className="legend light"/> Lighting</span><span><i className="legend vent"/> HVAC</span><span><i className="legend sprinkler"/> Sprinklers</span><b>Click system tabs to preview</b></div>
    </div>
  </section>
}

function Gallery(){return <section id="gallery" className="real-gallery" aria-labelledby="real-gallery-title"><div className="gallery-head"><div><span>REAL INSTALLATIONS / SYSTEM INSPIRATION</span><h2 id="real-gallery-title">Ceiling systems in the field.</h2></div><p>Real installation photography gives designers and contractors a better starting point than generic product renders alone. We use project imagery to explain system types, details, coordination and finish possibilities without inventing project credits or manufacturer claims.</p></div><div className="gallery-grid">{gallery.map((item,i)=><article className={i===0?'gallery-card gallery-card-wide':'gallery-card'} key={item.src}><div className="gallery-image"><img src={item.src} alt={item.title} loading={i===0?'eager':'lazy'}/><span>{item.type}</span></div><div className="gallery-copy"><h3>{item.title}</h3><p>{item.description}</p><div className="gallery-tags">{item.tags.map(tag=><b key={tag}>{tag}</b>)}</div></div></article>)}</div><div className="gallery-paths"><div><PanelsTopLeft/><h3>Explore systems</h3><p>Compare ceiling families, applications and design considerations.</p><a href="/systems">Browse ceiling systems <ArrowRight size={16}/></a></div><div><Layers3/><h3>Build technical knowledge</h3><p>Learn grid, acoustics, coordination, seismic concepts and specification language.</p><a href="/technical-library">Open technical library <ArrowRight size={16}/></a></div><div><Building2/><h3>Manufacturer-ready platform</h3><p>Verified product data, technical files and launches can layer onto an authority site that already works independently.</p><a href="/products">See product structure <ArrowRight size={16}/></a></div></div></section>}

function IndustryPage(){const items=[['Product data','Catalogues, product families, dimensions, materials, acoustics, fire data and application limits.'],['Technical files','Data sheets, install manuals, CAD details, BIM/Revit files, specifications and test reports.'],['Finishes + visualization assets','Finish libraries, colour charts, textures, product renders and approved visualization assets.'],['Project photography','Completed spaces, installation details and field photography with whatever verified credits are available.'],['Launches + updates','New systems, colours, improvements, technical changes and product-launch information.'],['Field knowledge','Common questions, coordination issues, substitution guidance and practical installation knowledge.']];return <section className="industry-page"><div className="industry-hero"><span>INDUSTRY CONTRIBUTIONS</span><h1>Put good ceiling information to work.</h1><p>ACUSTIQ is an independent ceiling and acoustic-systems knowledge platform. Manufacturers, representatives, installers and technical specialists can contribute verified source material that improves product discovery, specification support and visualization.</p></div><div className="industry-grid">{items.map(([t,d],i)=><div key={t}><b>0{i+1}</b><h2>{t}</h2><p>{d}</p><CheckCircle2/></div>)}</div><div className="industry-callout"><Upload/><div><span>SIMPLE HANDOFF</span><h2>Send the raw assets. We organize the publishing.</h2><p>There is no need to rewrite material into “website copy.” Product folders, PDFs, images, spreadsheets, CAD/BIM and launch packages can be mapped into structured product pages, technical resources and visualization libraries. Manufacturer-specific claims remain tied to verifiable source material.</p></div></div></section>}

function GuestPostPage(){const rules=['Ceilings, acoustics, architecture, interiors, construction, specification or closely related building-industry topics.','Original, useful content written for a professional audience — no spun or mass-generated link-farm copy.','Company and author attribution is welcome; claims and technical data must be supportable.','Relevant links are allowed when they help the reader. ACUSTIQ retains editorial control over titles, formatting and link placement.','The $10 fee covers submission review and publishing administration; payment does not guarantee acceptance of unsuitable content.'];return <section className="guest-page"><div className="guest-hero"><span>CONTRIBUTE / GUEST POST</span><div className="guest-price">$10</div><h1>Guest post with ACUSTIQ.</h1><p>Share useful ceiling, acoustic, architectural or construction knowledge with a focused industry audience. Keep it practical, specific and worth reading.</p><a href="#guest-guidelines" className="guest-cta">See submission guidelines <ArrowRight size={17}/></a></div><div id="guest-guidelines" className="guest-guidelines"><div><span>EDITORIAL STANDARD</span><h2>Low fee. High relevance.</h2><p>The goal is to make it easy for good contractors, manufacturers, designers and specialists to contribute knowledge — without turning ACUSTIQ into a paid-link directory.</p></div><div className="guest-rules">{rules.map((rule,i)=><div key={rule}><b>0{i+1}</b><p>{rule}</p><CheckCircle2/></div>)}</div></div><div className="guest-ready"><div><span>WHAT TO PREPARE</span><h2>Send a useful article package.</h2><p>Have a working title, article text, author/company name, one or more relevant images you have permission to publish, and any source links needed to support technical claims. A direct checkout/submission workflow can be connected next; this page establishes the public offer and editorial standard now.</p></div><div className="guest-price-card"><b>$10</b><span>submission review</span><small>Relevant submissions only</small></div></div></section>}

function FooterB2B(){return <nav className="footer-b2b" aria-label="Industry and contributor links"><span>B2B / INDUSTRY</span><a href="/for-matt">Industry contributions</a><a href="/for-matt">Contribute manufacturer assets</a><a href="/guest-post">Guest post with us — $10</a><a href="/products">Product & launch updates</a></nav>}

export default function Enhancements(){
  const [target,setTarget]=React.useState<HTMLElement|null>(null);
  const [footerTarget,setFooterTarget]=React.useState<HTMLElement|null>(null);
  const [path,setPath]=React.useState(window.location.pathname);
  React.useEffect(()=>{
    const mount=()=>{
      const nextPath=window.location.pathname; setPath(nextPath);
      const main=document.querySelector('.site main') as HTMLElement|null; setTarget(main);
      const footer=document.querySelector('.site footer') as HTMLElement|null; setFooterTarget(footer);
      if(main){Array.from(main.children).forEach(child=>{const el=child as HTMLElement;if(el.dataset.enhancementPortal!=='true')el.style.display='';});}
      const oldMatt=document.querySelector('.matt-page') as HTMLElement|null; if(oldMatt) oldMatt.style.display='none';
      if(nextPath==='/guest-post'&&main){Array.from(main.children).forEach(child=>{(child as HTMLElement).style.display='none';});}
      const nav=document.querySelector('.topbar nav');
      if(nav){Array.from(nav.querySelectorAll('a')).forEach(a=>{if(a.textContent==='Content Map'||a.textContent==='Industry')(a as HTMLElement).style.display='none';});if(!nav.querySelector('[data-b2c-extra]')){const visual=document.createElement('a');visual.href='/#visualizer';visual.textContent='Visualizer';visual.dataset.b2cExtra='true';nav.appendChild(visual);const gal=document.createElement('a');gal.href='/#gallery';gal.textContent='Gallery';gal.dataset.b2cExtra='true';nav.appendChild(gal);}}
      const topCta=document.querySelector('.top-cta') as HTMLAnchorElement|null;if(topCta){topCta.style.display='none';}
      const homeConcept=document.querySelector('.site main > .concept') as HTMLElement|null;
      if(homeConcept && !homeConcept.dataset.realImage){homeConcept.dataset.realImage='true';homeConcept.classList.add('real-hero-image');homeConcept.innerHTML='<img src="/projects/linear-wood-feature-ceiling.webp" alt="Linear wood architectural ceiling installation"><div class="concept-label">REAL INSTALLATION · LINEAR WOOD FEATURE CEILING</div>';}
      document.querySelectorAll('.note').forEach(n=>{if(n.textContent?.includes('concept imagery'))n.textContent='ACUSTIQ combines real installation knowledge, technical education and verified manufacturer information as it becomes available.';});
      document.querySelectorAll('.matt-banner span').forEach(n=>{if(n.textContent?.includes('MATT'))n.textContent='MANUFACTURER / INDUSTRY CONTRIBUTIONS';});
      document.querySelectorAll('.matt-banner h2').forEach(n=>{n.textContent='Have useful ceiling assets? Put them to work.';});
      document.querySelectorAll('.matt-banner p').forEach(n=>{n.textContent='Manufacturers, reps and installers can contribute product files, project photography, CAD/BIM, technical sheets and launch material. ACUSTIQ organizes verified source material into useful product and technical content.';});
    };
    mount(); const onNav=()=>setTimeout(mount,0); window.addEventListener('popstate',onNav); return()=>window.removeEventListener('popstate',onNav);
  },[]);
  const portals:React.ReactNode[]=[];
  if(target){if(path==='/for-matt')portals.push(createPortal(<div data-enhancement-portal="true"><IndustryPage/></div>,target));else if(path==='/guest-post')portals.push(createPortal(<div data-enhancement-portal="true"><GuestPostPage/></div>,target));else if(path==='/')portals.push(createPortal(<div data-enhancement-portal="true"><Visualizer/><Gallery/></div>,target));}
  if(footerTarget)portals.push(createPortal(<FooterB2B/>,footerTarget));
  return <>{portals}</>;
}
