import React from "react";

const EducationCard = ({ degree }) => {
  return (
    <div className="education">
      <div className="row">
        <div className="col">
          <h4>{degree.university}</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <h2>{degree.name}</h2>
        </div>
        <div className="col-2 text-right">{degree.duration}</div>
      </div>
      {degree.minor && (
        <div className="row">
          <div className="col">
            <h5>Minor: {degree.minor}</h5>
            <h5>Concentration: {degree.concentration}</h5>
          </div>
        
        </div>
      )}
    
      <div className="row">
        <div className="col">
          <p><b>Relevant Coursework:</b></p>
          <ul className="column-list">
            {degree.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
