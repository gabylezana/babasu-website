import { COMPANY_PROFILES, getCompanyBySlug } from '../site-data.js';
import { ButtonLink, PageFrame, siteHref } from '../ui.jsx';

export function CompanyProfilePage({ slug }) {
  const company = getCompanyBySlug(slug);
  const profile = COMPANY_PROFILES[slug];

  if (!company || !profile) {
    throw new Error(`Missing company profile for slug: ${slug}`);
  }

  const spotlightImage = profile.spotlight?.image || profile.stageImage || company.image;
  const spotlightAlt = profile.spotlight?.alt || `${company.name} visual`;
  const closingImage = profile.closingImage || profile.stageImage || company.heroImage || company.image;
  const externalLabel = company.externalLabel || 'Visit company';

  return (
    <PageFrame pageKey="portfolio">
      <section className="tugerente-stage">
        <div className="shell tugerente-stage-grid">
          <div className="tugerente-stage-copy">
            <p className="section-eyebrow">Portfolio / {company.name}</p>
            <h1>{profile.heroTitle}</h1>
            <p className="hero-body">{profile.heroBody}</p>
            <div className="hero-actions">
              {company.externalHref ? (
                <a
                  className="button-link button-primary"
                  href={company.externalHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {externalLabel}
                </a>
              ) : null}
              <ButtonLink href={siteHref('portfolio/')} tone="ghost">
                Back to portfolio
              </ButtonLink>
            </div>
          </div>

          <div className="tugerente-stage-panel">
            <div className="tugerente-wordmark-card">
              <span className="tugerente-wordmark-note">{profile.badgeNote || 'Portfolio company'}</span>
              <strong>{company.name}</strong>
              <p>{profile.badgeBody}</p>
            </div>
            <div className="tugerente-stage-media">
              <img src={profile.stageImage || company.heroImage || company.image} alt={`${company.name} cover`} />
            </div>
          </div>
        </div>

        <div className="shell tugerente-facts-grid">
          {profile.facts.map((fact) => (
            <article key={fact.label} className="tugerente-fact-card">
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="shell tugerente-overview-grid">
          <div className="content-block">
            <p className="section-eyebrow">Company overview</p>
            <h2>{profile.overviewTitle}</h2>
            {profile.overviewBody.map((paragraph) => (
              <p key={paragraph} className="muted-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="tugerente-founder-card">
            <img src={spotlightImage} alt={spotlightAlt} />
            <div>
              <p className="meta-label">{profile.spotlight.label}</p>
              <h3>{profile.spotlight.title}</h3>
              <p className="muted-copy">{profile.spotlight.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-muted">
        <div className="shell">
          <div className="portfolio-section-heading">
            <div>
              <p className="section-eyebrow">Why it matters</p>
              <h2>{profile.whyTitle}</h2>
            </div>
            <p className="muted-copy">{profile.whyBody}</p>
          </div>

          <div className="tugerente-highlights-grid">
            {profile.highlights.map((item) => (
              <article key={item.title} className="portfolio-lens-card">
                <p className="section-eyebrow">{item.title}</p>
                <p className="muted-copy">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="shell tugerente-closing-grid">
          <div className="tugerente-closing-media">
            <img src={closingImage} alt={`${company.name} visual`} />
          </div>
          <div className="content-block">
            <p className="section-eyebrow">Babasu lens</p>
            <h2>{profile.closingTitle}</h2>
            {profile.closingBody.map((paragraph) => (
              <p key={paragraph} className="muted-copy">
                {paragraph}
              </p>
            ))}
            <ButtonLink href={siteHref('contact/')} tone="ghost">
              Get in touch with Babasu
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
