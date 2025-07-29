// src/components/ExperienceCard.js

import React from 'react';

const ExperienceCard = ({ title, company, date, imageUrl, descriptionPoints, featuredProject }) => {
  return (
    <div className="experience-card h-100">
      {/* The className is now dynamic based on whether an image exists */}
      <div className={`experience-content ${!imageUrl ? 'no-image' : ''}`}>
        
        {/* --- THIS IS THE CHANGE --- */}
        {/* The image will only render if imageUrl is provided */}
        {imageUrl && (
          <div className="experience-image">
            <img src={imageUrl} alt={`${company} logo`} />
          </div>
        )}

        <div className="experience-details">
          <h4>{title}</h4>
          <h5>{company}</h5>
          <p className="experience-date">{date}</p>
          <ul>
            {descriptionPoints.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;