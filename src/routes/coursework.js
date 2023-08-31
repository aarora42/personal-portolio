import React, { useState, useEffect } from "react";
import Nav from "./nav";
import ProjectCard from "../Components/project-card";

const Coursework = () => {
  const [coursework, setCoursework] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch("../data/coursework.json")
      .then((response) => response.json())
      .then((data) => setCoursework(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container-fluid">
      <Nav />
      <div className="row align-items-center m-5">
        <div className="col-md-6 ">
        <img
            src="images/website-project.png"
            alt="Logo"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-6 text-center">
        <h1 className="text-right">Projects</h1>
          <h2>Academic and Personal Projects</h2>
          <p>
            My academic projects are a reflection of my learnings in various topics ranging from Business Management to Computer Science.
          </p>
        </div>
      </div>
      <div className="projects d-flex flex-wrap justify-content-between mt-5">
        {coursework.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coursework;
