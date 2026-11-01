import { SiteHeader } from "@/components/site-header";
import { MechanicalCube } from "@/components/mechanical-cube";
import { ProjectExplorer } from "@/components/project-explorer";
import { SignalRoute } from "@/components/signal-route";
import { CopyEmail } from "@/components/copy-email";
import { Arrow } from "@/components/icons";
import { FoldMark } from "@/components/brand-mark";
import { interests, profile } from "@/lib/portfolio";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="hero page-width" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow mono">
              <FoldMark className="eyebrow-mark" /> ENGINEERING, WITH A SENSE
              OF WONDER.
            </div>
            <h1 id="hero-heading">
              Curiosity,
              <br />
              in working
              <br />
              <em>form.</em>
              <FoldMark className="hero-mark" />
            </h1>
            <p>
              I’m {profile.firstName}. A developer and Computer Engineering
              student turning <span>“what if?”</span> into things you can use.
            </p>
            <a href="#work" className="hero-link">
              Explore the things I build{" "}
              <span>
                <Arrow direction="down" />
              </span>
            </a>
          </div>
          <MechanicalCube />
          <div className="hero-footer mono">
            <span>
              BASED IN INDIA{" "}
              <span className="muted">/ THINKING EVERYWHERE</span>
            </span>
            <span className="hero-side-note">ALWAYS A WORK IN PROGRESS.</span>
            <a href="#work">
              SCROLL TO DISCOVER <Arrow direction="down" />
            </a>
          </div>
        </section>
        <section
          id="work"
          className="work-section page-width"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow mono">
                <span className="section-index">01 /</span> SELECTED WORK
              </div>
              <h2 id="work-heading">
                Ideas, out in <em>the world.</em>
              </h2>
            </div>
            <p>
              A few things I’ve been building. <br />
              Each one starts with a question.
            </p>
          </div>
          <ProjectExplorer />
        </section>
        <section
          id="about"
          className="about-section"
          aria-labelledby="about-heading"
        >
          <div className="page-width about-inner">
            <div className="about-intro">
              <div className="eyebrow mono">
                <span className="section-index">02 /</span> THE PERSON BEHIND
                THE PIXELS
              </div>
              <h2 id="about-heading">
                A builder.
                <br />A student.
                <br />
                <em>Still curious.</em>
              </h2>
              <FoldMark className="about-mark" />
              <div className="about-coordinate mono">
                {profile.location.toUpperCase()}
                <br />
                <span>LEARNING BY MAKING.</span>
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">
                I like the moment something clicks.
                <br />A tricky problem. A new technology.
                <br />
                An idea that finally becomes real.
              </p>
              <p>
                I’m a Computer Engineering student who learns by building,
                breaking, and understanding how things work. My interests sit
                somewhere between thoughtful interfaces and the systems
                underneath them.
              </p>
              <p>I’m still figuring things out. That’s the interesting part.</p>
              <div className="interest-list">
                {interests.map((interest, index) => (
                  <details
                    key={interest.number}
                    name="interests"
                    open={index === 0}
                  >
                    <summary>
                      <span className="mono">{interest.number}</span>
                      <h3>{interest.name}</h3>
                      <span className="details-sign" aria-hidden="true" />
                    </summary>
                    <div className="interest-content">
                      <p>{interest.description}</p>
                      <ul>
                        {interest.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="lab"
          className="lab-section page-width"
          aria-labelledby="lab-heading"
        >
          <div className="lab-copy">
            <div className="eyebrow mono">
              <span className="section-index">03 /</span> NO BRIEF. JUST
              CURIOSITY.
            </div>
            <h2 id="lab-heading">
              Room to
              <br />
              <em>play.</em>
              <FoldMark />
            </h2>
            <p>
              A small puzzle about making connections. Turn a piece, follow the
              signal, and find your way through.
            </p>
            <p className="lab-instruction">
              Three circuits. One curious mind.
              <Arrow direction="right" />
            </p>
            <span className="lab-note mono">
              NO TIMER. JUST YOU AND THE NEXT CONNECTION.
            </span>
          </div>
          <SignalRoute />
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="page-width">
            <div className="eyebrow mono">
              <span className="section-index">04 /</span> THE NEXT GOOD THING
              STARTS SOMEWHERE.
            </div>
            <div className="contact-heading">
              <h2 id="contact-heading">
                What if we
                <br />
                <em>built something?</em>
              </h2>
              <a
                className="contact-arrow"
                href={`mailto:${profile.email}`}
                aria-label="Start a conversation by email"
              >
                <Arrow />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <p>Have an idea, an opportunity, or a good question?</p>
                <a className="email-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <CopyEmail />
              </div>
              <div className="social-links">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Arrow />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
              </div>
            </div>
            <footer className="footer mono">
              <span>© 2026 {profile.name.toUpperCase()}</span>
              <span>MADE WITH INTENTION. ALWAYS EVOLVING.</span>
              <a href="#">
                BACK TO THE TOP <Arrow direction="up-right" />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
