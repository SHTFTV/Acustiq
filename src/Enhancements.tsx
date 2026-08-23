import React from 'react';
import {createPortal} from 'react-dom';
import {ArrowRight, Building2, Layers3, PanelsTopLeft} from 'lucide-react';
import './enhancements.css';

const gallery = [
  {
    src:'/projects/linear-wood-feature-ceiling.webp',
    title:'Linear Wood Feature Ceiling',
    type:'Linear wood / architectural ceiling',
    description:'Real installation photography showing the visual rhythm, suspension zone and integrated services of a linear wood ceiling assembly.',
    tags:['Linear wood','Feature ceiling','Integrated services']
  },
  {
    src:'/projects/cloud-ceiling-finished.webp',
    title:'Finished Suspended Cloud Ceiling',
    type:'Acoustic cloud / custom ceiling',
    description:'Completed suspended ceiling feature with integrated lighting, showing how shaped ceiling elements can define a space while coordinating with building services.',
    tags:['Cloud ceiling','Integrated lighting','Finished installation']
  },
  {
    src:'/projects/cloud-ceiling-installation.webp',
    title:'Cloud Ceiling Installation Detail',
    type:'Installation / specialty ceiling',
    description:'In-progress ceiling construction showing framing, boarding and field coordination before final finishing — useful context for designers, estimators and installers.',
    tags:['Installation','Framing','Drywall','Coordination']
  }
];

function Gallery(){
  return <section className="real-gallery" aria-labelledby="real-gallery-title">
    <div className="gallery-head">
      <div><span>REAL INSTALLATIONS / SYSTEM INSPIRATION</span><h2 id="real-gallery-title">Ceiling systems in the field.</h2></div>
      <p>Real installation photography gives designers and contractors a better starting point than generic product renders alone. We use project imagery to explain system types, details, coordination and finish possibilities without inventing project credits or manufacturer claims.</p>
    </div>
    <div className="gallery-grid">
      {gallery.map((item,i)=><article className={i===0?'gallery-card gallery-card-wide':'gallery-card'} key={item.src}>
        <div className="gallery-image"><img src={item.src} alt={item.title} loading={i===0?'eager':'lazy'}/><span>{item.type}</span></div>
        <div className="gallery-copy"><h3>{item.title}</h3><p>{item.description}</p><div className="gallery-tags">{item.tags.map(tag=><b key={tag}>{tag}</b>)}</div></div>
      </article>)}
    </div>
    <div className="gallery-paths">
      <div><PanelsTopLeft/><h3>Explore systems</h3><p>Compare ceiling families, applications and design considerations.</p><a href="/systems">Browse ceiling systems <ArrowRight size={16}/></a></div>
      <div><Layers3/><h3>Build technical knowledge</h3><p>Learn grid, acoustics, coordination, seismic concepts and specification language.</p><a href="/technical-library">Open technical library <ArrowRight size={16}/></a></div>
      <div><Building2/><h3>Manufacturer-ready platform</h3><p>Verified product data, technical files and launches can layer onto an authority site that already works independently.</p><a href="/products">See product structure <ArrowRight size={16}/></a></div>
    </div>
  </section>
}

export default function Enhancements(){
  const [target,setTarget]=React.useState<HTMLElement|null>(null);
  React.useEffect(()=>{
    const mount=()=>{
      const main=document.querySelector('.site main') as HTMLElement|null;
      setTarget(main);
      const homeConcept=document.querySelector('.site main > .concept') as HTMLElement|null;
      if(homeConcept && !homeConcept.dataset.realImage){
        homeConcept.dataset.realImage='true';
        homeConcept.classList.add('real-hero-image');
        homeConcept.innerHTML='<img src="/projects/linear-wood-feature-ceiling.webp" alt="Linear wood architectural ceiling installation"><div class="concept-label">REAL INSTALLATION · LINEAR WOOD FEATURE CEILING</div>';
      }
      document.querySelectorAll('.note').forEach(n=>{
        if(n.textContent?.includes('concept imagery')) n.textContent='ACUSTIQ combines real installation knowledge, technical education and verified manufacturer information as it becomes available.';
      });
      document.querySelectorAll('.matt-banner span').forEach(n=>{if(n.textContent?.includes('MATT')) n.textContent='MANUFACTURER / INDUSTRY CONTRIBUTIONS';});
      document.querySelectorAll('.matt-banner h2').forEach(n=>{n.textContent='Have useful ceiling assets? Put them to work.';});
      document.querySelectorAll('.matt-banner p').forEach(n=>{n.textContent='Manufacturers, reps and installers can contribute product files, project photography, CAD/BIM, technical sheets and launch material. ACUSTIQ organizes verified source material into useful product and technical content.';});
    };
    mount();
    const onNav=()=>setTimeout(mount,0);
    window.addEventListener('popstate',onNav);
    return()=>window.removeEventListener('popstate',onNav);
  },[]);
  return target?createPortal(<Gallery/>,target):null;
}
