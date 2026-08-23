import React from 'react';
import {createPortal} from 'react-dom';
import {ArrowRight, Building2, CheckCircle2, Grid3X3, Layers3, MousePointer2, PanelsTopLeft, PenTool, Sparkles, Upload, WandSparkles} from 'lucide-react';
import './enhancements.css';

const gallery = [
  {src:'/projects/linear-wood-feature-ceiling.webp',title:'Linear Wood Feature Ceiling',type:'Linear wood / architectural ceiling',description:'Real installation photography showing the visual rhythm, suspension zone and integrated services of a linear wood ceiling assembly.',tags:['Linear wood','Feature ceiling','Integrated services']},
  {src:'/projects/cloud-ceiling-finished.webp',title:'Finished Suspended Cloud Ceiling',type:'Acoustic cloud / custom ceiling',description:'Completed suspended ceiling feature with integrated lighting, showing how shaped ceiling elements can define a space while coordinating with building services.',tags:['Cloud ceiling','Integrated lighting','Finished installation']},
  {src:'/projects/cloud-ceiling-installation.webp',title:'Cloud Ceiling Installation Detail',type:'Installation / specialty ceiling',description:'In-progress ceiling construction showing framing, boarding and field coordination before final finishing — useful context for designers, estimators and installers.',tags:['Installation','Framing','Drywall','Coordination']}
];

function Visualizer(){
  const [mode,setMode]=React.useState<'grid'|'cloud'|'wood'>('grid');
  return <section className="visualizer-section" aria-labelledby="visualizer-title">
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

function Gallery(){return <section className="real-gallery" aria-labelledby="real-gallery-title"><div className="gallery-head"><div><span>REAL INSTALLATIONS / SYSTEM INSPIRATION</span><h2 id="real-gallery-title">Ceiling systems in the field.</h2></div><p>Real installation photography gives designers and contractors a better starting point than generic product renders alone. We use project imagery to explain system types, details, coordination and finish possibilities without inventing project credits or manufacturer claims.</p></div><div className="gallery-grid">{gallery.map((item,i)=><article className={i===0?'gallery-card gallery-card-wide':'gallery-card'} key={item.src}><div className="gallery-image"><img src={item.src} alt={item.title} loading={i===0?'eager':'lazy'}/><span>{item.type}</span></div><div className="gallery-copy"><h3>{item.title}</h3><p>{item.description}</p><div className="gallery-tags">{item.tags.map(tag=><b key={tag}>{tag}</b>)}</div></div></article>)}</div><div className="gallery-paths"><div><PanelsTopLeft/><h3>Explore systems</h3><p>Compare ceiling families, applications and design considerations.</p><a href="/systems">Browse ceiling systems <ArrowRight size={16}/></a></div><div><Layers3/><h3>Build technical knowledge</h3><p>Learn grid, acoustics, coordination, seismic concepts and specification language.</p><a href="/technical-library">Open technical library <ArrowRight size={16}/></a></div><div><Building2/><h3>Manufacturer-ready platform</h3><p>Verified product data, technical files and launches can layer onto an authority site that already works independently.</p><a href="/products">See product structure <ArrowRight size={16}/></a></div></div></section>}

function IndustryPage(){const items=[['Product data','Catalogues, product families, dimensions, materials, acoustics, fire data and application limits.'],['Technical files','Data sheets, install manuals, CAD details, BIM/Revit files, specifications and test reports.'],['Finishes + visualization assets','Finish libraries, colour charts, textures, product renders and approved visualization assets.'],['Project photography','Completed spaces, installation details and field photography with whatever verified credits are available.'],['Launches + updates','New systems, colours, improvements, technical changes and product-launch information.'],['Field knowledge','Common questions, coordination issues, substitution guidance and practical installation knowledge.']];return <section className="industry-page"><div className="industry-hero"><span>INDUSTRY CONTRIBUTIONS</span><h1>Put good ceiling information to work.</h1><p>ACUSTIQ is an independent ceiling and acoustic-systems knowledge platform. Manufacturers, representatives, installers and technical specialists can contribute verified source material that improves product discovery, specification support and visualization.</p></div><div className="industry-grid">{items.map(([t,d],i)=><div key={t}><b>0{i+1}</b><h2>{t}</h2><p>{d}</p><CheckCircle2/></div>)}</div><div className="industry-callout"><Upload/><div><span>SIMPLE HANDOFF</span><h2>Send the raw assets. We organize the publishing.</h2><p>There is no need to rewrite material into “website copy.” Product folders, PDFs, images, spreadsheets, CAD/BIM and launch packages can be mapped into structured product pages, technical resources and visualization libraries. Manufacturer-specific claims remain tied to verifiable source material.</p></div></div></section>}

export default function Enhancements(){
  const [target,setTarget]=React.useState<HTMLElement|null>(null);
  const [path,setPath]=React.useState(window.location.pathname);
  React.useEffect(()=>{
    const mount=()=>{
      setPath(window.location.pathname);
      const main=document.querySelector('.site main') as HTMLElement|null; setTarget(main);
      const oldMatt=document.querySelector('.matt-page') as HTMLElement|null; if(oldMatt) oldMatt.style.display='none';
      document.querySelectorAll('.topbar a').forEach(a=>{if(a.textContent==='Content Map')a.textContent='Industry';if(a.textContent==='Manufacturer Upload Map')a.textContent='Contribute Assets';});
      const homeConcept=document.querySelector('.site main > .concept') as HTMLElement|null;
      if(homeConcept && !homeConcept.dataset.realImage){homeConcept.dataset.realImage='true';homeConcept.classList.add('real-hero-image');homeConcept.innerHTML='<img src="/projects/linear-wood-feature-ceiling.webp" alt="Linear wood architectural ceiling installation"><div class="concept-label">REAL INSTALLATION · LINEAR WOOD FEATURE CEILING</div>';}
      document.querySelectorAll('.note').forEach(n=>{if(n.textContent?.includes('concept imagery'))n.textContent='ACUSTIQ combines real installation knowledge, technical education and verified manufacturer information as it becomes available.';});
      document.querySelectorAll('.matt-banner span').forEach(n=>{if(n.textContent?.includes('MATT'))n.textContent='MANUFACTURER / INDUSTRY CONTRIBUTIONS';});
      document.querySelectorAll('.matt-banner h2').forEach(n=>{n.textContent='Have useful ceiling assets? Put them to work.';});
      document.querySelectorAll('.matt-banner p').forEach(n=>{n.textContent='Manufacturers, reps and installers can contribute product files, project photography, CAD/BIM, technical sheets and launch material. ACUSTIQ organizes verified source material into useful product and technical content.';});
    };
    mount(); const onNav=()=>setTimeout(mount,0); window.addEventListener('popstate',onNav); return()=>window.removeEventListener('popstate',onNav);
  },[]);
  if(!target)return null;
  if(path==='/for-matt')return createPortal(<IndustryPage/>,target);
  if(path==='/')return createPortal(<><Visualizer/><Gallery/></>,target);
  return null;
}
