import React from 'react';
import {ArrowLeft, ArrowRight, Building2, CheckCircle2, ImagePlus, Palette, PanelsTopLeft, Sparkles, Upload, WandSparkles} from 'lucide-react';
import './visualizer-page.css';

const systems=[
  {id:'wood',label:'Slat Wood',desc:'Linear slats, warm finishes, directional rhythm'},
  {id:'clouds',label:'Acoustic Clouds',desc:'Suspended shapes for acoustic control and visual focus'},
  {id:'tbar',label:'T-Bar',desc:'Commercial grid and panel ceiling systems'},
  {id:'baffles',label:'Baffles',desc:'Vertical acoustic elements for open-plenum spaces'},
];

const finishes:Record<string,string[]>={
  wood:['Natural Oak','White Oak','Walnut','Black','Light Maple','Custom Finish'],
  clouds:['White','Black','Charcoal','Warm Grey','Sand','Custom Colour'],
  tbar:['White Grid','Black Grid','Warm White Panel','Grey Panel','Black Panel','Custom'],
  baffles:['White','Black','Grey','Oak Look','Walnut Look','Custom Colour'],
};

export default function VisualizerPage(){
  const [photo,setPhoto]=React.useState<string>('');
  const [system,setSystem]=React.useState('wood');
  const [finish,setFinish]=React.useState(finishes.wood[0]);

  function upload(e:React.ChangeEvent<HTMLInputElement>){
    const file=e.target.files?.[0]; if(!file)return;
    const url=URL.createObjectURL(file); setPhoto(url);
  }
  function chooseSystem(id:string){setSystem(id);setFinish(finishes[id][0]);}

  return <div className="vp-shell">
    <header className="vp-top"><a href="/"><b>ACUSTIQ<span>.</span></b></a><nav><a href="/systems">Systems</a><a href="/products">Products</a><a href="/technical-library">Technical Library</a></nav><a className="vp-back" href="/"><ArrowLeft/> Back to ACUSTIQ</a></header>

    <section className="vp-hero">
      <div><span>ROOM PHOTO + ARCHITECTURAL CEILING VISUALIZER</span><h1>Load your room.<br/><em>Try your ceiling.</em></h1><p>Upload a room photo, choose an architectural ceiling style, explore colours and finishes, then move toward real manufacturer products that can achieve the look.</p></div>
      <div className="vp-flow"><div><b>01</b><ImagePlus/><strong>Upload room photo</strong><small>Use your own space as the visual starting point.</small></div><div><b>02</b><PanelsTopLeft/><strong>Choose ceiling style</strong><small>Slat wood, clouds, T-bar, baffles and more.</small></div><div><b>03</b><Palette/><strong>Pick colours + finishes</strong><small>Oak, walnut, black, white, grey and manufacturer finishes.</small></div><div><b>04</b><WandSparkles/><strong>Match real products</strong><small>See manufacturer products that fit your selected design.</small></div></div>
    </section>

    <section className="vp-workspace">
      <aside className="vp-controls">
        <div className="vp-control-block"><span>1 / ROOM PHOTO</span><label className="vp-upload"><Upload/><b>{photo?'Change room photo':'Upload your room photo'}</b><small>JPG, PNG or WebP · preview stays in your browser</small><input type="file" accept="image/*" onChange={upload}/></label></div>
        <div className="vp-control-block"><span>2 / CEILING STYLE</span><div className="vp-system-list">{systems.map(s=><button className={system===s.id?'active':''} onClick={()=>chooseSystem(s.id)} key={s.id}><b>{s.label}</b><small>{s.desc}</small></button>)}</div></div>
        <div className="vp-control-block"><span>3 / COLOUR + FINISH</span><div className="vp-finish-list">{finishes[system].map(f=><button className={finish===f?'active':''} onClick={()=>setFinish(f)} key={f}>{f}</button>)}</div></div>
      </aside>

      <div className="vp-preview">
        <div className="vp-preview-bar"><span>CONCEPT PREVIEW</span><b>{systems.find(s=>s.id===system)?.label} · {finish}</b></div>
        <div className={`vp-room vp-${system}`} style={photo?{backgroundImage:`linear-gradient(rgba(9,15,13,.08),rgba(9,15,13,.08)),url(${photo})`}:undefined}>
          {!photo&&<div className="vp-empty"><ImagePlus/><h2>Upload a room photo to start.</h2><p>Your photo becomes the base for ceiling-style and finish exploration.</p></div>}
          {photo&&<div className="vp-ceiling-demo"><span>{systems.find(s=>s.id===system)?.label}</span><strong>{finish}</strong><small>Concept overlay · manufacturer-specific visualization assets can replace this preview as product libraries are added.</small></div>}
        </div>
        <div className="vp-preview-actions"><button><Sparkles/> Save design concept</button><a href="#product-matches">Find products that match <ArrowRight/></a></div>
      </div>
    </section>

    <section id="product-matches" className="vp-products">
      <div className="vp-section-head"><div><span>REAL PRODUCT MATCHING</span><h2>Design first. Manufacturer products second.</h2></div><p>Once a look is chosen, ACUSTIQ can map it to real manufacturer products using verified finish libraries, dimensions, system compatibility and technical documents. This keeps the visualizer easy for customers while still creating a valuable specification path for manufacturers.</p></div>
      <div className="vp-product-grid"><div><b>YOUR DESIGN</b><h3>{systems.find(s=>s.id===system)?.label}</h3><p>{finish}</p><small>Room-photo concept selection</small></div><div className="vp-placeholder-product"><Building2/><span>MANUFACTURER PRODUCT MATCH</span><h3>Product library opening</h3><p>Approved products, textures and finish assets will appear here when manufacturer libraries are connected.</p></div><div className="vp-placeholder-product"><Building2/><span>ALTERNATIVE MATCH</span><h3>Compare equivalent products</h3><p>Users will be able to compare similar systems and finishes across participating manufacturers.</p></div></div>
    </section>

    <section className="vp-manufacturer">
      <div><span>FOR MANUFACTURERS</span><h2>Add your products to the visualizer.</h2><p>Give ACUSTIQ approved product renders, finish swatches, seamless textures, dimensions, technical data and product links. We organize them into customer-friendly visual choices such as <b>Natural Oak Slat Wood</b> or <b>Black Acoustic Clouds</b>, then connect those choices back to your real product records.</p></div>
      <div className="vp-manufacturer-list"><p><CheckCircle2/> Product families + system type</p><p><CheckCircle2/> Approved room/product renders</p><p><CheckCircle2/> Finish colours + textures</p><p><CheckCircle2/> Dimensions + configuration options</p><p><CheckCircle2/> CAD / BIM / technical PDFs</p><p><CheckCircle2/> Product URLs + launch updates</p><a href="/for-matt">Add manufacturer products <ArrowRight/></a></div>
    </section>

    <section className="vp-installer"><div><span>LOWER MAINLAND INSTALLATION</span><h2>Like the design? Build it.</h2><p>When a concept is ready, Lower Mainland users can move from ACUSTIQ product exploration to field pricing and installation through Rambo Walls & Ceilings, ACUSTIQ's featured regional installer.</p></div><a href="https://rambowalls.com/">Contact regional installer <ArrowRight/></a></section>
  </div>
}
