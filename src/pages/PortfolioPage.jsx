import { useEffect, useState } from 'react';
import { COMPANIES, IMAGES } from '../site-data.js';
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

function PortfolioCompanyCard({ company, featured = false }) {
  return (
    <article
      className={`portfolio-company-card ${featured ? 'portfolio-company-card-featured' : ''}`.trim()}
      data-accent={company.accent}
    >
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
  const [featuredCompany, ...otherCompanies] = COMPANIES;
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
              size="small"
              onClick={() => setActiveIndex((activeIndex + 2) % COMPANIES.length)}
            />
            {orderedCompanies[3] ? (
              <HeroCard
                company={orderedCompanies[3]}
                size="peek"
                onClick={() => setActiveIndex((activeIndex + 3) % COMPANIES.length)}
              />
            ) : null}
          </div>
        </div>
      </section>

      <section className="page-section section-muted" id="selected-companies">
        <div className="shell portfolio-companies-shell">
          <div className="portfolio-section-heading">
            <div>
              <p className="section-eyebrow">Selected companies</p>
              <h2>A portfolio designed to show taste, not just logos.</h2>
            </div>
            <p className="muted-copy">
              Each company here signals something about how we invest: operator empathy,
              practical utility and the belief that Latin American markets reward products
              with durable everyday value.
            </p>
          </div>

          <div className="portfolio-company-grid">
            <PortfolioCompanyCard company={featuredCompany} featured />
            {otherCompanies.map((company) => (
              <PortfolioCompanyCard key={company.name} company={company} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section portfolio-founder-section">
        <div className="shell portfolio-founder-grid">
          <div className="portfolio-founder-photo">
            <img src={IMAGES.tugerenteFounder} alt="Freddy Arredondo from tuGerente" />
          </div>

          <div className="portfolio-founder-copy">
            <p className="section-eyebrow">Founder spotlight</p>
            <h2>tuGerente is the clearest example of the kind of company-founder fit we want this page to communicate.</h2>
            <p className="muted-copy">
              A strong portfolio story is not only about market size. It is about a founder
              close to the operating pain, a product that earns its place in daily workflows
              and a business that can matter across multiple markets in the region.
            </p>
            <div className="detail-list">
              <div className="detail-item">
                <p className="meta-label">Founder</p>
                <p className="meta-value">{featuredCompany.founder}</p>
              </div>
              <div className="detail-item">
                <p className="meta-label">Current footprint</p>
                <p className="meta-value">{featuredCompany.region}</p>
              </div>
            </div>
            <ButtonLink href={siteHref('portfolio/tugerente/')} tone="ghost">
              View the case study
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
