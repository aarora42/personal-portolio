import React, { useState, useEffect } from "react";
import Nav from "./nav";
import EducationCard from "../Components/education-card";

const Education = () => {
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch("../data/degrees.json")
      .then((response) => response.json())
      .then((data) => setDegrees(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-fluid">
      <Nav />
      <div className="row align-items-center m-5">
        <div className="col-md-6 ">
        <img
            src="images/diploma-graphic.png"
            alt="Logo"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-6 text-center">
        <h1 className="text-right">Education</h1>
          <h2>Degrees and Relevant Coursework</h2>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        {degrees.map((degree, index) => (
          <EducationCard key={index} degree={degree} />
        ))}
      </div>
    </div>
  );
};

export default Education;
