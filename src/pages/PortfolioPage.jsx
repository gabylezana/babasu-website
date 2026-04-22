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
        <p className="muted-copy">{company.summary}</p>
        <p className="portfolio-company-support">{company.support}</p>
        {company.href ? (
          <a className="page-link" href={siteHref(company.href)}>
            View company profile
          </a>
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
    <PageFrame pageKey="portfolio">
      <section
        className="portfolio-prod-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10, 18, 15, 0.68) 0%, rgba(10, 18, 15, 0.54) 36%, rgba(10, 18, 15, 0.42) 60%, rgba(10, 18, 15, 0.68) 100%), url(${activeCompany.heroImage || activeCompany.image})`,
        }}
      >
        <div className="shell portfolio-prod-grid">
          <div className="portfolio-prod-copy">
            <p className="section-eyebrow">Portfolio</p>
            <h1>
              Meet the
              <br />
              founders of
              <br />
              the present
            </h1>
            <ButtonLink href={siteHref('contact/')} tone="primary">
              Let&apos;s connect!
            </ButtonLink>
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
      </section>

      <section className="page-section section-muted" id="selected-companies">
        <div className="shell portfolio-companies-shell">
          <div className="portfolio-section-heading">
            <div>
              <p className="section-eyebrow">Selected companies</p>
              <h2>Every company here should carry equal portfolio weight.</h2>
            </div>
            <p className="muted-copy">
              The portfolio should read as a coherent set of founder bets, not as one hero
              company plus supporting names.
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
