import { COMPANY_PROFILES, getCompanyBySlug } from '../site-data.js';
import { ButtonLink, PageFrame, siteHref } from '../ui.jsx';

export function CompanyProfilePage({ slug }) {
  const company = getCompanyBySlug(slug);
  const profile = COMPANY_PROFILES[slug];

  if (!company || !profile) {
    throw new Error(`Missing company profile for slug: ${slug}`);
  }

  const heroImage = profile.stageImage || company.heroImage || company.image;
  const spotlightImage = profile.spotlight?.image || profile.stageImage || company.image;
  const closingImage = profile.closingImage || profile.stageImage || company.heroImage || company.image;
  const externalLabel = company.externalLabel || 'Visit company';

  return (
    <PageFrame pageKey="portfolio" headerVariant="overlay">
      <section
        className="company-hero"
        data-accent={company.accent}
        style={{
          backgroundImage: `linear-gradient(170deg, rgba(8, 20, 16, 0.36) 0%, rgba(8, 20, 16, 0.62) 48%, rgba(8, 20, 16, 0.90) 100%), url(${heroImage})`,
        }}
      >
        <div className="shell company-hero-top">
          <span>Portfolio · {company.name}</span>
          {company.region && <span>{company.region}</span>}
        </div>

        <div className="shell company-hero-body">
          {company.logo && (
            <div className="company-hero-logo-pill">
              <img src={company.logo} alt={company.name} />
            </div>
          )}
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
            <ButtonLink href={siteHref('portfolio/')} tone="secondary">
              Back to portfolio
            </ButtonLink>
          </div>
        </div>

        <div className="shell company-hero-facts">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="company-fact-item">
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
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
            <img src={spotlightImage} alt={profile.spotlight?.alt || `${company.name} visual`} />
            <div>
              <p className="meta-label">{profile.spotlight?.label}</p>
              <h3>{profile.spotlight?.title}</h3>
              <p className="muted-copy">{profile.spotlight?.body}</p>
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
