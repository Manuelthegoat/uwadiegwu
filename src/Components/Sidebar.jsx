import React from 'react'

const Sidebar = () => {
  return (
    <div>
    <aside class="sidebar" data-sidebar>

    <div class="sidebar-info">

      <figure class="avatar-box">
        <img src="./assets/images/rea-avatar.jpg" alt="Uwadiegwu Emmanuel" width="80"/>
      </figure>

      <div class="info-content">
        <h1 class="name" title="Uwadiegwu Emmanuel">Uwadiegwu <br/> Emmanuel</h1>

        <p class="title">Fullstack Blockchain Developer<br/>Lisk, Arbitrum, Solidity, Thirdweb</p>
      </div>

      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>

        <ion-icon name="chevron-down"></ion-icon>
      </button>

    </div>

    <div class="sidebar-info_more">

      <div class="separator"></div>

      <ul class="contacts-list">

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:uwadiegwu.emmanuel48@gmail.com" class="contact-link">uwadiegwu.emmanuel48@gmail.com</a>
          </div>

        </li>

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a href="tel:+2347088239725" class="contact-link">+234 (708) 823-9725</a>
          </div>

        </li>

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Birthday</p>

            <time datetime="1982-06-23">Nov 26, 2005</time>
          </div>

        </li>

        <li class="contact-item">

          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>Lagos, Nigeria</address>
          </div>

        </li>

      </ul>

      <div class="separator"></div>

      <ul class="social-list">

        <li class="social-item">
          <a href="https://www.linkedin.com/in/codefunky/" target='_blank' class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="https://twitter.com/0xmtg" target='_blank' class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="https://www.instagram.com/stunna4naija/" target='_blank' class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li class="social-item">
          <a href="https://github.com/Manuelthegoat" target='_blank' class="social-link">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>

      </ul>

    </div>

  </aside>
    </div>
  )
}

export default Sidebar