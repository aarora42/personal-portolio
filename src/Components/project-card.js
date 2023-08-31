import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"


const ProjectCard = ({ project }) => {
  return (
    <div className="project project-card">
      <a href={project.link} className="project-link">
        <div className="row">
          <div className="col-10">
            <h2>{project.name}</h2>
          </div>
        </div>
        {/* {degree.minor && (
        <div className="row">
          <div className="col">
            <h5>Minor: {degree.minor}</h5>
            <h5>Concentration: {degree.concentration}</h5>
          </div>
        
        </div>
      )} */}
        <div className="row">
          <div className="col">
            <h4>{project.brief}</h4>
          </div>
        </div>
        {project.link && <div class="award-more">
            <AiOutlineArrowRight size={24}/>
            </div>}
      </a>
    </div>
  );
};

export default ProjectCard;
