import React from "react";
import { dummydata } from "../dummydata";

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

        <article class="portfolio active">
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
              {dummydata.map((item) => (
              
              <li
                class="project-item  active"
                data-filter-item
                data-category="web development"
              >
                <a href={item.link}>
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>

                    <img
                      src={item.image}
                      alt="finance"
                      loading="lazy"
                    />
                  </figure>

                  <h3 class="project-title">{item.projectTitle}</h3>

                  <p class="project-category">{item.projectCategory}</p>
                </a>
              </li>
              ))}
           
            </ul>
          </section>
        </article>
      </div>
    </>
  );
};

export default Portfolio;
