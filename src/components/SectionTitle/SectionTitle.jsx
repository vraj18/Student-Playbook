import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2 className="title">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <div className="title-decoration">
        <span className="decoration-line"></span>
        <span className="decoration-dot"></span>
        <span className="decoration-line"></span>
      </div>
    </div>
  );
};

export default SectionTitle;