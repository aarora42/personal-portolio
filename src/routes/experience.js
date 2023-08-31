import React, { useState, useEffect } from "react";
import Nav from "./nav";
import Accordion from "../Components/accordian";
import AwardCard from "../Components/award-card";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [leadership, setLeadership] = useState([]);
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch("../data/experiences.json") // Make sure to update the data source
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error fetching data:", error));
    fetch("../data/leadership.json") // Make sure to update the data source
      .then((response) => response.json())
      .then((data) => setLeadership(data))
      .catch((error) => console.error("Error fetching data:", error));
    fetch("../data/awards.json") // Make sure to update the data source
      .then((response) => response.json())
      .then((data) => setAwards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-fluid">
      <Nav />
      <div className="row align-items-center m-5">
        <div className="col-md-6">
          <img
            src="images/job-graphic.png"
            alt="Logo"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-6 text-center">
          <h1 className="text-right">Experience</h1>
          <h2>Internships, Extracurriculars, and Awards</h2>
        </div>
      </div>
      <div className="accordion align-items-center">
        <h2>Internships</h2>
        {experiences.map((job, index) => (
          <Accordion key={index} job={job} />
        ))}
      </div>
      <div className="accordion align-items-center">
        <h2>Leadership</h2>
        {leadership.map((job, index) => (
          <Accordion key={index} job={job} />
        ))}
      </div>
      <div className="accordion align-items-center awards">
        <h2>Awards</h2>
        <div className="row justify-content-center">
          {awards.map((award, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <AwardCard award={award} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
