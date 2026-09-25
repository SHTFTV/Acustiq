import { ArrowRight, CheckCircle2 } from "lucide-react";

type Insight = {
  slug: string;
  title: string;
  eyebrow: string;
  lede: string;
  image: string;
  alt: string;
  sections: { title: string; body: string }[];
  checklist: string[];
};

const insights: Insight[] = [
  {
    slug: "acoustic-ceiling-retrofit-occupied-offices",
    title: "Acoustic Ceiling Retrofits in Occupied Offices",
    eyebrow: "WORKPLACE ACOUSTICS / RETROFIT PLANNING",
    lede: "An occupied-office ceiling retrofit succeeds when acoustic improvement, access, dust control, shutdowns and daily operations are planned as one job. This guide outlines the decisions to make before products or installation dates are selected.",
    image: "/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg",
    alt: "Suspended acoustic ceiling clouds in a completed office",
    sections: [
      { title: "Start with the room problem", body: "Identify where speech distraction, reverberation or poor meeting-room clarity occurs and when the room is occupied. Ceiling treatments reduce reflected sound inside a space; they do not replace a complete sound-isolation design between rooms." },
      { title: "Survey the existing ceiling and plenum", body: "Record ceiling type, height, structure, suspension, lights, diffusers, sprinklers, speakers, access panels and available attachment zones. Existing services often determine whether panels, clouds, baffles or a renewed T-bar field are practical." },
      { title: "Build the work around occupants", body: "Divide the retrofit into controlled zones. Confirm furniture moves, protection, noisy-work windows, cleanup, access and return-to-service conditions for each phase. A clear sequence matters as much as the selected ceiling." },
      { title: "Close with a usable record", body: "Photograph concealed conditions and record the installed product, finish, mounting and replacement path. The handover should help facilities staff access services and maintain the ceiling without losing the acoustic intent." },
    ],
    checklist: ["Room use and acoustic concern", "Existing ceiling and structure", "Service and access conflicts", "Occupied-work restrictions", "Protection and cleanup plan", "Product and maintenance record"],
  },
  {
    slug: "wood-slat-ceilings-vs-acoustic-baffles",
    title: "Wood Slat Ceilings vs. Acoustic Baffles",
    eyebrow: "SYSTEM COMPARISON / DESIGN DECISIONS",
    lede: "Wood slats and acoustic baffles can both create a strong linear ceiling, but they solve different visual, acoustic and coordination problems. Compare the complete assemblies before choosing from appearance alone.",
    image: "/projects/rwc-featured/southpoint-wood-slat-acoustic-ceiling.jpg",
    alt: "Installed linear wood slat ceiling with integrated lighting",
    sections: [
      { title: "Decide how the room should feel", body: "Wood slats create warmth and a continuous architectural rhythm. Vertical baffles create depth, colour and a more open view into the plenum. Direction, spacing and perimeter conditions can change the apparent length and scale of either system." },
      { title: "Compare complete acoustic assemblies", body: "A wood ceiling may use open joints and absorptive backing. Baffles expose multiple absorptive faces. Published performance must stay tied to the tested product, spacing, mounting and backing rather than to a generic material label." },
      { title: "Coordinate services before layout", body: "Lighting, diffusers, sprinklers, speakers and access requirements share the ceiling zone. Slat carriers and baffle suspension points need a coordinated origin so penetrations and end conditions look intentional." },
      { title: "Plan for access and lifecycle", body: "Confirm how individual elements are removed, cleaned, replaced and colour-matched. Wood finish variation, baffle edge durability and access frequency can be more important over time than the first rendering." },
    ],
    checklist: ["Visual character and direction", "Tested acoustic assembly", "Plenum visibility", "Lighting and service integration", "Access and replacement", "Finish, cleaning and durability"],
  },
];

function Header() {
  return <header className="insight-top"><a href="/" className="insight-brand">ACUSTIQ<span>.</span></a><nav><a href="/systems">Systems</a><a href="/insights">Insights</a><a href="/gallery">Gallery</a><a href="/technical-library">Technical Library</a></nav></header>;
}

export function InsightsIndexPage() {
  return <div className="insight-shell"><Header/><main><section className="insight-index-hero"><span>FIELD NOTES + DESIGN GUIDES</span><h1>Better ceiling decisions before installation.</h1><p>Practical articles connecting acoustic intent, architectural systems, technical coordination and real installation planning.</p></section><section className="insight-cards">{insights.map((item)=><a href={`/insights/${item.slug}`} key={item.slug}><img src={item.image} alt={item.alt}/><div><span>{item.eyebrow}</span><h2>{item.title}</h2><p>{item.lede}</p><b>Read the guide <ArrowRight/></b></div></a>)}</section></main></div>;
}

export function InsightPage({ slug }: { slug: string }) {
  const item = insights.find((entry)=>entry.slug === slug);
  if (!item) return null;
  return <div className="insight-shell"><Header/><main><article><section className="insight-hero"><div><span>{item.eyebrow}</span><h1>{item.title}</h1><p>{item.lede}</p></div><img src={item.image} alt={item.alt}/></section><section className="insight-body"><div>{item.sections.map((section, index)=><section key={section.title}><b>{String(index + 1).padStart(2,"0")}</b><h2>{section.title}</h2><p>{section.body}</p></section>)}</div><aside><span>PLANNING CHECKLIST</span><h2>Confirm before pricing.</h2>{item.checklist.map((point)=><p key={point}><CheckCircle2/>{point}</p>)}</aside></section><section className="insight-next"><div><span>KEEP RESEARCHING</span><h2>Compare the systems behind the decision.</h2></div><a href="/systems">Explore ceiling systems <ArrowRight/></a></section></article></main></div>;
}

export const insightSlugs = insights.map((item)=>item.slug);
