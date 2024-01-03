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

      <li class="navbar-item">
        <a href="/blog" class="navbar-link" data-nav-link>
          Blog
        </a>
      </li>

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
              University school of the arts
            </h4>

            <span>2007 — 2008</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias
              exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              New york academy of art
            </h4>

            <span>2006 — 2007</span>

            <p class="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere
              menda ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">
              High school of art and design
            </h4>

            <span>2002 — 2004</span>

            <p class="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores
              eos.
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
            <h4 class="h4 timeline-item-title">Creative director</h4>

            <span>2015 — Present</span>

            <p class="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et qvuas molestias
              exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Art director</h4>

            <span>2013 — 2015</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias
              exceptur.
            </p>
          </li>

          <li class="timeline-item">
            <h4 class="h4 timeline-item-title">Web designer</h4>

            <span>2010 — 2013</span>

            <p class="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias
              exceptur.
            </p>
          </li>
        </ol>
      </section>

      <section class="skill">
        <h3 class="h3 skills-title">My skills</h3>

        <ul class="skills-list content-card">
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Web design</h5>
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
              <h5 class="h5">Graphic design</h5>
              <data value="70">70%</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{ width: "70%" }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">Branding</h5>
              <data value="90">90%</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{ width: "90%" }}
              ></div>
            </div>
          </li>

          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">WordPress</h5>
              <data value="50">50%</data>
            </div>

            <div class="skill-progress-bg">
              <div
                class="skill-progress-fill"
                style={{ width: "50%" }}
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