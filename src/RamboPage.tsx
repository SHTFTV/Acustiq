import {useEffect, useState} from 'react';
import {Building2, ChevronLeft, ChevronRight, MapPin, PanelsTopLeft, X} from 'lucide-react';
import {rwcArchivePhotos} from './RwcArchivePage';

type GalleryPhoto={src:string; title?:string};

const mattEmailPhotos:GalleryPhoto[]=[
  {src:'/projects/rwc-featured/ilm-disney-acoustic-baffles.jpg',title:'ILM / Disney'},
  {src:'/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg',title:'Microsoft'},
  {src:'/projects/rwc-featured/microsoft-acoustic-clouds-vertical.jpg',title:'Microsoft'},
  {src:'/projects/rwc-featured/microsoft-acoustic-clouds-detail.jpg',title:'Microsoft'},
  {src:'/projects/rwc-featured/southpoint-wood-slat-acoustic-ceiling.jpg',title:'Southpointe Academy'},
  {src:'/projects/rwc-featured/suspended-wood-slat-ceiling.jpg'},
];

const beattyPhotos:GalleryPhoto[]=[
  {src:'/projects/837-beatty-tectum-panels-material.jpg',title:'837 Beatty Street'},
  {src:'/projects/837-beatty-tectum-panel-layout.jpg',title:'837 Beatty Street'},
  {src:'/projects/837-beatty-beveled-tectum-panels.jpg',title:'837 Beatty Street'},
  {src:'/projects/837-beatty-acoustic-wall-installation.jpg',title:'837 Beatty Street'},
  {src:'/projects/837-beatty-acoustic-panel-detail.jpg',title:'837 Beatty Street'},
  {src:'/projects/837-beatty-tectum-wall-progress.jpg',title:'837 Beatty Street'},
  {src:'/projects/837-beatty-tectum-wall-finished.jpg',title:'837 Beatty Street'},
];

const steelStudAcousticPhotos:GalleryPhoto[]=[
  {src:'/projects/cloud-ceiling-installation-hires.webp'},
  {src:'/projects/cloud-ceiling-finished.webp'},
  {src:'/projects/linear-wood-feature-ceiling.webp'},
];

const galleryPhotos:GalleryPhoto[]=[
  ...mattEmailPhotos,
  ...beattyPhotos,
  ...rwcArchivePhotos.map(({src})=>({src})),
  ...steelStudAcousticPhotos,
];

export default function RamboPage(){
 const [openIndex,setOpenIndex]=useState<number|null>(null);
 const openPhoto=openIndex===null?null:galleryPhotos[openIndex];
 useEffect(()=>{
  if(openIndex===null)return;
  const previous=document.body.style.overflow;
  document.body.style.overflow='hidden';
  const onKey=(event:KeyboardEvent)=>{
   if(event.key==='Escape')setOpenIndex(null);
   if(event.key==='ArrowLeft')setOpenIndex(current=>current===null?null:(current-1+galleryPhotos.length)%galleryPhotos.length);
   if(event.key==='ArrowRight')setOpenIndex(current=>current===null?null:(current+1)%galleryPhotos.length);
  };
  window.addEventListener('keydown',onKey);
  return()=>{document.body.style.overflow=previous;window.removeEventListener('keydown',onKey)};
 },[openIndex]);

 const schema={'@context':'https://schema.org','@type':'ProfessionalService',name:'Rambo Walls & Ceilings',url:'https://www.acustiq.ca/contractors/rambo-walls-ceilings',sameAs:['https://rambowalls.com'],areaServed:{'@type':'AdministrativeArea',name:'Lower Mainland, British Columbia'},knowsAbout:['Suspended T-bar ceilings','Acoustic wall panels','Acoustic ceiling clouds','Acoustic baffles','Specialty ceilings','Steel stud framing','Drywall'],subjectOf:galleryPhotos.map(photo=>({'@type':'ImageObject',contentUrl:`https://www.acustiq.ca${photo.src}`,...(photo.title?{name:photo.title}:{})}))};

 return <div className="project-detail"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><header className="project-nav"><a href="/" className="brand">ACUSTIQ<span>.</span></a><nav><a href="/systems">Systems</a><a href="/gallery">Gallery</a><a href="/technical-library">Technical Library</a></nav><a href="https://rambowalls.com" className="top-cta" target="_blank" rel="noopener noreferrer">Contact Rambo</a></header><main>
  <section className="project-hero"><div className="project-hero-copy"><span>FEATURED CONTRACTOR / LOWER MAINLAND</span><h1>Rambo Walls &amp; Ceilings.</h1><p>Commercial ceilings, acoustic treatments, steel stud framing and drywall.</p><div className="project-facts"><div><MapPin/><b>Lower Mainland, BC</b></div><div><PanelsTopLeft/><b>Ceiling systems</b></div><div><Building2/><b>Interior construction</b></div></div></div><img src="/projects/rwc-featured/ilm-disney-acoustic-baffles.jpg" alt="Rambo Walls and Ceilings project"/></section>
  <section className="rwc-simple-gallery-heading"><span>PROJECT PHOTOS</span><h2>RWC gallery.</h2></section>
  <section className="rwc-simple-gallery" aria-label="Rambo Walls and Ceilings photo gallery">{galleryPhotos.map((photo,index)=><button type="button" className="rwc-gallery-item" key={`${photo.src}-${index}`} onClick={()=>setOpenIndex(index)} aria-label={`Open RWC project photo ${index+1}`}><img src={photo.src} alt={photo.title||`RWC project photo ${index+1}`} loading={index<10?'eager':'lazy'}/></button>)}</section>
 </main>
 {openPhoto&&<div className="rwc-lightbox" role="dialog" aria-modal="true" aria-label="RWC project photo" onClick={()=>setOpenIndex(null)}><button type="button" className="rwc-lightbox-close" onClick={()=>setOpenIndex(null)} aria-label="Close photo"><X/></button><button type="button" className="rwc-lightbox-nav previous" onClick={event=>{event.stopPropagation();setOpenIndex((openIndex!-1+galleryPhotos.length)%galleryPhotos.length)}} aria-label="Previous photo"><ChevronLeft/></button><figure onClick={event=>event.stopPropagation()}><img src={openPhoto.src} alt={openPhoto.title||'RWC project photo'}/><figcaption><span>{openIndex!+1} / {galleryPhotos.length}</span>{openPhoto.title&&<b>{openPhoto.title}</b>}</figcaption></figure><button type="button" className="rwc-lightbox-nav next" onClick={event=>{event.stopPropagation();setOpenIndex((openIndex!+1)%galleryPhotos.length)}} aria-label="Next photo"><ChevronRight/></button></div>}
 <footer><b>ACUSTIQ.</b><span>Rambo Walls &amp; Ceilings project gallery</span><span>Canada</span></footer></div>;
}
