import React from 'react';

export default function Projects() {
  const images = [
    { src: '/text_image/buildarchitect.PNG', alt: 'Build Architect', caption: 'Concept & architect sketch', description: 'Early concept sketches showing massing, circulation and site layout for the proposed development.' },
    { src: '/text_image/Plan details.PNG', alt: 'Plan Details', caption: 'Plan and details', description: 'Detailed floor plans and annotations highlighting room dimensions, structural notes and material callouts.' },
    { src: '/text_image/structure_of_civil.jpeg', alt: 'Structure of Civil', caption: 'Structural overview', description: 'Structural diagrams illustrating beam and column placement, load paths and foundation considerations.' },
    { src: '/text_image/arch1.jpg', alt: 'Interior Design', caption: 'Interior layout', description: 'Interior renderings showcasing spatial flow, furniture placement, and lighting strategy.' },
{ src: '/text_image/3D_model_structure.jpeg', alt: 'Landscape Plan', caption: '3D structural model', description: '3D structural visualization showing building layout, framework, and spatial arrangement.' },
{ src: '/text_image/swe1.jpg', alt: '3D Model', caption: 'Programming', description: 'Code development and logic implementation in a software environment.' },
  ];
  

  return (
    <section className="container projects-page">
      <h2>Projects</h2>
      <p className="lead">Representative project images and notes from our recent designs.</p>

      <div className="projects-grid">
        {images.map((img) => (
          <figure key={img.src} className="project-item">
            <img src={img.src} alt={img.alt} />
            <figcaption>
              <strong>{img.caption}</strong>
              <p className="project-desc">{img.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="projects-conclusion">
        <h3>Conclusion</h3>
        <p className="muted">These visuals show our workflow: concept, detailed planning, and structural design — core strengths of TechBuild Group.</p>
      </div>
    </section>
  );
}
