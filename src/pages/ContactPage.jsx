import { useState } from 'react';
import { IMAGES, SITE } from '../site-data.js';
import { PageFrame, PageHero } from '../ui.jsx';

const contactTracks = [
  { value: 'entrepreneurs', label: 'For Entrepreneurs' },
  { value: 'general', label: 'General Inquiry' },
];

const founderRoles = ['CEO', 'CFO', 'CTO', 'CMO', 'Business Development', 'Other'];
const inquiryTypes = ['Investment', 'Career Opportunities', 'PR & Media', 'General Inquiry'];

const initialFormState = {
  track: 'entrepreneurs',
  name: '',
  email: '',
  company: '',
  companyDescription: '',
  website: '',
  deckUrl: '',
  hq: '',
  industry: '',
  investmentRound: '',
  roundSize: '',
  monthlyRevenue: '',
  genderLens: '',
  founderRole: 'CEO',
  message: '',
  inquiryType: 'Investment',
};

function buildMailtoBody(values) {
  const lines = [
    `Contact track: ${values.track}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Type of inquiry: ${values.inquiryType}`,
  ];

  if (values.track === 'entrepreneurs') {
    lines.push(
      `Company: ${values.company}`,
      `Short description: ${values.companyDescription}`,
      `Website: ${values.website}`,
      `Deck URL: ${values.deckUrl}`,
      `HQ: ${values.hq}`,
      `Industry: ${values.industry}`,
      `Round of investment: ${values.investmentRound}`,
      `Financing round size: ${values.roundSize}`,
      `Monthly revenue: ${values.monthlyRevenue}`,
      `Female founder or gender lens: ${values.genderLens}`,
      `Role in startup: ${values.founderRole}`
    );
  }

  lines.push('', 'Message:', values.message);
  return lines.join('\n');
}

function FounderForm() {
  const [formState, setFormState] = useState(initialFormState);

  function setField(field, value) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`Babasu website inquiry · ${formState.inquiryType}`);
    const body = encodeURIComponent(buildMailtoBody(formState));
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  const isEntrepreneurTrack = formState.track === 'entrepreneurs';

  return (
    <form className="contact-form-panel" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field form-field-full">
          <span className="form-label">Contact track</span>
          <select
            className="form-control form-select"
            value={formState.track}
            onChange={(event) => setField('track', event.target.value)}
          >
            {contactTracks.map((track) => (
              <option key={track.value} value={track.value}>
                {track.label}
              </option>
            ))}
          </select>
        </label>

        <label className="form-field">
          <span className="form-label">Your name</span>
          <input
            className="form-control"
            type="text"
            value={formState.name}
            onChange={(event) => setField('name', event.target.value)}
            required
          />
        </label>

        <label className="form-field">
          <span className="form-label">Your email</span>
          <input
            className="form-control"
            type="email"
            value={formState.email}
            onChange={(event) => setField('email', event.target.value)}
            required
          />
        </label>

        {isEntrepreneurTrack ? (
          <>
            <label className="form-field form-field-full">
              <span className="form-label">Your company</span>
              <input
                className="form-control"
                type="text"
                value={formState.company}
                onChange={(event) => setField('company', event.target.value)}
              />
            </label>

            <label className="form-field form-field-full">
              <span className="form-label">Short description of your company</span>
              <textarea
                className="form-control form-textarea form-textarea-sm"
                value={formState.companyDescription}
                onChange={(event) => setField('companyDescription', event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-label">Website</span>
              <input
                className="form-control"
                type="url"
                value={formState.website}
                onChange={(event) => setField('website', event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-label">URL link to deck</span>
              <input
                className="form-control"
                type="url"
                value={formState.deckUrl}
                onChange={(event) => setField('deckUrl', event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-label">HQ</span>
              <input
                className="form-control"
                type="text"
                value={formState.hq}
                onChange={(event) => setField('hq', event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-label">Industry</span>
              <input
                className="form-control"
                type="text"
                value={formState.industry}
                onChange={(event) => setField('industry', event.target.value)}
              />
            </label>

            <label className="form-field form-field-full">
              <span className="form-label">Round of investment</span>
              <input
                className="form-control"
                type="text"
                value={formState.investmentRound}
                onChange={(event) => setField('investmentRound', event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-label">Financing round size ($)</span>
              <input
                className="form-control"
                type="text"
                value={formState.roundSize}
                onChange={(event) => setField('roundSize', event.target.value)}
              />
            </label>

            <label className="form-field">
              <span className="form-label">Monthly revenue ($)</span>
              <input
                className="form-control"
                type="text"
                value={formState.monthlyRevenue}
                onChange={(event) => setField('monthlyRevenue', event.target.value)}
              />
            </label>

            <label className="form-field form-field-full">
              <span className="form-label">Female founder or gender lens?</span>
              <input
                className="form-control"
                type="text"
                value={formState.genderLens}
                onChange={(event) => setField('genderLens', event.target.value)}
              />
            </label>

            <fieldset className="form-field form-field-full form-box">
              <legend className="form-legend">
                What is your role in your startup? <span className="required-mark">*</span>
              </legend>
              <div className="radio-list">
                {founderRoles.map((role) => (
                  <label key={role} className="radio-item">
                    <input
                      type="radio"
                      name="founderRole"
                      checked={formState.founderRole === role}
                      onChange={() => setField('founderRole', role)}
                    />
                    <span>{role}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </>
        ) : null}

        <label className="form-field form-field-full">
          <span className="form-label">Message</span>
          <textarea
            className="form-control form-textarea"
            value={formState.message}
            onChange={(event) => setField('message', event.target.value)}
            required
          />
        </label>

        <fieldset className="form-field form-field-full form-box">
          <legend className="form-legend">
            Type of inquiry <span className="required-mark">*</span>
          </legend>
          <div className="radio-list">
            {inquiryTypes.map((item) => (
              <label key={item} className="radio-item">
                <input
                  type="radio"
                  name="inquiryType"
                  checked={formState.inquiryType === item}
                  onChange={() => setField('inquiryType', item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="form-submit-row">
        <p className="form-note">Submitting opens your default email client with the information pre-filled.</p>
        <button className="form-submit" type="submit">
          Send
        </button>
      </div>
    </form>
  );
}

export function ContactPage() {
  return (
    <PageFrame pageKey="contact">
      <PageHero
        image={IMAGES.tucavaca}
        eyebrow="Contact"
        title="Get in touch."
        body="We invest in entrepreneurs building technology-enabled companies across Latin America. Tell us what you are building and why now is the right moment."
        compact
      />

      <section className="page-section">
        <div className="shell contact-page-grid">
          <div className="contact-page-intro">
            <p className="section-eyebrow">Contact</p>
            <h2>Share enough context for a productive first conversation.</h2>
            <p className="muted-copy">
              We want to hear from founders, collaborators and anyone reaching out with a
              serious reason to connect to Babasu.
            </p>
            <p className="muted-copy">
              The most useful messages are concise and specific: what you are building or asking
              about, why it matters, where it fits and what kind of conversation you want to have.
            </p>
            <div className="contact-info-stack">
              <div className="contact-card">
                <h3>Direct email</h3>
                <a className="footer-mail" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <p className="muted-copy">For general inquiries, co-investment notes, press or introductions.</p>
              </div>
              <div className="contact-card">
                <h3>What we look for</h3>
                <p className="muted-copy">
                  Ambitious founders, strong operating insight, real market pain and the potential
                  to build durable companies across the region.
                </p>
              </div>
            </div>
          </div>

          <FounderForm />
        </div>
      </section>
    </PageFrame>
  );
}
