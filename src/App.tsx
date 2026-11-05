import { useEffect, useState } from "react"

type Page = "home" | "launchpad" | "team" | "catalog" | "resources"

const navItems: { id: Page label: string }[] = [
  { id: "home", label: "Home" },
  { id: "launchpad", label: "Launchpad" },
  { id: "team", label: "Team" },
  { id: "catalog", label: "Project Catalog" },
  { id: "resources", label: "Developer Resources" },
]

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
    </span>
  )
}

function PageLink({
  page,
  children,
  className = "",
}: {
  page: Page
  children: React.ReactNode
  className?: string
}) {
  return (
    <a className={className} href={`#${page}`}>
      {children}
    </a>
  )
}

function Header({ active }: { active: Page }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <PageLink page="home" className="brand">
        <Mark />
        <strong>BreakPoints</strong>
      </PageLink>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        Menu
      </button>
      <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {navItems.map((item) => (
          <PageLink
            key={item.id}
            page={item.id}
            className={active === item.id ? "active" : ""}
          >
            {item.label}
          </PageLink>
        ))}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <strong>BreakPoints</strong>
        <p>
          Find us today along the halls of Clapp Laboratory&apos;s 2nd floor.
        </p>
        <p>
          <em>
            Questions? Contact{" "}
            <a
              href="http://minerva.cs.mtholyoke.edu/"
              target="_blank"
              rel="noreferrer"
            >
              Audrey St. John
            </a>
            .
          </em>
        </p>
        <p>
          <em>
            Presented by the MHC Science Center and partially supported through
            a partnership with{" "}
            <a href="https://bit.ly/4bUOePj" target="_blank" rel="noreferrer">
              AI4ALL
            </a>
            .
          </em>
        </p>
      </div>
      <div className="footer-index">
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <PageLink key={item.id} page={item.id}>
              {item.label}
            </PageLink>
          ))}
        </nav>
        <img src="/assets/mhc-seal.png" alt="Mount Holyoke College seal" />
      </div>
    </footer>
  )
}

