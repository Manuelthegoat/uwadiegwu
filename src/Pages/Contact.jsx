import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_skiz1ej", // EmailJS service ID
        "template_hufqcnd", // EmailJS template ID
        {
          fullname: formData.fullname,
          email: formData.email,
          message: formData.message
        },
        "gEloG2FPZ44AIqbO5" // EmailJS user ID
      )
      .then(
        (response) => {
          setIsSubmitted(true);
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          setError(true)
          console.error("Failed to send email:", err);
        }
      );
  };

  return (
    <>
      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="/" className="navbar-link" data-nav-link>
                About
              </a>
            </li>

            <li className="navbar-item">
              <a href="/resume" className="navbar-link" data-nav-link>
                Resume
              </a>
            </li>

            <li className="navbar-item">
              <a href="/portfolio" className="navbar-link" data-nav-link>
                Portfolio
              </a>
            </li>

            {/* <li className="navbar-item">
              <a href="/blog" className="navbar-link" data-nav-link>
                Blog
              </a>
            </li> */}

            <li className="navbar-item">
              <a href="/contact" className="navbar-link active" data-nav-link>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <article className="contact active" data-page="contact">
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>

          <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15851.47415584222!2d3.34896815!3d6.6632093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1704284998603!5m2!1sen!2sng"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>

          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>

            <form onSubmit={sendEmail} className="form" data-form>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                  data-form-input
                />

                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-form-input
                />
              </div>

              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                data-form-input
              ></textarea>

              <button className="form-btn" type="submit" data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </form>

            {isSubmitted && (
              <p className="success-message">Your message has been sent!</p>
            )}
            {error && (
              <p className="error-message">oops... something went wrong</p>
            )}
          </section>
        </article>
      </div>
    </>
  );
};

export default Contact;
