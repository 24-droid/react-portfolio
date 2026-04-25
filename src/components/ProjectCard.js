import { Col } from "react-bootstrap";
import React from "react";

const ProjectCard = ({ title, description, imgUrl, projectUrl, tags = [] }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {projectUrl ? (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
          <div className="proj-imgbx">
            <img src={imgUrl} alt={`${title} thumbnail`} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              {tags.length > 0 && (
                <div className="proj-tags">
                  {tags.map((tag, i) => (
                    <span key={i} className="proj-tag">{tag}</span>
                  ))}
                </div>
              )}
              <div className="proj-cta">↗ View Project</div>
            </div>
          </div>
        </a>
      ) : (
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`${title} thumbnail`} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
            {tags.length > 0 && (
              <div className="proj-tags">
                {tags.map((tag, i) => (
                  <span key={i} className="proj-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Col>
  );
};

export default ProjectCard;
