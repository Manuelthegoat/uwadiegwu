import React from 'react'

const Resume = () => {
  return (
    <>
    <div class="main-content">
    <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <a href="/" class="navbar-link" data-nav-link>
          About
        </a>
      </li>

      <li class="navbar-item">
        <a href="/resume" class="navbar-link  active" data-nav-link>
          Resume
        </a>
      </li>

      <li class="navbar-item">
        <a href="/portfolio" class="navbar-link" data-nav-link>
          Portfolio
        </a>
      </li>
{/* 
      <li class="navbar-item">
        <a href="/blog" class="navbar-link" data-nav-link>
          Blog
        </a>
      </li> */}

      <li class="navbar-item">
        <a href="/contact" class="navbar-link" data-nav-link>
          Contact
        </a>
      </li>
    </ul>
  </nav>

   

    <article class="resume active" >
      <header>
        <h2 class="h2 article-title">Resume</h2>
      </header>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Education</h3>
        </div>

        <ol class="timeline-list">
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Aptech Computer Education
            </h4>

            <span>2020 — 2022</span>

            <p class="timeline-text">
            Diploma in information Systems Management (DISM)
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              Youtube X Udemy
            </h4>

            <span>2022 — date</span>

            <p class="timeline-text">
              different programming tutors on youtube and udemy
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              University Of Nigeria, Nsukka
            </h4>

            <span>2022 — date (expected to graduate in 2026)</span>

            <p class="timeline-text">
              Computer Science Major (4.0 cgpa)
            </p>
          </li>
        </ol>
      </section>

      <section class="timeline">
        <div class="title-wrapper">
          <div class="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 class="h3">Experience</h3>
        </div>

        <ol class="timeline-list">
          
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Frontend engineer</h4>

            <span>2020 — 2023</span>

            <p class="timeline-text">
              Techmint Africa
            </p>
          </li>
          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Fullstack Developer</h4>

            <span>2022 — 2023</span>

            <p class="timeline-text">
              Codefunky Worldwide
            </p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Web Development</h5>
              <data value="80">80%</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{ width: "80%" }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Mobile App Development </h5>
              <data value="75">75%</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{ width: "75%" }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Backend Development</h5>
              <data value="50">50%</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{ width: "50%" }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Firebase As a backend service</h5>
              <data value="60">60%</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{ width: "60%" }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>

   
  </div>
    </>
  )
}

export default Resume