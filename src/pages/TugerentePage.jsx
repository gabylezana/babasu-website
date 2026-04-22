import { IMAGES, TUGERENTE_FACTS, TUGERENTE_HIGHLIGHTS } from '../site-data.js';
import { ButtonLink, PageFrame, siteHref } from '../ui.jsx';

export function TugerentePage() {
  return (
    <PageFrame pageKey="portfolio">
      <section className="tugerente-stage">
        <div className="shell tugerente-stage-grid">
          <div className="tugerente-stage-copy">
            <p className="section-eyebrow">Portfolio / tuGerente</p>
            <h1>Administrative software built for SMEs that need more control, not more complexity.</h1>
            <p className="hero-body">
              tuGerente reflects the kind of company Babasu wants its portfolio to be known
              for: practical software, real operating value and a product that can matter
              every single day inside the business.
            </p>
            <div className="hero-actions">
              <a
                className="button-link button-primary"
                href="https://www.tugerente.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit company
              </a>
              <ButtonLink href={siteHref('portfolio/')} tone="ghost">
                Back to portfolio
              </ButtonLink>
            </div>
          </div>

          <div className="tugerente-stage-panel">
            <div className="tugerente-wordmark-card">
              <span className="tugerente-wordmark-note">Featured company</span>
              <strong>tuGerente</strong>
              <p>Software that helps SMEs organize finance, inventory and day-to-day execution.</p>
            </div>
            <div className="tugerente-stage-media">
              <img src={IMAGES.tugerenteStage} alt="tuGerente on stage" />
            </div>
          </div>
        </div>

        <div className="shell tugerente-facts-grid">
          {TUGERENTE_FACTS.map((fact) => (
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
            <h2>Software for the operating reality of Latin American SMEs.</h2>
            <p className="muted-copy">
              tuGerente is the kind of product that earns its place by helping businesses run
              with more clarity. It is not reporting theater. It is software tied to finance,
              inventory and the decisions operators need to make every day.
            </p>
            <p className="muted-copy">
              That matters because SMEs across the region still deal with fragmented systems,
              inconsistent processes and weak visibility over what is actually happening inside
              the business. Products that remove that friction create immediate value.
            </p>
          </div>

          <div className="tugerente-founder-card">
            <img src={IMAGES.tugerenteFounder} alt="Freddy Arredondo from tuGerente" />
            <div>
              <p className="meta-label">Founder spotlight</p>
              <h3>Freddy Arredondo</h3>
              <p className="muted-copy">
                For Babasu, this is the profile worth highlighting on a portfolio page:
                close to the problem, credible in execution and building a product with
                obvious day-to-day usefulness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-muted">
        <div className="shell">
          <div className="portfolio-section-heading">
            <div>
              <p className="section-eyebrow">Why it matters</p>
              <h2>A useful company profile should explain why this investment belongs in the portfolio.</h2>
            </div>
            <p className="muted-copy">
              The strongest signal here is not novelty. It is relevance: software that becomes
              part of how a company operates, with a use case that can scale across multiple
              Latin American markets.
            </p>
          </div>

          <div className="tugerente-highlights-grid">
            {TUGERENTE_HIGHLIGHTS.map((item) => (
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
            <img src={IMAGES.tugerenteStage} alt="tuGerente event presentation" />
          </div>
          <div className="content-block">
            <p className="section-eyebrow">Babasu lens</p>
            <h2>We want this page to make clear what kind of businesses we are proud to back.</h2>
            <p className="muted-copy">
              tuGerente helps frame the portfolio in the right way: operator-led, useful,
              regionally relevant and anchored in concrete business outcomes rather than broad
              abstract narratives.
            </p>
            <p className="muted-copy">
              That is the standard the rest of the portfolio should meet as the page grows.
            </p>
            <ButtonLink href={siteHref('contact/')} tone="ghost">
              Get in touch with Babasu
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