function Shell({ page, children }: { page: Page children: React.ReactNode }) {
  return (
    <>
      <Header active={page} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

function Location({ title = "Try it yourself!" }: { title?: string }) {
  return (
    <section className="location">
      <div>
        <h2>{title}</h2>
        <p>
          Find us today along the halls of Clapp Laboratory&apos;s 2nd floor.
        </p>
      </div>
      <div className="location-card">
        <span>Clapp Laboratory</span>
        <strong>2nd Floor</strong>
      </div>
    </section>
  )
}

function Home() {
  const cards = [
    [
      "DEVELOPER RESOURCES",
      "Launch your next project.",
      "Explore a step-by-step guide on how to create your own BreakPoints-style project or learn about BreakPoints at the University level.",
      "Explore the Launchpad ↗",
      "launchpad" as Page,
    ],
    [
      "TEAM",
      "Meet the people behind it.",
      "Learn about the student-led independent study and the roles that bring the project together.",
      "About the team ↗",
      "team" as Page,
    ],
    [
      "PROJECT CATALOG",
      "Find your next pause.",
      "Browse sample installation concepts and explore the ways movement and shared play could become art.",
      "Browse concepts ↗",
      "catalog" as Page,
    ],
  ]
  return (
    <Shell page="home">
      <section className="dandelion-hero">
        <img
          className="dandelion-base"
          src="/assets/home-dandelion-detail.png"
          alt=""
        />
        <img
          className="dandelion"
          src="/assets/home-dandelion.png"
          alt="Blue dandelion artwork"
        />
        <div className="wish">
          <input aria-label="Make a wish" placeholder="make a wish…" />
          <span>
            press &amp; hold to blow
            <br />
            drag to direct the wind
          </span>
          <img src="/assets/home-compass.png" alt="" />
        </div>
      </section>
      <section className="welcome">
        <h1>
          Welcome to the BreakPoints
          <br />
          Landing Page.
        </h1>
        <p>
          A pilot program to inspire and empower creative tech trajectories by
          prompting passersby to pause their day for interactive displays.
        </p>
      </section>
      <section className="home-intro section">
        <div>
          <h2 className="display">
            Pause. Play.
            <br />
            Connect.
          </h2>
          <p className="lead dark">
            BreakPoints is a student led independent study project that creates
            interactive hallway displays aimed at getting students to slow down,
            connect with their peers, and take a BREAK!
          </p>
          <div className="actions">
            <PageLink className="button dark-button" page="launchpad">
              Launch your next project <span>↗</span>
            </PageLink>
            <PageLink className="button" page="team">
              Meet the team <span>↗</span>
            </PageLink>
          </div>
        </div>
        <img
          className="home-photo"
          src="/assets/home-hallway.png"
          alt="A student interacting with a hallway display"
        />
      </section>
      <section className="definition section gray">
        <div className="definition-copy">
          <div>
            <Eyebrow>THE IDEA BEHIND THE NAME</Eyebrow>
            <h2>
              What is a<br />
              breakpoint?
            </h2>
          </div>
          <p>
            In programming, a &apos;breakpoint&apos; is a specific point within
            a program where execution is intentionally paused, allowing the
            developer to inspect the current state of the program flow during
            debugging, essentially giving them a snapshot of what&apos;s
            happening at that exact moment. Thus, these displays should have you
            &apos;intentionally pausing&apos; during your usual daily
            &apos;program flow&apos; to &apos;inspect&apos; the current moment
            and &apos;debug&apos; your jumbled mind with something fun!
          </p>
        </div>
        <div className="three-cols">
          <div>
            <Eyebrow>01 / PAUSE</Eyebrow>
            <p>Step out of your usual flow.</p>
          </div>
          <div>
            <Eyebrow>02 / INSPECT</Eyebrow>
            <p>Notice the present moment.</p>
          </div>
          <div>
            <Eyebrow>03 / DEBUG</Eyebrow>
            <p>Make room for something fun.</p>
          </div>
        </div>
      </section>
      <section className="section explore">
        <h2>There&apos;s more to see.</h2>
        <div className="three-cols card-grid">
          {cards.map(([label, title, copy, link, page]) => (
            <article className="card" key={label}>
              <Eyebrow>{label}</Eyebrow>
              <h3>{title}</h3>
              <p>{copy}</p>
              <PageLink page={page as Page}>{link}</PageLink>
            </article>
          ))}
        </div>
      </section>
      <Location title="Take a BREAK!" />
    </Shell>
  )
}

const team = [
  ["Audrey St. John", "FACULTY MENTOR", "team-audrey.png"],
  ["Amelia Henzel", "PROJECT MANAGER", "team-amelia.png"],
  ["Lily Tran", "PROJECT MANAGER", "team-lily.png"],
  ["Devika Nanavati", "DEVELOPER", "team-devika.png"],
  ["Yolanda Li", "DEVELOPER", "team-yolanda.png"],
]

function Team() {
  return (
    <Shell page="team">
      <section className="page-intro team-intro">
        <Eyebrow>BREAKPOINTS / TEAM</Eyebrow>
        <h1>
          Student led,
          <br />
          Student developed.
        </h1>
        <div className="split">
          <div>
            <p className="lead dark">
              Students gain real world experience in a development environment
              as developers, project managers, and researchers.
            </p>
            <p className="note">
              A pilot program to inspire and empower creative tech trajectories
              by prompting passersby to pause their day for interactive
              displays.
            </p>
          </div>
          <img
            src="/assets/team-group.png"
            alt="The BreakPoints student team"
          />
        </div>
      </section>
      <section className="section team-section">
        <h2>The Team</h2>
        <div className="team-grid">
          {team.map(([name, role, image]) => (
            <article key={name}>
              <img src={`/assets/${image}`} alt={name} />
              <h3>{name}</h3>
              <Eyebrow>{role}</Eyebrow>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  )
}

const projects = [
  [
    "Beachy Keen",
    "Audrey",
    "The more people in the frame, the more beachy accessories!",
    "catalog-beachy.png",
    "https://editor.p5js.org/breakpoints.mhc/sketches/2ZD1w0IUu",
  ],
  [
    "D3 Week Photo Booth",
    "Alex",
    "Pose for a picture with a themed filter to celebrate MHC Athletics!",
    "catalog-photo-booth.png",
    "https://editor.p5js.org/breakpoints.mhc/sketches/eajHpGE0b",
  ],
  [
    "Melting Lines",
    "Annie",
    "Watch the mesmerizing melting lines change color and speed.",
    "catalog-melting.png",
    "https://editor.p5js.org/breakpoints.mhc/sketches/iuPtaWQF7",
  ],
  [
    "Water Ripples",
    "Hamnah",
    "Use your hand to trace a line of satisfying water ripples.",
    "catalog-water.png",
    "https://editor.p5js.org/breakpoints.mhc/sketches/ywW4RihaT",
  ],
  [
    "Falling Sand",
    "Nafisa",
    "Use your hand to create a beautiful sand sculpture!",
    "catalog-sand.png",
    "https://editor.p5js.org/breakpoints.mhc/sketches/C6yocPMWz",
  ],
  [
    "Catch a Pet",
    "Lily",
    "See how many different pets you can catch with your hand!",
    "catalog-pet.png",
    "https://editor.p5js.org/breakpoints.mhc/sketches/Gs9Lg9Ml9",
  ],
]

function Catalog() {
  return (
    <Shell page="catalog">
      <section className="page-intro">
        <Eyebrow>BREAKPOINTS / PROJECT CATALOG</Eyebrow>
        <h1>Find inspiration for your next project.</h1>
        <p className="lead">
          Browse installation concepts built around movement, playful discovery,
          and connection with a peer.
        </p>
      </section>
      <section className="catalog-section">
        <div className="catalog-grid">
          {projects.map(([name, author, copy, image, href]) => (
            <article className="project-card" key={name}>
              <img src={`/assets/${image}`} alt={`Preview of ${name}`} />
              <div>
                <h2>
                  <a href={href} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </h2>
                <strong>By: {author}</strong>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <Eyebrow>END OF SAMPLE CATALOG / 6 OF 6 CONCEPTS</Eyebrow>
      </section>
      <Location />
    </Shell>
  )
}

const resources = [
  [
    "Start here",
    "Onboarding to orient a new contributor to the project and its purpose.",
    [
      [
        "Project Guide",
        "https://docs.google.com/document/d/1Mh2djIfziU6aH2LxvCEvjHuP5pfzZWlAycl2XGq5brY/edit?usp=sharing",
      ],
      [
        "HackHolyoke Workshop",
        "https://docs.google.com/document/d/1pMLJq8pHR3lH-EeMymm2k11EvpXdj6TXFPShE82_9wM/edit?tab=t.0",
      ],
    ],
  ],
  [
    "Inspiration",
    "Shape an idea around pause, play, and peer connection.",
    [
      [
        "Interactive Computer Vision Displays in Public: Art, Culture, and Media",
        "https://docs.google.com/document/d/1EH9H7QymT650OF-cvJ5pbSOBiXgQHN68A_zTQ5mPdtc/edit?usp=sharing",
      ],
      [
        "P5js Demos",
        "https://editor.p5js.org/breakpoints.mhc/collections/g2W-DRRITW",
      ],
    ],
  ],
  [
    "P5js",
    "Javascript coding web platform.",
    [
      ["P5js Education Resources", "https://p5js.org/education-resources/"],
      ["P5js Reference", "https://p5js.org/reference/"],
      ["The Coding Train", "https://thecodingtrain.com/"],
    ],
  ],
  [
    "User Experience",
    "Consider how an experience belongs in a shared hallway.",
    [
      [
        "Breakpoints Future Journey Map",
        "https://www.figma.com/design/UVVyNhvjGdKmzDaBV8iGDS/Breakpoint-Future-Journey-Map?node-id=1-1315&p=f",
      ],
      [
        "UX Guide Video",
        "https://drive.google.com/file/d/18py4qljxuEqnbafjVrl0ojqD16_KF9Nk/view",
      ],
    ],
  ],
  [
    "Hardware",
    "Setting up your installation.",
    [
      [
        "BP Hardware Guide",
        "https://docs.google.com/document/d/1JaMFJtdcOnScjEtC4OK9K_nCCodusB9KxiyTrIdhB2E/edit?usp=sharing",
      ],
      [
        "BP How to Display a Project / Rotation",
        "https://docs.google.com/document/d/1u8mCTsPi2f0-DO6I-QsL2FxTYNTgOVmwAoskjPkrplM/edit?usp=sharing",
      ],
    ],
  ],
  [
    "Computer Vision",
    "Browse resources on Computer vision.",
    [
      [
        "MediaPipe Hand Tracking",
        "https://developers.google.com/edge/mediapipe/solutions/vision/hand_landmarker",
      ],
      [
        "MediaPipe Face Tracking",
        "https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker",
      ],
    ],
  ],
] as const

function Resources() {
  return (
    <Shell page="resources">
      <section className="page-intro">
        <Eyebrow>BREAKPOINTS / DEVELOPER RESOURCES</Eyebrow>
        <h1>Build Better.</h1>
        <p className="lead">
          Resources for learning, building, and contributing to Breakpoints.
        </p>
      </section>
      <section className="resource-section">
        <div className="section-heading">
          <h2>A starting point for making.</h2>
          <Eyebrow>6 CATEGORIES</Eyebrow>
        </div>
        <div className="resource-grid">
          {resources.map(([title, copy, links]) => (
            <article className="resource-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div>
                {links.map(([label, href]) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer">
                    <span>{label}</span>
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  )
}

const launchSteps = [
  [
    "Get inspired",
    "Explore demos of previous student projects to gain inspiration. Choose who the experience is for and what might make them stop, smile, or connect.",
    "Try asking: What could two people discover together?",
    "A one-sentence intention.",
    "launchpad-inspire.png",
    "p5.js demos",
    "https://p5js.org/reference/",
  ],
  [
    "Modify an existing demo",
    "Pick one demo and add or change a feature",
    "Try: pick a demo with finger-tracking input and change the output",
    "A modified existing demo.",
    "launchpad-modify.png",
    "p5.js demos",
    "https://editor.p5js.org/breakpoints.mhc/collections/g2W-DRRITW",
  ],
  [
    "Make a prototype",
    "Continue editing or start from scratch. Test the visual idea on a screen first. You could simulate the input before exploring a camera-based response; choose tools around your idea and skills.",
    "Keep it small: One input, one response, one screen.",
    "A rough prototype.",
    "launchpad-prototype.png",
    "p5.js reference",
    "https://p5js.org/reference/",
  ],
  [
    "Try, observe, and refine",
    "Invite a few willing peers to try it. Watch whether the invitation is clear and the response feels immediate. Change one thing, then try again.",
    "Ask: What made you pause? What felt confusing?",
    "Testing notes + one improvement for the next version.",
    "launchpad-test.png",
    "UX guide video",
    "https://drive.google.com/file/d/18py4qljxuEqnbafjVrl0ojqD16_KF9Nk/view",
  ],
]

const phases = [
  [
    "Observe & research",
    "Notice patterns in a shared space. Narrow down a research question.",
    "A short study proposal",
  ],
  [
    "Make & iterate",
    "Build one small demo. Try it with willing peers, record feedback, and revise.",
    "A working prototype",
  ],
  [
    "Run a small pilot",
    "Invite voluntary participation and gather feedback.",
    "Field notes",
  ],
  [
    "Reflect & document",
    "Revisit the question. Discuss limitations, unexpected findings, and what you would try next.",
    "A reflective report",
  ],
]

function Launchpad() {
  return (
    <Shell page="launchpad">
      <section className="page-intro launch-intro">
        <Eyebrow>BREAKPOINTS / LAUNCHPAD</Eyebrow>
        <h1>Start with a moment of play.</h1>
        <div className="split-copy">
          <div>
            <p className="lead">
              Want to make an interactive computer vision art installation? This
              launchpad is for students and curious makers ready to turn a small
              idea into a shared pause.
            </p>
            <p>
              You don&apos;t need a finished concept to begin. Start with one
              playful response, try it with a peer, and build from what you
              learn.
            </p>
          </div>
          <aside>
            <Eyebrow>INSPIRED BY BREAKPOINTS</Eyebrow>
            <p>
              Our student-led independent study invites people to slow down,
              connect with peers, and take a BREAK—an intentional pause in the
              day&apos;s usual flow.
            </p>
          </aside>
        </div>
      </section>
      <section className="launch-steps section">
        <div className="section-heading">
          <h2>From an idea to a first installation.</h2>
          <Eyebrow>4 SUGGESTED STEPS</Eyebrow>
        </div>
        <div className="steps">
          {launchSteps.map(
            ([title, copy, prompt, result, image, link, href], i) => (
              <article className="step-card" key={title}>
                <img src={`/assets/${image}`} alt="" />
                <div>
                  <Eyebrow>0{i + 1} / SUGGESTED STEP</Eyebrow>
                  <h3>{title}</h3>
                  <p className="muted">{copy}</p>
                  <p>{prompt}</p>
                  <div className="takeaway">
                    <Eyebrow>LEAVE WITH</Eyebrow>
                    <p>{result}</p>
                  </div>
                  <a
                    className="button dark-button"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link}
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ),
          )}
        </div>
      </section>
      <section className="section gray pilot">
        <div className="definition-copy">
          <div>
            <Eyebrow>BEFORE YOU GO PUBLIC</Eyebrow>
            <h2>Make room for everyone.</h2>
          </div>
          <p>
            A hallway is a shared space, not just a canvas. Before a small
            public pilot, consider how people can join in comfortably—or choose
            to keep walking. Confirm local permissions and policies for your
            setting.
          </p>
        </div>
        <div className="three-cols">
          <div>
            <h3>Space &amp; permission</h3>
            <p>
              Check with the space owner before a public trial. Keep walkways
              clear and consider lighting, screen visibility, power, and safe
              cable placement.
            </p>
          </div>
          <div>
            <h3>Privacy &amp; choice</h3>
            <p>
              Explain any camera use before people enter. Prefer a design that
              avoids recording or identifying people, and make it easy to pass
              by without participating.
            </p>
          </div>
          <div>
            <h3>Access &amp; care</h3>
            <p>
              Offer a clear invitation to participate. Plan how to pause, reset,
              and check on the installation during a trial.
            </p>
          </div>
        </div>
      </section>
      <section className="section university">
        <Eyebrow>BREAKPOINTS / LAUNCHPAD / UNIVERSITY LEVEL</Eyebrow>
        <h2 className="display small">
          BreakPoints at the
          <br />
          university level
        </h2>
        <div className="split-copy">
          <div>
            <p className="lead">
              Computer vision projects using hand tracking and body tracking can
              become projects at the university level.
            </p>
            <p>
              Students can develop industry skills in Project Management,
              Software Development, and User Experience design by creating their
              own breakpoints-style projects.
            </p>
          </div>
          <aside>
            <Eyebrow>ONE POSSIBLE RESEARCH QUESTION</Eyebrow>
            <p className="question">
              What makes a shared pause feel inviting rather than interruptive?
            </p>
          </aside>
        </div>
        <div className="section-heading phase-heading">
          <h2>Example Implementation: a pilot program with room to adapt.</h2>
          <Eyebrow>4 PROPOSED PHASES</Eyebrow>
        </div>
        <p className="muted">
          With a faculty mentor, agree on a focused question, scope, and
          timeline. Meet regularly to review progress, troubleshoot, and adjust
          the plan to the student&apos;s experience and available resources.
        </p>
        <div className="phases">
          {phases.map(([title, practice, evidence], i) => (
            <div key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{practice}</p>
              <strong>{evidence}</strong>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  )
}

function getPage(): Page {
  const value = window.location.hash.slice(1)
  return navItems.some((item) => item.id === value) ? value as Page : "home"
}

export default function App() {
  const [page, setPage] = useState<Page>(getPage)
  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage())
      window.scrollTo({ top: 0, behavior: "instant" })
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  if (page === "team") return <Team />
  if (page === "catalog") return <Catalog />
  if (page === "resources") return <Resources />
  if (page === "launchpad") return <Launchpad />
  return <Home />
}
