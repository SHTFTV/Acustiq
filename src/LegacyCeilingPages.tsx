import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Hammer,
  Layers3,
  PanelsTopLeft,
} from "lucide-react";

type LegacyPhoto = { src: string; alt: string; caption: string; href?: string };
type LegacyGuide = {
  slug: string;
  title: string;
  eyebrow: string;
  lede: string;
  hero: LegacyPhoto;
  photos: LegacyPhoto[];
  sections: { title: string; body: string }[];
  checklist: string[];
  faq: [string, string][];
  steelstud: { label: string; href: string }[];
};

export const legacyGuideSlugs = [
  "acoustic-ceilings",
  "ceiling-framing",
  "drywall-ceilings",
];

const guides: LegacyGuide[] = [
  {
    slug: "acoustic-ceilings",
    title: "Acoustic Ceilings",
    eyebrow: "LEGACY CEILING KNOWLEDGE / ACOUSTIC SYSTEMS",
    lede: "Acoustic ceilings are complete assemblies, not decorative panels added at the end. The panel or baffle, suspension, airspace, perimeter, services and room surfaces all affect the result. This restored trade guide connects the original SteelStud.ca ceiling work with current ACUSTIQ system pages and real Rambo Walls & Ceilings installations.",
    hero: {
      src: "/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg",
      alt: "Suspended acoustic cloud ceiling installed by Rambo Walls and Ceilings",
      caption: "Rambo Walls & Ceilings · Microsoft acoustic clouds",
    },
    photos: [
      {
        src: "/projects/rwc-featured/ilm-disney-acoustic-baffles.jpg",
        alt: "Coloured acoustic ceiling baffles over an open office",
        caption: "Suspended acoustic baffles",
        href: "/systems/acoustic-baffles",
      },
      {
        src: "/projects/rwc-archive/20211005_130715.jpg",
        alt: "Completed commercial T-bar acoustic ceiling",
        caption: "T-bar grid and acoustic panels",
        href: "/systems/suspended-tbar",
      },
      {
        src: "/projects/837-beatty-tectum-wall-finished.jpg",
        alt: "Finished Tectum acoustic wall panels at 837 Beatty Street",
        caption: "Direct-applied acoustic panels",
        href: "/systems/acoustic-panels",
      },
      {
        src: "/projects/rwc-featured/southpoint-wood-slat-acoustic-ceiling.jpg",
        alt: "Linear wood slat acoustic ceiling",
        caption: "Linear wood ceiling with acoustic backing",
        href: "/systems/linear-wood",
      },
    ],
    sections: [
      {
        title: "Choose the acoustic approach from the room problem",
        body: "T-bar panels create an accessible finished plane. Clouds and baffles add exposed absorptive surface below an open structure. Direct-applied panels treat selected wall or ceiling areas. Linear wood and perforated metal can combine architectural finish with acoustic backing. The right family depends on reverberation, ceiling height, access, impact, maintenance and visual intent.",
      },
      {
        title: "Keep ratings tied to the tested assembly",
        body: "NRC describes sound absorption under a stated mounting condition. CAC addresses sound passing through a ceiling plenum between rooms. STC applies to complete separating assemblies. A product number should never be separated from the construction and mounting used to produce it.",
      },
      {
        title: "Coordinate every ceiling penetration",
        body: "Lights, diffusers, sprinklers, speakers, signs and access panels share the same plane. Their positions affect module balance, suspension and acoustic coverage. Resolve them before the ceiling grid, carrier or hanging points are fixed.",
      },
      {
        title: "Use real installation references",
        body: "The galleries show actual baffles, clouds, T-bar ceilings, wood systems and acoustic wall panels. Unknown products and addresses remain unnamed until confirmed; the photographs are evidence, not a reason to invent project details.",
      },
    ],
    checklist: [
      "Room volume and reverberation goal",
      "System type and tested mounting",
      "Ceiling height and plenum access",
      "Lighting, HVAC and sprinkler coordination",
      "Panel durability, cleaning and replacement",
      "Perimeters, transitions and suspension",
    ],
    faq: [
      [
        "Which acoustic ceiling works best in an office?",
        "T-bar is practical where access is important. Clouds, baffles, felt panels and wood systems can suit open offices and feature areas. The choice depends on the room, services, acoustic target and architectural intent.",
      ],
      [
        "Do acoustic panels soundproof a room?",
        "No. Absorptive finishes reduce reflected sound inside a room. Sound isolation between rooms depends on complete wall, floor and ceiling assemblies and the control of flanking paths.",
      ],
      [
        "Can acoustic ceilings include integrated lighting?",
        "Yes. Lighting can sit within a grid module, between baffles, through cloud assemblies or within custom framing when the layout, loading and access are coordinated.",
      ],
    ],
    steelstud: [
      {
        label: "SteelStud.ca T-bar ceilings",
        href: "https://www.steelstud.ca/t-bar",
      },
      {
        label: "T-bar vs. drywall ceiling",
        href: "https://www.steelstud.ca/guides/tbar-vs-drywall-ceiling",
      },
      {
        label: "Rambo 59-photo ceiling gallery",
        href: "/contractors/rambo-walls-ceilings",
      },
    ],
  },
  {
    slug: "ceiling-framing",
    title: "Ceiling Framing",
    eyebrow: "LEGACY CEILING KNOWLEDGE / STEEL FRAMING",
    lede: "Ceiling drops, bulkheads, islands, coves and drywall clouds begin with accurate framing. The finished shape depends on reference lines, attachment, member selection, bracing, service space and the sequence between framing, electrical, mechanical and drywall work.",
    hero: {
      src: "/projects/steelstud-archive/circular-ceiling-framing.jpg",
      alt: "Steel framing and drywall installation for a suspended ceiling cloud",
      caption: "SteelStud.ca legacy work · suspended cloud framing",
    },
    photos: [
      {
        src: "/projects/steelstud-archive/ceiling-framing-lighting.jpg",
        alt: "Steel ceiling framing around a lighting feature",
        caption: "Framing prepared for an architectural lighting ceiling",
      },
      {
        src: "/projects/steelstud-archive/ceiling-framing-lighting.jpg",
        alt: "Suspended specialty ceiling framing in progress",
        caption: "Suspended framing and board installation",
        href: "/systems/specialty",
      },
      {
        src: "/projects/steelstud-archive/formation-ceiling.jpg",
        alt: "Circular recessed ceiling feature",
        caption: "Finished recessed circular ceiling forms",
        href: "/systems/specialty",
      },
      {
        src: "/projects/cloud-ceiling-finished.webp",
        alt: "Finished suspended drywall ceiling cloud",
        caption: "Finished cloud ceiling with integrated lighting",
        href: "/systems/acoustic-clouds",
      },
    ],
    sections: [
      {
        title: "Set the finished geometry before framing starts",
        body: "Drops and feature ceilings should be laid out from finished reference lines. Heights, widths, radii, edges and transitions need control dimensions. Small framing errors become obvious after board, joint treatment and lighting expose the surface.",
      },
      {
        title: "Treat the ceiling as a shared service zone",
        body: "Framing cannot block ducts, sprinkler routes, lighting drivers, access panels or required clearances. Openings and backing should be established while the assembly remains visible. Late cutting weakens the work and wastes finish time.",
      },
      {
        title: "Select the member and attachment for the assembly",
        body: "Interior non-load-bearing ceiling framing is different from structural or exterior framing. Member depth, thickness, spacing, spans, hangers, connections and bracing follow the project design and selected system—not a generic rule taken from another ceiling.",
      },
      {
        title: "Close only after coordination and required review",
        body: "Before drywall hides the framing, confirm geometry, backing, services, penetrations and required inspections. Photographs create a useful record of concealed conditions for later fixtures, access and repairs.",
      },
    ],
    checklist: [
      "Finished elevations and control lines",
      "Structure and approved attachment points",
      "Member size, spacing and bracing",
      "Lighting, duct and sprinkler clearances",
      "Backing and access-panel locations",
      "Inspection and photo record before closure",
    ],
    faq: [
      [
        "Can steel studs form curved or floating ceiling features?",
        "Yes. Light-gauge framing is commonly used for drops, clouds, coves and shaped features when the geometry, suspension and connections are designed for the project.",
      ],
      [
        "Should ceiling framing be coordinated before lighting?",
        "They should be coordinated together. Fixture dimensions, drivers, clearances, access and finished alignment affect the framing layout.",
      ],
      [
        "Is non-combustible steel framing automatically fire-rated?",
        "No. Fire resistance belongs to a complete tested or designed assembly, including framing, board, fasteners, joints, penetrations and perimeter conditions.",
      ],
    ],
    steelstud: [
      {
        label: "SteelStud.ca dropped ceilings",
        href: "https://www.steelstud.ca/drop-ceilings",
      },
      {
        label: "Steel stud framing",
        href: "https://www.steelstud.ca/framing-in-steel",
      },
      { label: "Specialty ceiling systems", href: "/systems/specialty" },
    ],
  },
  {
    slug: "drywall-ceilings",
    title: "Drywall Ceilings, Repairs & Smoothing",
    eyebrow: "LEGACY CEILING KNOWLEDGE / DRYWALL FINISHING",
    lede: "Drywall ceilings include new board, custom shapes, repairs, texture matching, skim coating and the conversion of old textured or popcorn ceilings to a smooth finish. The correct method starts with the existing surface, the cause of damage and the finish expected under the room’s lighting.",
    hero: {
      src: "/projects/steelstud-archive/ceiling-skimming-smoothing.jpg",
      alt: "SteelStud.ca worker skim coating a ceiling smooth",
      caption:
        "SteelStud.ca legacy photograph · ceiling skimming and smoothing",
    },
    photos: [
      {
        src: "/projects/steelstud-archive/ceiling-skimming-smoothing.jpg",
        alt: "Skim coating an existing ceiling",
        caption: "Ceiling skim coat applied by hand",
      },
      {
        src: "/projects/steelstud-archive/circular-ceiling-framing.jpg",
        alt: "Drywall board installed over framed ceiling cloud",
        caption: "Drywall enclosing a framed ceiling feature",
        href: "/legacy/ceiling-framing",
      },
      {
        src: "/projects/cloud-ceiling-finished.webp",
        alt: "Smooth finished drywall cloud ceiling",
        caption: "Finished smooth ceiling cloud",
      },
      {
        src: "/projects/steelstud-archive/commercial-ceiling.jpg",
        alt: "Curved specialty ceiling canopy",
        caption: "Finished specialty ceiling reference",
        href: "/systems/specialty",
      },
    ],
    sections: [
      {
        title: "Find the cause before repairing the surface",
        body: "A crack, stain or sag can indicate movement, moisture, a failed fastener or an access cut. Confirm that leaks and concealed damage are resolved before new board, joint treatment or paint covers the evidence.",
      },
      {
        title: "Decide whether to repair, skim or replace",
        body: "A stable, well-adhered ceiling can often be prepared and skimmed. Loose texture, extensive damage, poor adhesion, major unevenness or required service work can make selective removal or new board more predictable. A test area helps expose coating and bond problems.",
      },
      {
        title: "Match the finish to the lighting",
        body: "Windows and low-angle fixtures reveal joint buildup, sanding marks and surface variation. Level 4 may suit ordinary painted conditions; critical light or demanding finishes may justify Level 5 treatment. Expectations, primer, paint sheen and lighting should be discussed together.",
      },
      {
        title: "Texture work requires controlled blending",
        body: "Popcorn, knockdown, orange peel and hand-applied textures use different materials and techniques. A repair should reproduce scale, density and edge transition before repainting the affected ceiling area.",
      },
    ],
    checklist: [
      "Leak or movement corrected first",
      "Existing coating and adhesion tested",
      "Repair, skim or replacement decision",
      "Lighting and finish-level expectation",
      "Dust containment and occupied-space protection",
      "Primer, paint and texture transition",
    ],
    faq: [
      [
        "Can every popcorn ceiling be made smooth?",
        "No. Existing material, coatings, adhesion, damage and ceiling flatness need assessment. Some ceilings can be prepared and skimmed; others are more predictable with selective removal or new board.",
      ],
      [
        "Will a drywall ceiling repair disappear completely?",
        "A correctly supported patch, wide joint treatment, matched texture and repainting can blend well, but strong side-lighting and aged paint can still reveal small differences.",
      ],
      [
        "What is a Level 5 drywall finish?",
        "It adds a skim treatment over the board surface to reduce visible differences between board paper and joint areas under demanding lighting or finishes. It is part of a complete finishing specification, not a guarantee against every lighting effect.",
      ],
    ],
    steelstud: [
      {
        label: "SteelStud.ca ceiling smoothing",
        href: "https://www.steelstud.ca/smoothing-ceilings",
      },
      {
        label: "Drywall installation and finishing",
        href: "https://www.steelstud.ca/drywall",
      },
      {
        label: "Ceiling smoothing or replacement guide",
        href: "https://www.steelstud.ca/guides/ceiling-smoothing-or-replacement",
      },
    ],
  },
];

