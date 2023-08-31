import React from "react";
import Nav from "./nav";

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
          <p>Please feel free to reach out with any inquiries regarding my experience or projects.</p>
        </div>
      </div>
      <section class="contact" id="contact">
      <h2>Get In Touch With Me</h2>
      <div class="contact-form-container">
        <div class="contact-form">
          <form action="https://formspree.io/f/mvojaeeo" method="POST">
            <div class="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                class="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              id="submit-btn"
              class="submit-btn"
            />
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
