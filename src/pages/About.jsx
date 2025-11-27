import React from "react";

export default function About() {
  return (
    <>
      {/* Cover image */}
      <div className="about-cover"></div>

      <section className="about container fade-in">
        {/* INTRO */}
        <h2 className="section-title">⭐ About Us — TechBuild Group</h2>

        <p className="about-intro">
          TechBuild Group is a multidisciplinary team of professionals formed by
          two architects, two civil engineers, and two IT engineers. Our unique
          blend of construction expertise and modern technology allows us to
          deliver high-quality buildings and innovative digital systems.
        </p>

        <p className="about-intro">
          We were founded with one goal: to design and build homes that perfectly
          suit our clients, while also creating smart digital solutions that help
          businesses grow.
        </p>

        <p className="about-intro">
          Whether we're constructing a home, designing a structural project, or
          developing custom software, our team brings precision, creativity, and
          passion to every job.
        </p>

        {/* SERVICES SECTION */}
        <h3 className="section-subtitle">⭐ What We Can Help You With</h3>

        <div className="services-grid">
          {/* Construction Services */}
          <div className="service-card">
            <h4>🏗 Construction & Engineering</h4>
            <ul>
              <li>Residential home construction</li>
              <li>Architectural design and planning</li>
              <li>Structural engineering</li>
              <li>Renovations and alterations</li>
              <li>Project management</li>
              <li>Landscaping & site development</li>
              <li>Commercial structures</li>
              <li>3D design & building visualization</li>
            </ul>
          </div>

          {/* Architecture Services */}
          <div className="service-card">
            <h4>🏛 Architecture</h4>
            <ul>
              <li>Concept design & sketches</li>
              <li>Detailed floor plans</li>
              <li>Interior design</li>
              <li>Landscape planning</li>
              <li>Building visualization</li>
              <li>Collaboration with subcontractors</li>
            </ul>
          </div>

          {/* Technology Services */}
          <div className="service-card">
            <h4>💻 Technology & Software Development</h4>
            <ul>
              <li>Custom software development</li>
              <li>Web & mobile applications</li>
              <li>Business management systems</li>
              <li>IT consultation</li>
              <li>System automation</li>
              <li>UI/UX design</li>
              <li>Website development</li>
              <li>Digital solutions for construction companies</li>
            </ul>
          </div>
        </div>

        {/* MODEL SECTION */}
        <h3 className="section-subtitle">⭐ Our Model</h3>
        <div className="info-block">
          <p>
            At TechBuild Group, we work with you from the very beginning—whether
            you’re starting with a blank idea for a home or need a complete
            digital system for your company. Our architects and engineers ensure
            solid planning and construction, while our IT experts build efficient
            software tailored to your business needs.
          </p>
          <p>
            We also collaborate with trusted subcontractors—electricians,
            plumbers, painters, interior designers, and software testers—to
            deliver every project smoothly, on time, and within budget.
          </p>
        </div>

        {/* PRICING SECTION */}
        <h3 className="section-subtitle">⭐ Our Pricing</h3>
        <div className="simple-card">
          <ul>
            <li>Affordable and fair pricing</li>
            <li>No unnecessary middlemen or franchise fees</li>
            <li>Direct communication with experts</li>
            <li>Top-level service at a reasonable cost</li>
          </ul>
        </div>

        {/* WHY CHOOSE US */}
        <h3 className="section-subtitle">⭐ Why Choose TechBuild Group?</h3>
        <div className="simple-card">
          <ul className="check-list">
            <li>Hybrid company — construction + technology</li>
            <li>Expertise in architecture, engineering & IT</li>
            <li>We design and build according to your vision</li>
            <li>Fixed-price contracts</li>
            <li>Free consultations & quotes</li>
            <li>Proof of previous successful projects</li>
            <li>We don’t stop until you’re satisfied</li>
            <li>Both home design & digital systems under one company</li>
          </ul>
        </div>

        {/* Closing */}
        <p className="closing-text">
          At TechBuild Group, your dream home and digital transformation are in safe hands.
        </p>
      </section>
    </>
  );
}