function Nav() {
  return (
    <header className="legacy-top">
      <a href="/" className="legacy-brand">
        ACUSTIQ<span>.</span>
      </a>
      <nav>
        <a href="/systems">Ceiling Systems</a>
        <a href="/legacy">Legacy Guides</a>
        <a href="/gallery">Gallery</a>
        <a href="/contractors/rambo-walls-ceilings">Rambo Projects</a>
      </nav>
    </header>
  );
}

function Schema({ guide }: { guide: LegacyGuide }) {
  const url = `https://www.acustiq.ca/legacy/${guide.slug}`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.lede,
        url,
        isPartOf: {
          "@type": "WebSite",
          name: "ACUSTIQ",
          url: "https://www.acustiq.ca/",
        },
        isBasedOn:
          "https://web.archive.org/web/20191017031641/https://steelstud.ca/",
        image: [guide.hero, ...guide.photos].map(
          (photo) => `https://www.acustiq.ca${photo.src}`,
        ),
        about: [
          "ceilings",
          guide.title,
          "steel stud framing",
          "drywall",
          "acoustic ceilings",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ACUSTIQ",
            item: "https://www.acustiq.ca/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Legacy Ceiling Guides",
            item: "https://www.acustiq.ca/legacy",
          },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LegacyGuidePage({ slug }: { slug: string }) {
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) return null;
  return (
    <div className="legacy-shell">
      <Schema guide={guide} />
      <Nav />
      <main>
        <section className="legacy-hero">
          <div>
            <span>{guide.eyebrow}</span>
            <h1>{guide.title}</h1>
            <p>{guide.lede}</p>
            <div className="legacy-actions">
              <a href="#guide">
                Read the guide <ArrowRight />
              </a>
              <a href="/contractors/rambo-walls-ceilings">
                See all 59 project photos
              </a>
            </div>
          </div>
          <figure>
            <img src={guide.hero.src} alt={guide.hero.alt} />
            <figcaption>{guide.hero.caption}</figcaption>
          </figure>
        </section>
        <section className="legacy-sections" id="guide">
          <div className="legacy-section-heading">
            <span>RESTORED TRADE GUIDE</span>
            <h2>What matters on the ceiling.</h2>
          </div>
          <div>
            {guide.sections.map((section, index) => (
              <article key={section.title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="legacy-check">
          <div>
            <CheckCircle2 />
            <span>FIELD CHECKLIST</span>
            <h2>Confirm before installation.</h2>
          </div>
          <ul>
            {guide.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="legacy-gallery">
          <div className="legacy-section-heading">
            <span>REAL WORK / RELEVANT SYSTEMS</span>
            <h2>Project photographs.</h2>
          </div>
          <div>
            {guide.photos.map((photo) =>
              photo.href ? (
                <a href={photo.href} key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <span>{photo.caption}</span>
                </a>
              ) : (
                <figure key={photo.src}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ),
            )}
          </div>
          <a
            className="legacy-gallery-all"
            href="/contractors/rambo-walls-ceilings"
          >
            Open the complete 59-photo Rambo gallery <ArrowRight />
          </a>
        </section>
        <section className="legacy-links">
          <div>
            <ExternalLink />
            <span>CONNECTED LEGACY PAGES</span>
            <h2>Continue into the original trade library.</h2>
          </div>
          <div>
            {guide.steelstud.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
                <ArrowRight />
              </a>
            ))}
          </div>
        </section>
        <section className="legacy-faq">
          <div>
            <span>FIELD QUESTIONS</span>
            <h2>{guide.title} FAQ.</h2>
          </div>
          <div>
            {guide.faq.map(([q, a], index) => (
              <details open={index === 0} key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <b>ACUSTIQ.</b>
        <span>Legacy ceiling knowledge · real work · current system links</span>
        <a href="/legacy">All legacy ceiling guides</a>
      </footer>
    </div>
  );
}

export function LegacyIndexPage() {
  const icons = [PanelsTopLeft, Hammer, Layers3];
  return (
    <div className="legacy-shell">
      <Nav />
      <main>
        <section className="legacy-index-hero">
          <span>STEELSTUD.CA LEGACY / RESTORED FOR ACUSTIQ</span>
          <h1>Ceilings, framing and drywall.</h1>
          <p>
            The original trade knowledge belongs beside the real work. These are
            substantial ceiling guides—not short service blurbs.
          </p>
        </section>
        <section className="legacy-index-grid">
          {guides.map((guide, index) => {
            const Icon = icons[index];
            return (
              <a href={`/legacy/${guide.slug}`} key={guide.slug}>
                <img src={guide.hero.src} alt={guide.hero.alt} />
                <div>
                  <Icon />
                  <span>0{index + 1}</span>
                  <h2>{guide.title}</h2>
                  <p>{guide.lede}</p>
                  <b>
                    Open complete legacy guide <ArrowRight />
                  </b>
                </div>
              </a>
            );
          })}
        </section>
        <section className="legacy-index-gallery">
          <div>
            <span>ALL REAL WORK</span>
            <h2>Rambo Walls & Ceilings gallery.</h2>
            <p>
              Fifty-nine project photographs covering acoustic panels, baffles,
              clouds, T-bar, linear systems, framing, drywall and specialty
              ceilings.
            </p>
          </div>
          <a href="/contractors/rambo-walls-ceilings">
            Open the gallery <ArrowRight />
          </a>
        </section>
      </main>
      <footer>
        <b>ACUSTIQ.</b>
        <span>Legacy ceiling knowledge · real work · current system links</span>
        <a href="/gallery">Project gallery</a>
      </footer>
    </div>
  );
}
