import { IMAGES, TEAM_LEADS, TEAM_MEMBERS } from '../site-data.js';
import { PageFrame, PageHero } from '../ui.jsx';

function TeamCard({ member }) {
  return (
    <article className="team-card team-profile-card">
      <figure>
        <img src={member.image} alt={member.name} />
        <figcaption>
          <h3>{member.name}</h3>
          <span className="team-role">{member.role}</span>
          {member.linkedIn ? (
            <a
              className="team-social-link"
              href={member.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn`}
            >
              <span className="team-social-icon" aria-hidden="true">
                in
              </span>
              <span>LinkedIn</span>
            </a>
          ) : null}
        </figcaption>
      </figure>
    </article>
  );
}

export function TeamPage() {
  return (
    <PageFrame pageKey="team">
      <PageHero
        image={IMAGES.partnersCasual}
        eyebrow="Team"
        title="Entrepreneurship is in our DNA."
        body="We back founders with the perspective of people who understand operators, markets and the long arc of building companies in Latin America."
        className="team-hero"
      />

      <section className="page-section">
        <div className="shell team-page-shell">
          <div className="team-page-heading">
            <p className="section-eyebrow">Our team</p>
            <h2>The people behind Babasu’s founder-first approach.</h2>
          </div>

          <div className="team-leads-grid">
            {TEAM_LEADS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          <div className="team-members-grid">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
