import React from "react";
import Nav from "./nav";
import {FaLinkedin} from "react-icons/fa"

const Contact = () => {
//   const [degrees, setDegrees] = useState([]);

//   useEffect(() => {
//     // Fetch the JSON data from the file
//     fetch("../data/degrees.json")
//       .then((response) => response.json())
//       .then((data) => setDegrees(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

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
        <h1 className="text-right">Contact</h1>
          <h2>Email me with any inquiries</h2>
        </div>
      </div>
      <section className="contact" id="contact">
      <h2>Get In Touch With Me</h2>
      <div className="contact-form-container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mvojaeeo" method="POST">
            <div className="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                className="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              id="submit-btn"
              className="submit-btn"
            />
          </form>
          <div className="socials">
      <a href="https://www.linkedin.com/in/anusha-arora/" target="_blank">
   <FaLinkedin className="socicon"/>
   </a>
      </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
