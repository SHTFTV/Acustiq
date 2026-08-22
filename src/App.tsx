import React from 'react';
import { Layers3, Volume2, Grid3X3, PanelsTopLeft, DraftingCompass, FileCheck2, ArrowRight, CheckCircle2 } from 'lucide-react';

const systems = [
  ['Linear Wood Ceilings','Warm architectural rhythm for lobbies, workplaces, hospitality and civic interiors.',PanelsTopLeft],
  ['Linear Metal Ceilings','Durable, precise ceiling systems for transit, commercial and institutional spaces.',Layers3],
  ['Acoustic Baffles','High-performance vertical absorption for exposed-structure and open-plenum interiors.',Volume2],
  ['Open Cell Ceilings','Modular visual screening that preserves access to building services above.',Grid3X3],
  ['Acoustic Clouds','Suspended absorptive elements for targeted reverberation control and expressive design.',DraftingCompass],
  ['Suspended T-Bar','The commercial ceiling workhorse: grid, panels, integration, seismic and specification.',FileCheck2],
];

export default function App(){
 return <div className="site">
  <header><a className="brand" href="#">ACUSTIQ<span>.</span></a><nav><a href="#systems">Ceiling Systems</a><a href="#specify">Specify</a><a href="#about">About</a></nav><button>Technical Library</button></header>
  <main>
   <section className="hero"><div className="eyebrow">ARCHITECTURAL CEILING INTELLIGENCE · CANADA</div><h1>Ceilings that shape<br/><em>how spaces feel.</em></h1><p>ACUSTIQ is a Canadian resource for architectural ceilings, suspended systems and acoustic design — built for architects, designers, specifiers and contractors.</p><div className="actions"><a href="#systems">Explore ceiling systems <ArrowRight size={18}/></a><a className="secondary" href="#specify">Specification resources</a></div><div className="note">Manufacturer product data and project photography will be published only from verified source material.</div></section>
   <section className="visual"><div className="slats">{Array.from({length:12}).map((_,i)=><i key={i}/>)}</div><div className="caption">CONCEPT STUDY / LINEAR ARCHITECTURAL CEILING</div></section>
   <section id="systems" className="systems"><div className="sectionhead"><div><span>01 / SYSTEMS</span><h2>Architectural ceiling systems</h2></div><p>Start with system-level knowledge now. Verified manufacturer products, finishes and technical data slot into this framework as source material arrives.</p></div><div className="grid">{systems.map(([title,desc,Icon]:any,i)=><article key={title}><div className="num">0{i+1}</div><Icon size={30}/><h3>{title}</h3><p>{desc}</p><a href="#specify">Explore system <ArrowRight size={15}/></a></article>)}</div></section>
   <section id="specify" className="spec"><div><span>02 / SPECIFICATION</span><h2>Built to become a working specification resource.</h2><p>ACUSTIQ will connect system education with verified product performance, details, documents and Canadian project requirements.</p></div><ul><li><CheckCircle2/> Acoustic performance — NRC, CAC and absorption data</li><li><CheckCircle2/> Fire, seismic and applicable Canadian standards</li><li><CheckCircle2/> CAD, BIM, installation and specification documents</li><li><CheckCircle2/> Materials, dimensions, finishes and suspension systems</li></ul></section>
   <section id="about" className="manifesto"><span>ACUSTIQ / DIRECTION</span><h2>Learn. Specify. Compare. Source.</h2><p>Not another contractor brochure. ACUSTIQ is being built as an independent vertical knowledge platform for the ceiling industry — with real manufacturer data and real project photography at its core.</p></section>
  </main><footer><b>ACUSTIQ.</b><span>Architectural Ceiling Systems & Acoustic Design</span><span>Canada</span></footer>
 </div>
}
