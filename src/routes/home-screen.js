import { Button } from "react-bootstrap";
import Nav from "./nav";

const HomeScreen = () => {
  return (
    <div className="container-fluid home ">
      <Nav />
      <div className="row align-items-center m-5">
        <div className="col-md-6 ">
          <h1>Hi, I'm Anusha!</h1>
          <p>
            I'm a graduate in Computer Science and Business Administration with
            a concentration in Marketing and a minor in Psychology. Eager to
            continually learn, I'm drawn to roles that involve diverse
            industries and collaborative problem-solving. My interdisciplinary
            education and prior experience reflect my commitment to merging
            technical knowledge with business insight to solve complex
            challenges.
          </p>
          {/* <p>
            I love to travel and learn new languages! Check out my travels here!
          </p> */}
          <Button href="https://drive.google.com/file/d/12uYpg794Q4ViSS2YU2LqG4V17ypxx6V0/view?usp=sharing" className="primary">View My Resume</Button>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="images/hs-graphic.png"
            alt="Logo"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
