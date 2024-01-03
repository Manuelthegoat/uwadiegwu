import React from 'react'

const Portfolio = () => {
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
        <a href="/resume" class="navbar-link" data-nav-link>
          Resume
        </a>
      </li>

      <li class="navbar-item">
        <a href="/portfolio" class="navbar-link active" data-nav-link>
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

    

    

    <article class="portfolio active" >
      <header>
        <h2 class="h2 article-title">Portfolio</h2>
      </header>

      <section class="projects">
        <ul class="filter-list">
          <li class="filter-item">
            <button class="active" data-filter-btn>
              All
            </button>
          </li>

         
        </ul>

        <div class="filter-select-box">
          <button class="filter-select" data-select>
            <div class="select-value" data-selecct-value>
              Select category
            </div>

            <div class="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul class="select-list">
            <li class="select-item">
              <button data-select-item>All</button>
            </li>

            <li class="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li class="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li class="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul class="project-list">
          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-1.png"
                  alt="finance"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">My Current Portfolio</h3>

              <p class="project-category">Portfolio | Frontend</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://uwadiegwu.vercel.app/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-2.png"
                  alt="orizon"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">My Former Portfolio</h3>

              <p class="project-category">Portfolio | Frontend</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="https://sparkmedia.vercel.app/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-3.png"
                  alt="fundo"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">SparkMovies</h3>

              <p class="project-category">Web design</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://janicenter.org/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-4.png"
                  alt="brawlhalla"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Janicenter Africa</h3>

              <p class="project-category">Frontend</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="https://salinaka-ecommerce.web.app/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-5.png"
                  alt="dsm."
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Salinaka</h3>

              <p class="project-category">Ecommerce</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="https://commerce-js.netlify.app/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-6.png"
                  alt="metaspark"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Commerce js</h3>

              <p class="project-category">Ecommerce</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://erglobalresources.com/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-7.png"
                  alt="summary"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">E&r Global Resources</h3>

              <p class="project-category">Frontend</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="https://aformart.vercel.app/products">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-8.png"
                  alt="task manager"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Afor Mart</h3>

              <p class="project-category">Ecommerce</p>
            </a>
          </li>

          <li
            class="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="https://codefunky.vercel.app/">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src="./assets/images/project-9.png"
                  alt="arrival"
                  loading="lazy"
                />
              </figure>

              <h3 class="project-title">Codefunky</h3>

              <p class="project-category">Portfolio | Frontend</p>
            </a>
          </li>
        </ul>
      </section>
    </article>

   
  </div>
    </>
  )
}

export default Portfolio