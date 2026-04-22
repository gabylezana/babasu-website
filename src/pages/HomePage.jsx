import {
  COMPANIES,
  HOME_FAQS,
  HOME_PILLARS,
  IMAGES,
  SITE,
  TEAM_MEMBERS,
} from '../site-data.js';
import { ButtonLink, PageFrame, SectionIntro, siteHref } from '../ui.jsx';

function PortfolioBrandTile({ company }) {
  const href = company.href ? siteHref(company.href) : siteHref('portfolio/');
  const visual = company.logo || (company.visualStyle === 'logo' ? company.image : null);

  return (
    <a className="home-brand-tile" href={href} data-accent={company.accent}>
      <span className="home-brand-meta">{company.category}</span>
      <div className={`home-brand-mark ${visual ? 'has-image' : 'has-wordmark'}`.trim()}>
        {visual ? <img src={visual} alt={company.name} /> : <strong>{company.name}</strong>}
      </div>
      <span className="home-brand-region">{company.region}</span>
    </a>
  );
}

export function HomePage() {
  const portfolioLoop = [...COMPANIES, ...COMPANIES];

  return (
    <PageFrame pageKey="home" headerVariant="overlay">
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7, 22, 19, 0.28) 0%, rgba(7, 22, 19, 0.4) 40%, rgba(7, 22, 19, 0.72) 100%), url(${IMAGES.tucavaca})`,
        }}
      >
        <div className="shell home-hero-meta">
          <span>Est. Santa Cruz de la Sierra · Bolivia</span>
          <span>Valle de Tucavaca · 17°42′S</span>
        </div>

        <div className="shell home-hero-content">
          <p className="home-hero-kicker">— Babasu Ventures · Est. 2021</p>
          <h1>
            The seeds that will
            <br />
            become <span>the forest.</span>
          </h1>
          <p className="home-hero-body">
            An early-stage venture firm backing founders who use technology and
            innovation to transform society in Latin America.
          </p>
          <div className="hero-actions">
            <ButtonLink href={siteHref('philosophy/')} tone="primary" arrow>
              Our philosophy
            </ButtonLink>
            <ButtonLink href={siteHref('portfolio/')} tone="secondary" arrow>
              Explore investments
            </ButtonLink>
          </div>
          <div className="home-scroll-cue" aria-hidden="true">
            <div className="home-scroll-line" />
          </div>
        </div>

        <div className="shell home-hero-bottom">
          <div className="home-scroll-copy">
            <span>Scroll to explore</span>
            <span>00 — Index</span>
          </div>
          <div className="home-hero-stats">
            <div>
              <span>Founded</span>
              <strong>2021</strong>
            </div>
            <div>
              <span>Stage</span>
              <strong>Pre-seed · Seed</strong>
            </div>
            <div>
              <span>Geography</span>
              <strong>Latin America</strong>
            </div>
            <div>
              <span>HQ</span>
              <strong>Santa Cruz, BO</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell">
          <SectionIntro
            eyebrow="Our global reach"
            title="Rooted in Santa Cruz, investing across Latin America."
            body="We back entrepreneurs building technology-enabled companies with the potential to solve meaningful problems, create measurable impact and scale across the region."
            action={
              <ButtonLink href={siteHref('team/')} tone="ghost">
                Meet the team
              </ButtonLink>
            }
          />
          <div className="pillars-grid">
            {HOME_PILLARS.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <p className="section-eyebrow">{pillar.eyebrow}</p>
                <h3>{pillar.title}</h3>
                <p className="muted-copy">{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-muted">
        <div className="shell">
          <SectionIntro
            eyebrow="Selected portfolio"
            title="A portfolio of companies built for real operating markets."
            body="From software and fintech infrastructure to food rescue, sports tech and electric mobility, the portfolio reflects the range of operating problems we believe are worth backing early."
            action={
              <ButtonLink href={siteHref('portfolio/')} tone="ghost">
                Open portfolio
              </ButtonLink>
            }
          />
          <div className="home-portfolio-band">
            <div className="home-portfolio-track">
              {portfolioLoop.map((company, index) => (
                <PortfolioBrandTile key={`${company.name}-${index}`} company={company} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell story-split">
          <div className="content-photo">
            <img src={IMAGES.partnersCasual} alt="Babasu partners" />
          </div>
          <div className="content-block">
            <p className="section-eyebrow">Team</p>
            <h2>Close to founders, long on conviction and committed to the journey.</h2>
            <p className="muted-copy">
              We work as partners to entrepreneurs, combining investment discipline with
              practical support and a long-term perspective on company building.
            </p>
            <div className="detail-list">
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className="detail-item">
                  <p className="meta-label">{member.role}</p>
                  <p className="meta-value">{member.name}</p>
                </div>
              ))}
            </div>
            <ButtonLink href={siteHref('team/')} tone="ghost">
              See the full team
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="page-section section-muted">
        <div className="shell faq-shell">
          <SectionIntro
            eyebrow="FAQ"
            title="A closer look at where and how we invest."
            body="A quick overview of our geographic lens, founder profile and stage focus."
          />
          <div className="faq-list">
            {HOME_FAQS.map((item, index) => (
              <details key={item.question} className="faq-item" open={index === 0}>
                <summary className="faq-trigger">
                  <span className="faq-index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question">{item.question}</span>
                </summary>
                <div className="faq-answer">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="shell">
          <p className="section-eyebrow">Contact</p>
          <h2>We look for entrepreneurs turning ambition into measurable impact.</h2>
          <p>
            If you are building with purpose and traction, we would love to hear your story
            and learn how Babasu can be part of that journey.
          </p>
          <div className="hero-actions">
            <ButtonLink href={siteHref('contact/')} tone="primary">
              Get in touch
            </ButtonLink>
            <ButtonLink href={`mailto:${SITE.email}`} tone="secondary">
              Email directly
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
