import React from "react";

const Contact = () => {
  return (
    <>
      <div class="main-content">
        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="/" class="navbar-link " data-nav-link>
                About
              </a>
            </li>

            <li class="navbar-item">
              <a href="/resume" class="navbar-link" data-nav-link>
                Resume
              </a>
            </li>

            <li class="navbar-item">
              <a href="/portfolio" class="navbar-link" data-nav-link>
                Portfolio
              </a>
            </li>

            {/* <li class="navbar-item">
              <a href="/blog" class="navbar-link" data-nav-link>
                Blog
              </a>
            </li> */}

            <li class="navbar-item">
              <a href="/contact" class="navbar-link active" data-nav-link>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <article class="contact active" data-page="contact">
          <header>
            <h2 class="h2 article-title">Contact</h2>
          </header>

          <section class="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15851.47415584222!2d3.34896815!3d6.6632093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1704284998603!5m2!1sen!2sng"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>

          <section class="contact-form">
            <h3 class="h3 form-title">Contact Form</h3>

            <form action="#" class="form" data-form>
              <div class="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  class="form-input"
                  placeholder="Full name"
                  required
                  data-form-input
                />

                <input
                  type="email"
                  name="email"
                  class="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>

              <textarea
                name="message"
                class="form-input"
                placeholder="Your Message"
                required
                data-form-input
              ></textarea>

              <button class="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </>
  );
};

export default Contact;
