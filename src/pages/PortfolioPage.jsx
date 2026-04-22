import { useEffect, useState } from 'react';
import { COMPANIES } from '../site-data.js';
import { ButtonLink, PageFrame, siteHref } from '../ui.jsx';

function CompanyVisual({ company }) {
  if (company.logo && company.image && company.logo !== company.image) {
    return (
      <div className="portfolio-company-visual has-image">
        <img src={company.image} alt={company.name} />
        <div className="portfolio-company-logo-badge">
          <img src={company.logo} alt={`${company.name} logo`} />
        </div>
      </div>
    );
  }

  if (company.image) {
    const visualClass = company.visualStyle === 'logo' ? 'has-logo' : 'has-image';

    return (
      <div className={`portfolio-company-visual ${visualClass}`.trim()}>
        <img src={company.image} alt={company.name} />
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
  const hasExternalLink = Boolean(company.externalHref);

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
        {hasInternalProfile || hasExternalLink ? (
          <div className="portfolio-card-links">
            {hasInternalProfile ? (
              <a className="page-link" href={siteHref(company.href)}>
                View company profile
              </a>
            ) : null}
            {hasExternalLink ? (
              <a className="page-link" href={company.externalHref} target="_blank" rel="noreferrer">
                {company.externalLabel || 'Visit landing'}
              </a>
            ) : null}
          </div>
        ) : (
          <p className="portfolio-card-note">Selected portfolio company</p>
        )}
      </div>
    </article>
  );
}

function HeroCard({ company, size = 'small', onClick }) {
  return (
    <button
      type="button"
      className={`portfolio-prod-card portfolio-prod-card-${size}`.trim()}
      onClick={onClick}
      aria-label={`Show ${company.name}`}
    >
      <img src={company.cardImage || company.heroImage || company.image} alt={company.name} />
      <div className="portfolio-prod-card-overlay">
        <strong>{company.cardLabel || company.name}</strong>
        <span>{company.cardMeta || company.category}</span>
      </div>
    </button>
  );
}

export function PortfolioPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompany = COMPANIES[activeIndex];
  const orderedCompanies = [
    ...COMPANIES.slice(activeIndex),
    ...COMPANIES.slice(0, activeIndex),
  ];

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
          backgroundImage: `linear-gradient(90deg, rgba(10, 18, 15, 0.68) 0%, rgba(10, 18, 15, 0.54) 36%, rgba(10, 18, 15, 0.42) 60%, rgba(10, 18, 15, 0.68) 100%), url(${activeCompany.heroImage || activeCompany.image})`,
        }}
      >
        <div className="shell portfolio-hero-meta">
          <span>Babasu Ventures · Portfolio</span>
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
              <ButtonLink href={siteHref('contact/')} tone="secondary">
                Let&apos;s connect
              </ButtonLink>
            </div>
            <article className="portfolio-active-brief" data-accent={activeCompany.accent}>
              <div className="portfolio-active-topline">
                <span>Currently in focus</span>
                <span>{activeCompany.category}</span>
              </div>
              <div className="portfolio-active-headline">
                <strong>{activeCompany.name}</strong>
                <span>{activeCompany.region}</span>
              </div>
              <p>{activeCompany.summary}</p>
              {activeCompany.href ? (
                <a className="page-link" href={siteHref(activeCompany.href)}>
                  View company profile
                </a>
              ) : null}
            </article>
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
            <HeroCard company={orderedCompanies[0]} size="large" onClick={() => setActiveIndex(activeIndex)} />
            <HeroCard
              company={orderedCompanies[1]}
              size="medium"
              onClick={() => setActiveIndex((activeIndex + 1) % COMPANIES.length)}
            />
            <HeroCard
              company={orderedCompanies[2]}
              size="peek"
              onClick={() => setActiveIndex((activeIndex + 2) % COMPANIES.length)}
            />
          </div>
        </div>

        <div className="shell portfolio-hero-bottom">
          <div className="portfolio-hero-index">
            <span>Current focus</span>
            <strong>{String(activeIndex + 1).padStart(2, '0')} / {String(COMPANIES.length).padStart(2, '0')}</strong>
          </div>
          <div className="portfolio-hero-principles">
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
