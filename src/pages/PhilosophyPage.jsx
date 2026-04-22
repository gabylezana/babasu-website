import {
  IMAGES,
  PHILOSOPHY_ESSAY,
  PHILOSOPHY_HISTORY,
  PHILOSOPHY_MANIFESTO_POINTS,
  PHILOSOPHY_PRACTICES,
  PHILOSOPHY_PRINCIPLES,
} from '../site-data.js';
import colcaCanyon from '../../assets/colca-canyon-peru.jpg';
import { ButtonLink, PageFrame, siteHref } from '../ui.jsx';

export function PhilosophyPage() {
  return (
    <PageFrame pageKey="philosophy">
      <section
        className="page-hero philosophy-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7, 22, 19, 0.24) 0%, rgba(7, 22, 19, 0.44) 48%, rgba(7, 22, 19, 0.7) 100%), url(${colcaCanyon})`,
        }}
      >
        <div className="shell philosophy-hero-frame">
          <div className="philosophy-hero-meta">
            <span>Colca Canyon · Arequipa, Peru</span>
            <span>Andes landscape shaped by depth, patience and time</span>
          </div>

          <div className="page-hero-inner philosophy-hero-inner">
            <p className="section-eyebrow">Philosophy</p>
            <h1>Innovation that empowers. Impact that transcends.</h1>
            <p className="hero-body">
              We invest with patience, operational conviction and a long-term
              commitment to entrepreneurs building for Latin America.
            </p>
          </div>

          <div className="philosophy-hero-note">
            <span>Landscape note</span>
            <strong>Colca Canyon, Peru</strong>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <div className="philosophy-story-grid">
            <div className="philosophy-story-heading">
              <p className="section-eyebrow">Our philosophy</p>
              <h2>
                <span>A Journey of Impact</span>
                <span>From Experience to Excellence</span>
                <span>Empowering Entrepreneurs</span>
              </h2>
            </div>

            <div className="philosophy-story-copy">
              {PHILOSOPHY_ESSAY.map((paragraph) => (
                <p key={paragraph} className="muted-copy">
                  {paragraph}
                </p>
              ))}

              <div className="philosophy-practice-list">
                {PHILOSOPHY_PRACTICES.map((item) => (
                  <article key={item.title} className="philosophy-practice-item">
                    <h3>{item.title}</h3>
                    <p className="muted-copy">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section philosophy-portrait-section">
        <div className="shell">
          <figure className="philosophy-portrait-card">
            <div className="philosophy-portrait-media">
              <img src={IMAGES.partnersSitting} alt="Babasu partners sitting on steps" />
            </div>
            <figcaption className="philosophy-portrait-caption">
              <p className="meta-label">Built alongside founders</p>
              <p>
                We believe meaningful investing is grounded in trust, operating
                understanding and close partnership over time.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="page-section section-muted">
        <div className="shell">
          <div className="philosophy-history-grid">
            <div className="content-block philosophy-history-copy">
              <p className="section-eyebrow">Our history</p>
              <h2>
                We champion sustainable investments that transform entrepreneurial vision
                into enduring value.
              </h2>
              {PHILOSOPHY_HISTORY.map((paragraph) => (
                <p key={paragraph} className="muted-copy">
                  {paragraph}
                </p>
              ))}
              <ButtonLink href={siteHref('portfolio/')} tone="ghost">
                Explore our portfolio
              </ButtonLink>
            </div>

            <div className="principles-grid philosophy-principles-grid">
              {PHILOSOPHY_PRINCIPLES.map((principle) => (
                <article key={principle.title} className="principle-card philosophy-principle-card">
                  <p className="meta-label">Principle</p>
                  <h3>{principle.title}</h3>
                  <p className="muted-copy">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="philosophy-closing">
        <div className="shell philosophy-closing-shell">
          <p className="section-eyebrow">What we believe</p>
          <h2>
            We think and act as owners and entrepreneurs, committed to turning our
            founders&apos; dreams into tangible realities.
          </h2>
          <p className="philosophy-closing-body">
            Our role is to support exceptional founders with conviction, perspective and a
            long-term commitment to building meaningful companies.
          </p>
          <div className="philosophy-manifesto-points">
            {PHILOSOPHY_MANIFESTO_POINTS.map((point) => (
              <p key={point}>{point}</p>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
