import { useEffect, useState } from 'react';
import { COMPANIES } from '../site-data.js';
import { ButtonLink, PageFrame, siteHref } from '../ui.jsx';

function CompanyVisual({ company }) {
  const visualImage = company.cardImage || company.image;

  if (company.logo && visualImage && company.logo !== visualImage) {
    return (
      <div className="portfolio-company-visual has-image">
        <img src={visualImage} alt={company.name} />
        <div className="portfolio-company-logo-badge">
          <img src={company.logo} alt={`${company.name} logo`} />
        </div>
      </div>
    );
  }

  if (visualImage) {
    const visualClass = company.visualStyle === 'logo' ? 'has-logo' : 'has-image';

    return (
      <div className={`portfolio-company-visual ${visualClass}`.trim()}>
        <img src={visualImage} alt={company.name} />
      </div>
    );
  }

  return (
    <div className="portfolio-company-visual portfolio-company-placeholder" data-accent={company.accent}>
      <span>{company.category}</span>
      <strong>{company.name}</strong>
    </div>
  );
}

function PortfolioCompanyCard({ company }) {
  const hasInternalProfile = Boolean(company.href);
  const primaryHref = hasInternalProfile ? siteHref(company.href) : company.externalHref;
  const primaryLabel = hasInternalProfile
    ? 'View company profile'
    : (company.externalLabel || 'Visit landing');

  return (
    <article className="portfolio-company-card" data-accent={company.accent}>
      <CompanyVisual company={company} />
      <div className="portfolio-company-card-body">
        <div className="portfolio-company-card-meta">
          <span>{company.stage}</span>
          <span>{company.category}</span>
        </div>
        <h3>{company.name}</h3>
        <p className="portfolio-company-region">{company.region}</p>
        <div className="portfolio-company-copy-block">
          <span className="portfolio-copy-label">What it is</span>
          <p className="muted-copy">{company.summary}</p>
        </div>
        <div className="portfolio-company-copy-block portfolio-company-thesis">
          <span className="portfolio-copy-label">Why it matters</span>
          <p className="portfolio-company-support">{company.thesis}</p>
        </div>
        <div className="portfolio-company-copy-block portfolio-company-babasu">
          <span className="portfolio-copy-label">Why it fits Babasu</span>
          <p className="portfolio-company-support">{company.support}</p>
        </div>
        {primaryHref ? (
          <div className="portfolio-card-links">
            <a
              className="page-link"
              href={primaryHref}
              target={hasInternalProfile ? undefined : '_blank'}
              rel={hasInternalProfile ? undefined : 'noreferrer'}
            >
              {primaryLabel}
            </a>
          </div>
        ) : (
          <p className="portfolio-card-note">Selected portfolio company</p>
        )}
      </div>
    </article>
  );
}

function HeroSpotlightPanel({ company, index, total }) {
  const hasInternalProfile = Boolean(company.href);
  const primaryHref = hasInternalProfile ? siteHref(company.href) : company.externalHref;
  const primaryLabel = hasInternalProfile
    ? 'View company profile'
    : (company.externalLabel || 'Visit landing');

  return (
    <article className="portfolio-spotlight-card" data-accent={company.accent}>
      <div className="portfolio-spotlight-head">
        <div
          className={`portfolio-spotlight-brand ${company.logo ? 'has-logo' : 'has-wordmark'}`.trim()}
          aria-label={company.name}
        >
          {company.logo ? <img src={company.logo} alt={`${company.name} logo`} /> : <strong>{company.name}</strong>}
        </div>
        <div className="portfolio-spotlight-meta">
          <span>{company.stage}</span>
          <span>{company.category}</span>
        </div>
      </div>

      <div className="portfolio-spotlight-copy">
        <span className="portfolio-spotlight-kicker">Current company</span>
        <h2>{company.name}</h2>
        <p className="portfolio-spotlight-summary">{company.summary}</p>
      </div>

      <div className="portfolio-spotlight-footer">
        <span className="portfolio-spotlight-count">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        {primaryHref ? (
          <a
            className="portfolio-spotlight-link"
            href={primaryHref}
            target={hasInternalProfile ? undefined : '_blank'}
            rel={hasInternalProfile ? undefined : 'noreferrer'}
          >
            {primaryLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompany = COMPANIES[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % COMPANIES.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <PageFrame pageKey="portfolio" headerVariant="overlay">
      <section
        className="portfolio-prod-hero header-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(7, 15, 12, 0.84) 0%, rgba(7, 15, 12, 0.7) 34%, rgba(7, 15, 12, 0.46) 60%, rgba(7, 15, 12, 0.64) 100%), url(${activeCompany.heroImage || activeCompany.image})`,
        }}
      >
        <div className="shell portfolio-hero-meta">
          <span>Portfolio rotation</span>
          <span>{activeCompany.region}</span>
        </div>

        <div className="shell portfolio-prod-grid">
          <div className="portfolio-prod-copy">
            <p className="section-eyebrow">Portfolio</p>
            <h1>
              Five companies.
              <br />
              Five precise
              <br />
              operating bets.
            </h1>
            <p className="hero-body">
              Babasu&apos;s portfolio is not a list of logos. It is a set of companies solving
              recurring operational problems with products that can earn a daily place in the market.
            </p>
            <div className="hero-actions">
              <ButtonLink href="#selected-companies" tone="primary">
                View all companies
              </ButtonLink>
            </div>
            <div className="portfolio-prod-dots">
              {COMPANIES.map((company, index) => (
                <button
                  key={company.name}
                  type="button"
                  className={index === activeIndex ? 'is-active' : undefined}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${company.name}`}
                />
              ))}
            </div>
          </div>

          <div className="portfolio-prod-carousel">
            <HeroSpotlightPanel
              company={activeCompany}
              index={activeIndex}
              total={COMPANIES.length}
            />
          </div>
        </div>

        <div className="shell portfolio-hero-strip">
          <div>
            <span>Current company</span>
            <strong>{activeCompany.name}</strong>
          </div>
          <div>
            <span>Product</span>
            <strong>{activeCompany.category}</strong>
          </div>
          <div>
            <span>Region</span>
            <strong>{activeCompany.region}</strong>
          </div>
          <div>
            <span>Lens</span>
            <strong>Operational utility</strong>
          </div>
        </div>
      </section>

      <section className="page-section section-muted" id="selected-companies">
        <div className="shell portfolio-companies-shell">
          <div className="portfolio-section-heading">
            <div>
              <p className="section-eyebrow">Selected companies</p>
              <h2>Each company should read as a clear investment argument, not a placeholder.</h2>
            </div>
            <p className="muted-copy">
              The standard is simple: define the product clearly, make the operating insight
              legible and explain why the company belongs in the portfolio without hiding behind
              generic venture language.
            </p>
          </div>

          <div className="portfolio-company-grid">
            {COMPANIES.map((company) => (
              <PortfolioCompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
