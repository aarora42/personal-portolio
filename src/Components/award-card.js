import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

const AwardCard = ({ award }) => {
  return (
    <div className="project project-card">
      <a href={award.link} className="project-link">
        <div className="row">
          <div className="col-10">
            <h2>{award.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>{award.brief}</h4>
          </div>
        </div>
        {award.link && <div class="award-more">
            <AiOutlineArrowRight size={24}/>
            </div>}
      </a>
    </div>
  );
};

export default AwardCard;
