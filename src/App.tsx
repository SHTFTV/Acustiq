import React from "react";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Grid3X3,
  Layers3,
  PanelsTopLeft,
  Ruler,
  ShieldCheck,
  Volume2,
  DraftingCompass,
  Building2,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import TechnicalLibraryPage from "./TechnicalLibraryPage";
import ProductKnowledgePage from "./ProductKnowledgePage";
import { RegionalInstallerPage } from "./RegionalPages";
import { SystemAuthorityPage } from "./SystemAuthority";
import { CityAuthorityPage } from "./CityAuthority";

const systems = [
  {
    slug: "linear-wood",
    title: "Linear Wood Ceilings",
    short:
      "Warm architectural rhythm with acoustic and service-integration options.",
    Icon: PanelsTopLeft,
  },
  {
    slug: "linear-metal",
    title: "Linear Metal Ceilings",
    short:
      "Durable, precise systems for commercial and institutional interiors.",
    Icon: Layers3,
  },
  {
    slug: "acoustic-baffles",
    title: "Acoustic Baffles",
    short:
      "Vertical absorptive elements for open-plenum spaces and expressive acoustics.",
    Icon: Volume2,
  },
  {
    slug: "open-cell",
    title: "Open Cell Ceilings",
    short: "Modular visual screening with continued access to the plenum.",
    Icon: Grid3X3,
  },
  {
    slug: "acoustic-clouds",
    title: "Cloud Ceilings & Acoustic Clouds",
    short:
      "Dropped ceiling islands and suspended absorptive elements below the main ceiling plane.",
    Icon: DraftingCompass,
  },
  {
    slug: "suspended-tbar",
    title: "Suspended T-Bar Ceilings",
    short: "Commercial grid, panels, access and coordinated ceiling services.",
    Icon: Grid3X3,
  },
  {
    slug: "specialty",
    title: "Specialty & Custom Ceilings",
    short:
      "Custom forms, islands, canopies and integrated architectural assemblies.",
    Icon: Layers3,
  },
  {
    slug: "acoustic-panels",
    title: "Acoustic Wall & Ceiling Panels",
    short:
      "Direct-applied and suspended absorptive panels for walls and ceilings.",
    Icon: Volume2,
  },
];
const homeSystems = [
  {
    href: "/systems/suspended-tbar",
    title: "Suspended T-Bar Ceilings",
    image: "/projects/rwc-archive/20211005_130715.jpg",
    alt: "Completed Rambo Walls and Ceilings suspended T-bar ceiling",
    source: "Rambo Walls & Ceilings",
    description:
      "Commercial grid and acoustic panels with practical plenum access. The full guide covers modules, borders, tegular edges, lighting, diffusers, suspension and installation planning.",
  },
  {
    href: "/systems/acoustic-clouds",
    title: "Cloud Ceilings & Acoustic Clouds",
    image: "/projects/cloud-ceiling-finished.webp",
    alt: "Finished dropped drywall cloud ceiling from the SteelStud.ca archive",
    source: "SteelStud.ca legacy project",
    description:
      "A true cloud is dropped below the main ceiling plane. See finished and framing-stage SteelStud.ca clouds plus acoustic cloud installations, lighting and service coordination.",
  },
  {
    href: "/systems/acoustic-baffles",
    title: "Acoustic Baffles",
    image: "/projects/rwc-featured/ilm-disney-acoustic-baffles.jpg",
    alt: "Coloured acoustic baffles installed by Rambo Walls and Ceilings",
    source: "Rambo Walls & Ceilings · ILM / Disney",
    description:
      "Vertical sound-absorbing elements for open-plenum rooms. The guide explains material, depth, spacing, direction, colour and field coordination.",
  },
  {
    href: "/systems/linear-wood",
    title: "Linear Wood Ceilings",
    image: "/projects/rwc-featured/southpoint-wood-slat-acoustic-ceiling.jpg",
    alt: "Wood slat acoustic ceiling installed by Rambo Walls and Ceilings",
    source: "Rambo Walls & Ceilings",
    description:
      "Wood slats and planks create warmth and direction while coordinating acoustic backing, carriers, lighting, mechanical services and access.",
  },
  {
    href: "/systems/linear-metal",
    title: "Linear Metal Ceilings",
    image: "/projects/rwc-archive/20190805_154522.jpg",
    alt: "Perforated metal ceiling panels with integrated linear lighting",
    source: "Rambo Walls & Ceilings",
    description:
      "Metal panels, planks and blades create durable, precise ceiling lines. Compare perforation, acoustic backing, finish, access and carrier layouts.",
  },
  {
    href: "/systems/specialty",
    title: "Specialty & Custom Ceilings",
    image: "/projects/steelstud-archive/commercial-ceiling.jpg",
    alt: "Curved blue specialty ceiling canopy from the SteelStud.ca archive",
    source: "SteelStud.ca legacy archive",
    description:
      "Custom clouds, curves, islands and canopies where framing, suspension, lighting, services and finished geometry must work as one assembly.",
  },
  {
    href: "/systems/open-cell",
    title: "Open Cell Ceilings",
    image: "/projects/rwc-archive/20220803_121946.jpg",
    alt: "Open-joint linear ceiling installation showing visible plenum coordination",
    source: "Rambo Walls & Ceilings · related field reference",
    description:
      "Open-cell systems screen the plenum without sealing it. Learn how cell size, depth, colour, viewing angle, lighting and access change the result.",
  },
  {
    href: "/systems/acoustic-panels",
    title: "Acoustic Wall & Ceiling Panels",
    image: "/projects/837-beatty-tectum-wall-finished.jpg",
    alt: "Finished acoustic wall panels installed by Rambo Walls and Ceilings at 837 Beatty Street",
    source: "Rambo Walls & Ceilings · 837 Beatty",
    description:
      "Absorptive panels for walls and ceilings. The guide covers material, edge profiles, joint layout, mounting conditions, durability and verified acoustic performance.",
  },
];
const resources = [
  [
    "NRC, CAC & STC Explained",
    "Understand what each acoustic rating measures and when it matters.",
    Volume2,
  ],
  [
    "Suspended Ceiling Components",
    "Main tees, cross tees, wall angle, hanger wire, clips and panels.",
    Layers3,
  ],
  [
    "Seismic Ceiling Fundamentals",
    "A practical overview of bracing, perimeter conditions and coordination.",
    ShieldCheck,
  ],
  [
    "Ceiling Takeoff & Estimating",
    "How to think about grid, panels, perimeter, waste and accessories.",
    Ruler,
  ],
  [
    "Lighting / HVAC / Sprinklers",
    "Coordinate the ceiling plane with the services that penetrate it.",
    Building2,
  ],
  [
    "NMS / Specification Framework",
    "Map system information into Canadian master-specification language.",
    FileText,
  ],
];
const cities = [
  ["vancouver", "Vancouver"],
  ["burnaby", "Burnaby"],
  ["surrey", "Surrey"],
  ["richmond", "Richmond"],
  ["coquitlam", "Coquitlam"],
  ["port-coquitlam", "Port Coquitlam"],
  ["port-moody", "Port Moody"],
  ["new-westminster", "New Westminster"],
  ["north-vancouver", "North Vancouver"],
  ["west-vancouver", "West Vancouver"],
  ["delta", "Delta"],
  ["langley", "Langley"],
  ["maple-ridge", "Maple Ridge"],
  ["pitt-meadows", "Pitt Meadows"],
  ["white-rock", "White Rock"],
  ["abbotsford", "Abbotsford"],
];
function currentPath() {
  return typeof window === "undefined"
    ? "/"
    : window.location.pathname.replace(/\/+$/, "") || "/";
}
function go(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
type AProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
};
function A({ to, children, className = "" }: AProps) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        if (!to.startsWith("/#")) {
          e.preventDefault();
          go(to);
        }
      }}
    >
      {children}
    </a>
  );
}
function Header() {
  return (
    <header className="topbar">
      <A to="/" className="brand">
        ACUSTIQ<span>.</span>
      </A>
      <nav>
        <A to="/systems">Systems</A>
        <A to="/legacy">Legacy Guides</A>
        <A to="/visualizer">Visualizer</A>
        <A to="/technical-library">Technical Library</A>
        <div className="contractor-menu">
          <button type="button" aria-haspopup="true">
            Contractors
          </button>
          <div className="contractor-menu-panel">
            <span>LOWER MAINLAND INSTALLERS</span>
            <A to="/contractors/rambo-walls-ceilings">
              <b>Vancouver</b>
              <small>Rambo Walls &amp; Ceilings</small>
            </A>
          </div>
        </div>
        <A to="/gallery">Gallery</A>
      </nav>
      <A to="/contractors/rambo-walls-ceilings" className="top-cta">
        Contact Rambo
      </A>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <b>ACUSTIQ.</b>
      <span>Architectural Ceiling Systems & Acoustic Design</span>
      <span>
        Canada · Ceiling knowledge, visualization and installation resources
      </span>
      <div className="brandbar">
        <span>
          A Division of Builders Haus · Powered by Industry Army Marketing
        </span>
        <a href="mailto:build@buildershaus.com">Guest post with us</a>
      </div>
    </footer>
  );
}
function Home() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow">ARCHITECTURAL CEILING SYSTEMS · CANADA</div>
        <h1>
          Specify ceilings
          <br />
          <em>with confidence.</em>
        </h1>
        <p>
          Eight substantial ceiling guides connect real installations and
          recovered trade photography with practical design, acoustic,
          coordination and installation knowledge.
        </p>
        <div className="actions">
          <A to="/systems" className="primary">
            Compare ceiling systems <ArrowRight size={18} />
          </A>
          <A to="/contractors/rambo-walls-ceilings" className="secondary">
            View all Rambo projects
          </A>
        </div>
      </section>
      <div className="concept real-hero-image">
        <img
          src="/projects/rwc-featured/suspended-wood-slat-ceiling.jpg"
          alt="Suspended wood slat ceiling installed by Rambo Walls and Ceilings"
        />
        <div className="concept-label">
          REAL SUSPENDED WOOD CEILING · RAMBO WALLS &amp; CEILINGS
        </div>
      </div>
      <section className="section white">
        <div className="sectionhead">
          <div>
            <span>01 / COMPLETE SYSTEM GUIDES</span>
            <h2>Every major ceiling type gets a real page.</h2>
          </div>
          <p>
            Each guide combines legacy trade knowledge, real project images,
            applications, system questions, design coordination, installation
            planning, FAQs and related ceiling links.
          </p>
        </div>
        <div className="home-system-grid">
          {homeSystems.map((system, index) => (
            <A to={system.href} className="home-system-card" key={system.title}>
              <div className="home-system-image">
                <img
                  src={system.image}
                  alt={system.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="home-system-copy">
                <small>{system.source}</small>
                <h3>{system.title}</h3>
                <p>{system.description}</p>
                <b>
                  Open complete guide <ArrowRight size={15} />
                </b>
              </div>
            </A>
          ))}
        </div>
        <div className="actions">
          <A to="/systems" className="primary">
            View all eight system guides <ArrowRight size={18} />
          </A>
          <A to="/contractors/rambo-walls-ceilings" className="secondary">
            Open the 59-photo Rambo gallery
          </A>
        </div>
      </section>
      <section className="section legacy-home">
        <div className="sectionhead">
          <div>
            <span>02 / STEELSTUD.CA LEGACY GUIDES</span>
            <h2>Acoustic ceilings, framing and drywall.</h2>
          </div>
          <p>
            The original field knowledge restored as complete ceiling pages
            with real work and direct links into the SteelStud.ca trade library.
          </p>
        </div>
        <div className="legacy-home-grid">
          <A to="/legacy/acoustic-ceilings">
            <img
              src="/projects/rwc-featured/microsoft-acoustic-clouds-wide.jpg"
              alt="Rambo Walls and Ceilings acoustic clouds"
            />
            <div>
              <b>ACOUSTIC CEILINGS</b>
              <h3>Systems, ratings and coordination</h3>
              <span>Open legacy guide <ArrowRight size={15} /></span>
            </div>
          </A>
          <A to="/legacy/ceiling-framing">
            <img
              src="/projects/steelstud-archive/circular-ceiling-framing.jpg"
              alt="Steel framing and drywall for a suspended ceiling cloud"
            />
            <div>
              <b>CEILING FRAMING</b>
              <h3>Drops, clouds, bulkheads and lighting</h3>
              <span>Open legacy guide <ArrowRight size={15} /></span>
            </div>
          </A>
          <A to="/legacy/drywall-ceilings">
            <img
              src="/projects/steelstud-archive/ceiling-skimming-smoothing.jpg"
              alt="SteelStud.ca ceiling skimming and smoothing work"
            />
            <div>
              <b>DRYWALL CEILINGS</b>
              <h3>Repairs, texture and smooth finishes</h3>
              <span>Open legacy guide <ArrowRight size={15} /></span>
            </div>
          </A>
        </div>
      </section>
      <section className="section dark">
        <div className="sectionhead">
          <div>
            <span>03 / DESIGN + SPECIFY</span>
            <h2>From room concept to coordinated ceiling.</h2>
          </div>
          <p>
            Good ceiling decisions combine appearance with dimensions,
            acoustics, access, lighting, HVAC, sprinklers, suspension and
            technical requirements.
          </p>
        </div>
        <div className="four">
          <div>
            <Sparkles />
            <h3>Visualize</h3>
            <p>
              Use the ceiling visualizer early to compare system direction and
              room character.
            </p>
          </div>
          <div>
            <Layers3 />
            <h3>Understand</h3>
            <p>
              Learn how each ceiling family is suspended, coordinated and
              accessed.
            </p>
          </div>
          <div>
            <FileText />
            <h3>Verify</h3>
            <p>
              Move from inspiration to current manufacturer and technical
              documentation.
            </p>
          </div>
          <div>
            <Building2 />
            <h3>Install</h3>
            <p>
              Connect a defined ceiling concept with an experienced regional
              installer.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="sectionhead">
          <div>
            <span>04 / TECHNICAL LIBRARY</span>
            <h2>Technical guidance for better ceiling decisions.</h2>
          </div>
          <p>
            Practical explanations for designers, estimators, contractors and
            owners working through ceiling selection and coordination.
          </p>
        </div>
        <div className="resource-grid">
          {resources.map(([t, d, I]: any) => (
            <A to="/technical-library" className="resource" key={t}>
              <I />
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
              <ChevronRight />
            </A>
          ))}
        </div>
      </section>
    </>
  );
}
function SystemsIndex() {
  return (
    <section className="page">
      <div className="pagehero">
        <span>CEILING SYSTEMS</span>
        <h1>Architectural ceiling systems.</h1>
        <p>
          Eight complete ceiling-system pages, organized so you can move from
          visual intent and real work into acoustics, access, coordination,
          product research and installation.
        </p>
      </div>
      <div className="cards">
        {systems.map((s, i) => (
          <A to={`/systems/${s.slug}`} className="system-card" key={s.slug}>
            <div className="num">{String(i + 1).padStart(2, "0")}</div>
            <s.Icon size={30} />
            <h3>{s.title}</h3>
            <p>{s.short}</p>
            <span>
              Complete system guide <ArrowRight size={15} />
            </span>
          </A>
        ))}
      </div>
      <section className="section dark complete-band">
        <div className="sectionhead">
          <div>
            <span>HOW TO CHOOSE</span>
            <h2>Start with the ceiling condition, not a product name.</h2>
          </div>
          <p>
            Consider visual character, acoustic goal, plenum access, module and
            direction, service integration, fire/code requirements and
            installation constraints. Then narrow the product family.
          </p>
        </div>
        <div className="actions">
          <A to="/visualizer" className="primary">
            Visualize a ceiling concept <ArrowRight size={18} />
          </A>
          <A to="/product-knowledge" className="secondary light-secondary">
            Compare real products
          </A>
        </div>
      </section>
    </section>
  );
}
function Contractors() {
  return (
    <section className="page">
      <div className="pagehero">
        <span>CONTRACTORS / INSTALLATION</span>
        <h1>Need the ceiling installed?</h1>
        <p>
          For field pricing and installation in the Lower Mainland, connect with
          our featured regional installation contractor.
        </p>
      </div>
      <section className="section white">
        <div className="sectionhead">
          <div>
            <span>FEATURED REGIONAL INSTALLER</span>
            <h2>Rambo Walls & Ceilings</h2>
          </div>
          <p>
            Commercial ceilings, suspended T-bar systems, steel stud framing,
            drywall and specialty ceiling construction.
          </p>
        </div>
        <div className="contractor-proof">
          <div>
            <CheckCircle2 />
            <b>Real project photography</b>
            <p>
              Gallery work is identified as Rambo Walls & Ceilings project work.
            </p>
          </div>
          <div>
            <CheckCircle2 />
            <b>Lower Mainland coverage</b>
            <p>
              Regional pathways connect ACUSTIQ system knowledge with local
              installation.
            </p>
          </div>
          <div>
            <CheckCircle2 />
            <b>Ceiling + wall scope</b>
            <p>
              Suspended ceilings, specialty features, framing and drywall
              coordination.
            </p>
          </div>
        </div>
        <A
          to="/projects/837-beatty-tectum-acoustic-panels"
          className="rambo-project"
        >
          <img
            src="/projects/837-beatty-tectum-wall-finished.jpg"
            alt="Rambo Walls and Ceilings beveled Tectum acoustic panel installation at 837 Beatty Street"
          />
          <div>
            <span>FEATURED RAMBO PROJECT / VANCOUVER</span>
            <h3>Beveled Tectum Acoustic Panel Installation</h3>
            <p>
              Seven real field photographs document material preparation,
              layout, beveled joints and the completed Level 2 lobby
              installation at 837 Beatty Street.
            </p>
            <b>
              View project case study <ArrowRight size={16} />
            </b>
          </div>
        </A>
        <div className="actions">
          <A to="/installers/vancouver" className="primary">
            View contractor profile <ArrowRight size={18} />
          </A>
          <a
            className="secondary"
            href="https://rambowalls.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit RamboWalls.com
          </a>
          <A to="/gallery" className="secondary">
            View project gallery
          </A>
        </div>
      </section>
      <section className="section dark">
        <div className="sectionhead">
          <div>
            <span>INSTALLATION AREAS</span>
            <h2>Find ceiling installation by city.</h2>
          </div>
        </div>
        <div className="resource-grid">
          {cities.map(([slug, name]) => (
            <A to={`/installers/${slug}`} className="resource" key={slug}>
              <MapPin />
              <div>
                <h3>{name}</h3>
                <p>
                  Architectural ceiling systems and local installation pathway.
                </p>
              </div>
              <ChevronRight />
            </A>
          ))}
        </div>
      </section>
    </section>
  );
}
function Gallery() {
  const projects = [
    [
      "/projects/linear-wood-feature-ceiling.webp",
      "Linear Wood Feature Ceiling",
      "Architectural feature ceiling installation showing the finished ceiling plane and coordinated surrounding services.",
    ],
    [
      "/projects/cloud-ceiling-finished.webp",
      "Suspended Cloud Ceiling",
      "Completed suspended cloud feature demonstrating how a shaped ceiling element can define a room while coordinating with lighting.",
    ],
    [
      "/projects/steelstud-archive/circular-ceiling-framing.jpg",
      "Cloud Ceiling — Before Final Paint",
      "In-progress steel-stud and drywall cloud construction showing the suspended form before final finishing.",
    ],
    [
      "/projects/steelstud-archive/ceiling-framing-lighting.jpg",
      "Specialty Ceiling Construction",
      "Field-stage specialty ceiling work showing the relationship between framing, board, structure and surrounding conditions.",
    ],
  ];
  return (
    <section className="page gallery-page">
      <div className="pagehero">
        <span>PROJECT GALLERY</span>
        <h1>Rambo Walls & Ceilings projects.</h1>
        <p>
          Real field and completed-project photography from ACUSTIQ's featured
          regional installation contractor. AI concept imagery used elsewhere on
          ACUSTIQ is not presented here as contractor work.
        </p>
        <div className="actions">
          <A to="/contractors/rambo-walls-ceilings" className="primary">
            Open all 59 project photos <ArrowRight size={18} />
          </A>
          <A to="/legacy" className="secondary">
            Legacy ceiling guides
          </A>
        </div>
      </div>
      <div className="gallery-grid">
        <A
          to="/projects/burquitlam-strata-meeting-room-ceiling"
          className="gallery-project gallery-feature project-card-link"
        >
          <div className="gallery-image">
            <img
              src="/projects/burquitlam-strata-renovation/06-perimeter-lighting.jpg"
              alt="Dropped ceiling with four-inch perimeter lighting detail in a Burquitlam strata meeting room"
            />
            <span>STEELSTUD.CA / DOCUMENTED STRATA PROJECT</span>
          </div>
          <div className="gallery-copy">
            <h2>Burquitlam Meeting-Room Ceiling</h2>
            <p>
              A six-photo record of a strata meeting-room renovation with a
              dropped T-bar ceiling and wall-side perimeter lighting detail.
            </p>
            <b className="gallery-link">
              View documented project <ArrowRight size={16} />
            </b>
            <div className="chips">
              <b>REAL PROJECT</b>
              <b>DROPPED CEILING</b>
              <b>BURQUITLAM</b>
            </div>
          </div>
        </A>
        <A
          to="/projects/837-beatty-tectum-acoustic-panels"
          className="gallery-project gallery-feature project-card-link"
        >
          <div className="gallery-image">
            <img
              src="/projects/837-beatty-tectum-wall-finished.jpg"
              alt="Rambo Walls and Ceilings beveled Tectum acoustic panel installation at 837 Beatty Street"
            />
            <span>RAMBO WALLS & CEILINGS / DOCUMENTED PROJECT</span>
          </div>
          <div className="gallery-copy">
            <h2>837 Beatty Beveled Tectum Panels</h2>
            <p>
              A seven-photo field record of the acoustic wall treatment, from
              material preparation through the completed vertical panel field.
            </p>
            <b className="gallery-link">
              View documented project <ArrowRight size={16} />
            </b>
            <div className="chips">
              <b>REAL PROJECT</b>
              <b>TECTUM PANELS</b>
              <b>VANCOUVER</b>
            </div>
          </div>
        </A>
        {projects.map(([src, title, desc], i) => (
          <article className="gallery-project" key={title}>
            <div className="gallery-image">
              <img
                src={src}
                alt={`Rambo Walls and Ceilings ${title} project`}
              />
              <span>
                RAMBO WALLS & CEILINGS / PROJECT{" "}
                {String(i + 2).padStart(2, "0")}
              </span>
            </div>
            <div className="gallery-copy">
              <h2>{title}</h2>
              <p>{desc}</p>
              <div className="chips">
                <b>REAL PROJECT</b>
                <b>CONTRACTOR WORK</b>
                <b>LOWER MAINLAND</b>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="section white gallery-system-links">
        <div className="sectionhead">
          <div>
            <span>CEILING TYPES / REAL PROJECT LINKS</span>
            <h2>Each image leads to the right ceiling page.</h2>
          </div>
          <p>
            Acoustic, T-bar, wood, metal, specialty and panel work linked
            directly to its substantial system guide.
          </p>
        </div>
        <div className="home-system-grid">
          {homeSystems.map((system, index) => (
            <A to={system.href} className="home-system-card" key={system.title}>
              <div className="home-system-image">
                <img src={system.image} alt={system.alt} loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="home-system-copy">
                <small>{system.source}</small>
                <h3>{system.title}</h3>
                <b>
                  Open complete guide <ArrowRight size={15} />
                </b>
              </div>
            </A>
          ))}
        </div>
      </section>
      <section className="section dark gallery-cta">
        <div className="sectionhead">
          <div>
            <span>FROM SYSTEM IDEA TO FIELD WORK</span>
            <h2>Planning a ceiling project?</h2>
          </div>
          <p>
            Use ACUSTIQ to understand and visualize the ceiling system, then
            connect with Rambo Walls & Ceilings for regional installation
            pricing and field coordination.
          </p>
        </div>
        <div className="actions">
          <A to="/contractors/rambo-walls-ceilings" className="primary">
            View Rambo contractor page <ArrowRight size={18} />
          </A>
          <a
            className="secondary light-secondary"
            href="https://rambowalls.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            RamboWalls.com
          </a>
        </div>
      </section>
    </section>
  );
}
function App({ ssrPath }: { ssrPath?: string } = {}) {
  const [path, setPath] = React.useState(ssrPath || currentPath());
  React.useEffect(() => {
    const f = () => setPath(currentPath());
    window.addEventListener("popstate", f);
    return () => window.removeEventListener("popstate", f);
  }, []);
  if (path === "/technical-library") return <TechnicalLibraryPage />;
  if (path === "/product-knowledge" || path === "/products")
    return <ProductKnowledgePage />;
  const city = path.match(/^\/locations\/([^/]+)$/);
  if (city)
    return (
      <div className="site">
        <Header />
        <main>
          <CityAuthorityPage slug={city[1]} />
        </main>
        <Footer />
      </div>
    );
  const installer = path.match(/^\/installers\/([^/]+)$/);
  if (installer)
    return (
      <div className="site">
        <Header />
        <RegionalInstallerPage slug={installer[1]} />
        <Footer />
      </div>
    );
  const system = path.match(/^\/systems\/([^/]+)$/);
  if (system)
    return (
      <div className="site">
        <Header />
        <main>
          <SystemAuthorityPage slug={system[1]} />
        </main>
        <Footer />
      </div>
    );
  let body: React.ReactNode = <Home />;
  if (path === "/systems") body = <SystemsIndex />;
  else if (path === "/contractors") body = <Contractors />;
  else if (path === "/gallery") body = <Gallery />;
  return (
    <div className="site">
      <Header />
      <main>{body}</main>
      <Footer />
    </div>
  );
}
export default App;
