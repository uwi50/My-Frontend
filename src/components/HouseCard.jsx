import React from 'react';

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export default function HouseCard({ house }) {
  return (
    <article className="house-card" tabIndex={0} aria-labelledby={`house-${house.id}-title`}>
      <div className="house-image" aria-hidden>
        <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 12 L8 32 H18 V52 H28 V38 H36 V52 H46 V32 H56 Z" fill="#ffffff22" stroke="#fff" strokeWidth="1" />
        </svg>
      </div>

      <div className="house-body">
        <h3 id={`house-${house.id}-title`} className="house-title">{house.title}</h3>
        <div className="house-meta">{house.location}</div>
        <p className="house-desc">{house.description}</p>

        {house.tags && house.tags.length > 0 && (
          <div className="house-tags">
            {house.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}

        <div className="house-actions">
          <button className="btn">View Project</button>
        </div>
      </div>
    </article>
  );
}
