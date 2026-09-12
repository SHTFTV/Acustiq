import {ArrowRight, MapPin, PanelsTopLeft} from 'lucide-react';

const photos=[
  {src:"/projects/rwc-archive/20160817_235638.jpg",alt:"Rambo Walls and Ceilings project archive photograph 01"},
  {src:"/projects/rwc-archive/20160817_235654.jpg",alt:"Rambo Walls and Ceilings project archive photograph 02"},
  {src:"/projects/rwc-archive/20190805_154522.jpg",alt:"Rambo Walls and Ceilings project archive photograph 03"},
  {src:"/projects/rwc-archive/20190805_154545.jpg",alt:"Rambo Walls and Ceilings project archive photograph 04"},
  {src:"/projects/rwc-archive/20210809_133608.jpg",alt:"Rambo Walls and Ceilings project archive photograph 05"},
  {src:"/projects/rwc-archive/20210825_085832.jpg",alt:"Rambo Walls and Ceilings project archive photograph 06"},
  {src:"/projects/rwc-archive/20211004_140229.jpg",alt:"Rambo Walls and Ceilings project archive photograph 07"},
  {src:"/projects/rwc-archive/20211004_140238.jpg",alt:"Rambo Walls and Ceilings project archive photograph 08"},
  {src:"/projects/rwc-archive/20211004_140254.jpg",alt:"Rambo Walls and Ceilings project archive photograph 09"},
  {src:"/projects/rwc-archive/20211005_130649.jpg",alt:"Rambo Walls and Ceilings project archive photograph 10"},
  {src:"/projects/rwc-archive/20211005_130715.jpg",alt:"Rambo Walls and Ceilings project archive photograph 11"},
  {src:"/projects/rwc-archive/20211005_130727.jpg",alt:"Rambo Walls and Ceilings project archive photograph 12"},
  {src:"/projects/rwc-archive/20211009_134839.jpg",alt:"Rambo Walls and Ceilings project archive photograph 13"},
  {src:"/projects/rwc-archive/20220803_121928.jpg",alt:"Rambo Walls and Ceilings project archive photograph 14"},
  {src:"/projects/rwc-archive/20220803_121946.jpg",alt:"Rambo Walls and Ceilings project archive photograph 15"},
  {src:"/projects/rwc-archive/20220803_122001.jpg",alt:"Rambo Walls and Ceilings project archive photograph 16"},
  {src:"/projects/rwc-archive/20220812_140127.jpg",alt:"Rambo Walls and Ceilings project archive photograph 17"},
  {src:"/projects/rwc-archive/20220812_140252.jpg",alt:"Rambo Walls and Ceilings project archive photograph 18"},
  {src:"/projects/rwc-archive/20220823_124638.jpg",alt:"Rambo Walls and Ceilings project archive photograph 19"},
  {src:"/projects/rwc-archive/20220901_123214.jpg",alt:"Rambo Walls and Ceilings project archive photograph 20"},
  {src:"/projects/rwc-archive/20220907_095928.jpg",alt:"Rambo Walls and Ceilings project archive photograph 21"},
  {src:"/projects/rwc-archive/20221007_162247.jpg",alt:"Rambo Walls and Ceilings project archive photograph 22"},
  {src:"/projects/rwc-archive/20221124_100329.jpg",alt:"Rambo Walls and Ceilings project archive photograph 23"},
  {src:"/projects/rwc-archive/20221124_100347.jpg",alt:"Rambo Walls and Ceilings project archive photograph 24"},
  {src:"/projects/rwc-archive/20221124_100357.jpg",alt:"Rambo Walls and Ceilings project archive photograph 25"},
  {src:"/projects/rwc-archive/20221124_100407.jpg",alt:"Rambo Walls and Ceilings project archive photograph 26"},
  {src:"/projects/rwc-archive/20231106_123855.jpg",alt:"Rambo Walls and Ceilings project archive photograph 27"},
  {src:"/projects/rwc-archive/20231106_123900.jpg",alt:"Rambo Walls and Ceilings project archive photograph 28"},
  {src:"/projects/rwc-archive/20231108_094347.jpg",alt:"Rambo Walls and Ceilings project archive photograph 29"},
  {src:"/projects/rwc-archive/20231220_133619.jpg",alt:"Rambo Walls and Ceilings project archive photograph 30"},
  {src:"/projects/rwc-archive/20231220_134121.jpg",alt:"Rambo Walls and Ceilings project archive photograph 31"},
  {src:"/projects/rwc-archive/20240912_161125.jpg",alt:"Rambo Walls and Ceilings project archive photograph 32"},
  {src:"/projects/rwc-archive/20241011_125846.jpg",alt:"Rambo Walls and Ceilings project archive photograph 33"},
  {src:"/projects/rwc-archive/20241018_090504.jpg",alt:"Rambo Walls and Ceilings project archive photograph 34"},
  {src:"/projects/rwc-archive/20250514_110803.jpg",alt:"Rambo Walls and Ceilings project archive photograph 35"},
  {src:"/projects/rwc-archive/HatchAcousticPanelInstall.jpg",alt:"Rambo Walls and Ceilings project archive photograph 36"},
  {src:"/projects/rwc-archive/IMG_6681.jpg",alt:"Rambo Walls and Ceilings project archive photograph 37"},
  {src:"/projects/rwc-archive/IMG_6693.jpg",alt:"Rambo Walls and Ceilings project archive photograph 38"},
  {src:"/projects/rwc-archive/IMG_6770(1).jpg",alt:"Rambo Walls and Ceilings project archive photograph 39"},
  {src:"/projects/rwc-archive/IMG_6771.jpg",alt:"Rambo Walls and Ceilings project archive photograph 40"},
  {src:"/projects/rwc-archive/IMG_6787.jpg",alt:"Rambo Walls and Ceilings project archive photograph 41"},
  {src:"/projects/rwc-archive/IMG_6794.jpg",alt:"Rambo Walls and Ceilings project archive photograph 42"},
  {src:"/projects/rwc-archive/IMG_6800.jpg",alt:"Rambo Walls and Ceilings project archive photograph 43"},
];

