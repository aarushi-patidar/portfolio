import React from 'react';
import { portfolioConfig } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="portfolio-section wall-section">
      <div className="feature-content">
        <header className="feature-heading">
          <h2 className="section-title">Education</h2>
          <p>Academic background and current studies.</p>
        </header>

        <div className="profile-details-grid education-grid">
          {portfolioConfig.education.map((item) => (
            <article className="profile-detail-card" key={item.id}>
              <p className="section-kicker">{item.period}</p>
              <h3>{item.institution}</h3>
              <p>{item.qualification}</p>
              <div className="profile-detail-meta">
                <span>{item.field}</span>
                <strong>{item.grade}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CertificatesSection() {
  return (
    <section id="certificates" className="portfolio-section wall-section">
      <div className="feature-content">
        <header className="feature-heading">
          <h2 className="section-title">Certificates</h2>
          <p>Credentials and certifications.</p>
        </header>

        {portfolioConfig.certificates.length > 0 ? (
          <div className="profile-details-grid certificate-grid">
            {portfolioConfig.certificates.map((certificate) => (
              <article className="profile-detail-card" key={certificate.id}>
                <p className="section-kicker">{certificate.issuer}</p>
                <h3>{certificate.name}</h3>
                <div className="profile-detail-meta">
                  <span>{certificate.date}</span>
                  {certificate.url && (
                    <a href={certificate.url} target="_blank" rel="noreferrer">
                      Verify credential
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="certificate-empty-state">
            No certificate details have been provided yet.
          </p>
        )}
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section wall-section">
      <div className="feature-content">
        <header className="feature-heading">
          <h2 className="section-title">Skills</h2>
          <p>Product, growth, research, and web development.</p>
        </header>

        <div className="profile-details-grid skills-grid">
          {portfolioConfig.skills.map((group) => (
            <article className="profile-detail-card skill-card" key={group.id}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
