import { Col } from "react-bootstrap";
import React from "react";

// const ProjectCard = ({ title, description, imgUrl,projectUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//       <a href={projectUrl} target="_blank" rel="noopener noreferrer">Project_Link</a>
//         <img src={imgUrl} alt={`${title} thumbnail`} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   );
// };
const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {projectUrl ? (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
          <div className="proj-imgbx">
            <img src={imgUrl} alt={`${title} thumbnail`} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </a>
      ) : (
        <div className="proj-imgbx">
          <img src={imgUrl} alt={`${title} thumbnail`} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      )}
    </Col>
  );
};



export default ProjectCard;