export default function RwcArchivePage(){
 const schema={'@context':'https://schema.org','@type':'CollectionPage',name:'RWC Projects — Rambo Walls & Ceilings Project Archive',url:'https://www.acustiq.ca/gallery/rwc-projects',about:['Acoustic ceilings','Suspended ceilings','Architectural ceiling systems','Acoustic wall panels'],isPartOf:{'@type':'WebSite',name:'ACUSTIQ',url:'https://www.acustiq.ca/'},associatedMedia:photos.map(photo=>({'@type':'ImageObject',contentUrl:`https://www.acustiq.ca${photo.src}`,creator:{'@type':'Organization',name:'Rambo Walls & Ceilings'}}))};
 return <div className="project-detail"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><header className="project-nav"><a href="/" className="brand">ACUSTIQ<span>.</span></a><nav><a href="/systems">Systems</a><a href="/gallery">Gallery</a><a href="/technical-library">Technical Library</a></nav><a href="/contractors/rambo-walls-ceilings" className="top-cta">Rambo contractor profile</a></header><main>
 <section className="pagehero rwc-archive-hero"><span>RWC PROJECTS / VERIFIED FIELD PHOTOGRAPHY</span><h1>Rambo Walls &amp; Ceilings project archive.</h1><p>Forty-three original construction photographs supplied by Matt McKenzie document real ceiling, acoustic-panel and commercial interior work completed over multiple years. Project locations and system details remain intentionally unassigned unless confirmed by the source.</p><div className="actions"><a className="primary" href="/contractors/rambo-walls-ceilings">View contractor profile <ArrowRight size={18}/></a><a className="secondary" href="/projects/837-beatty-tectum-acoustic-panels">837 Beatty case study</a></div></section>
 <section className="rwc-note"><PanelsTopLeft/><div><b>Evidence first</b><p>These are contractor-supplied project photographs, not stock imagery. Missing project names, locations and specifications will be added only after confirmation.</p></div><MapPin/><div><b>Map pins pending</b><p>Location schema and public-safe map pins will be added project by project after the city or address is verified.</p></div></section>
 <section className="project-gallery rwc-master-gallery" aria-label="Rambo Walls and Ceilings project archive">{photos.map((photo,i)=><figure key={photo.src}><img src={photo.src} alt={photo.alt} loading={i<4?'eager':'lazy'}/><figcaption><b>{String(i+1).padStart(2,'0')}</b><span>RWC project photograph</span><small>Location and project details pending confirmation</small></figcaption></figure>)}</section>
 </main><footer><b>ACUSTIQ.</b><span>RWC Projects · Rambo Walls &amp; Ceilings field archive</span><span>Canada · Ceiling knowledge, visualization and installation resources</span></footer></div>;
}

