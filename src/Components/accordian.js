import React, { useState } from 'react';

const Accordion = ({ job }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
      <div>{job.company}</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content">
        <div className="job-title">
         
                <h3>
                    {job.title}
                </h3>
           
            <div>
               {job.duration}
            </div>
        </div>
    <ul>
       {job.skills.map((skill, index) => (
       <li>{skill}</li>
    ))}</ul></div>}
  </div>
  );
};

export default Accordion;