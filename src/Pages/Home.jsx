import React from "react";

const Home = () => {
  return (
    <>
      <div class="main-content">
        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-item">
              <a href="/" class="navbar-link  active" data-nav-link>
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

        <article class="about  active" data-page="about">
          <header>
            <h2 class="h2 article-title">About Me</h2>
          </header>

          <section class="about-text">
            <p>
              Hi there! I'm Uwadiegwu Emmanuel, also known as Manuel, a
              passionate full-stack developer with a knack for creating
              innovative web and blockchain applications. With extensive
              experience in <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
              <strong>Solidity</strong>, and blockchain technologies like{" "}
              <strong>Arbitrum</strong>, I specialize in designing and deploying
              robust decentralized applications.
              <br />
              <br />
              Recently, I've worked on projects such as a{" "}
              <em>smart contract-based task escrow system</em> and a{" "}
              <em>decentralized identity verification solution</em>. I'm also
              skilled in backend API development with <strong>Node.js</strong>,
              bringing seamless integrations and dynamic functionalities to
              life.
            </p>
          </section>

          <section class="service">
            <h3 class="h3 service-title">What i'm doing</h3>

            <ul class="service-list">
              <li class="service-item">
                <div class="service-icon-box">
                  <img
                    src="./assets/images/icon-design.svg
          "
                    alt="design icon"
                    width="40"
                  />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Frontend development</h4>

                  <p class="service-item-text">
                  Professional-grade frontend development for high-quality web apps.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img
                    src="./assets/images/icon-design.svg
                  "
                    alt="design icon"
                    width="40"
                  />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Blockchain Development</h4>

                  <p class="service-item-text">
                    Web3 integration into applications making them decentralized
                  </p>
                </div>
              </li>
              <li class="service-item">
                <div class="service-icon-box">
                  <img
                    src="./assets/images/icon-dev.svg"
                    alt="Web development icon"
                    width="40"
                  />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Backend Development</h4>

                  <p class="service-item-text">
                  Robust and scalable backend development for seamless functionality.
                  </p>
                </div>
              </li>

              <li class="service-item">
                <div class="service-icon-box">
                  <img
                    src="./assets/images/icon-app.svg"
                    alt="mobile app icon"
                    width="40"
                  />
                </div>

                <div class="service-content-box">
                  <h4 class="h4 service-item-title">Mobile apps development</h4>

                  <p class="service-item-text">
                    Professional development of applications for iOS and
                    Android.
                  </p>
                </div>
              </li>

            
            </ul>
          </section>
        

          {/*  <section class="testimonials">
            <h3 class="h3 testimonials-title">Testimonials</h3>

            <ul class="testimonials-list has-scrollbar">
              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-1.png"
                      alt="Daniel lewis"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Daniel lewis
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>

              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-2.png"
                      alt="Jessica miller"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Jessica miller
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>

              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-3.png"
                      alt="Emily evans"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Emily evans
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>

              <li class="testimonials-item">
                <div class="content-card" data-testimonials-item>
                  <figure class="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-4.png"
                      alt="Henry william"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>

                  <h4
                    class="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Henry william
                  </h4>

                  <div class="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were
                      very pleased with the work done. She has a lot of
                      experience and is very concerned about the needs of
                      client. Lorem ipsum dolor sit amet, ullamcous cididt
                      consectetur adipiscing elit, seds do et eiusmod tempor
                      incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

           <div class="modal-container" data-modal-container>
            <div class="overlay" data-overlay></div>

            <section class="testimonials-modal">
              <button class="modal-close-btn" data-modal-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div class="modal-img-wrapper">
                <figure class="modal-avatar-box">
                  <img
                    src="./assets/images/avatar-1.png"
                    alt="Daniel lewis"
                    width="80"
                    data-modal-img
                  />
                </figure>

                <img src="./assets/images/icon-quote.svg" alt="quote icon" />
              </div>

              <div class="modal-content">
                <h4 class="h3 modal-title" data-modal-title>
                  Daniel lewis
                </h4>

                <time datetime="2021-06-14">14 June, 2021</time>

                <div data-modal-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </section>
          </div>
 */}
        </article>
      </div>
    </>
  );
};

export default Home;
