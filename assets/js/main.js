/**
* Template Name: PhotoFolio - v1.2.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: false,
    // autoplay: {
    //   delay: false,
    //   disableOnInteraction: false
    // },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const spanElement = document.getElementById("photographer");
  const texts = ["Seorang Fotografer", "Seorang Lokal Guide", "Editor Kreatif"]; // Array teks yang akan bergantian
  let textIndex = 0; // Indeks teks yang sedang aktif
  let charIndex = 0; // Indeks karakter yang sedang diketik
  let isDeleting = false; // Menunjukkan apakah sedang menghapus teks

  function type() {
      const currentText = texts[textIndex]; // Teks aktif yang sedang diproses

      if (spanElement && !isDeleting && charIndex < currentText.length) {
        spanElement.innerHTML += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
      // Waktu antara karakter saat mengetik
      } else if (isDeleting && charIndex > 0) {
          // Menghapus karakter satu per satu jika sedang menghapus
          spanElement.innerHTML = currentText.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, 100); // Waktu antara karakter saat menghapus
      } else if (!isDeleting && charIndex === currentText.length) {
          // Setelah selesai mengetik, tunggu sebentar lalu mulai menghapus
          setTimeout(() => {
              isDeleting = true; // Mulai menghapus
              type();
          }, 1000); // Tunggu 1 detik sebelum mulai menghapus
      } else if (isDeleting && charIndex === 0) {
          // Setelah selesai menghapus, ganti teks dan mulai mengetik teks berikutnya
          isDeleting = false; // Hentikan mode menghapus
          textIndex = (textIndex + 1) % texts.length; // Bergantian ke teks berikutnya
          setTimeout(type, 500); // Tunggu sebentar sebelum mengetik ulang
      }
  }

  setTimeout(type, 1000); // Mulai animasi setelah 1 detik
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Hapus kelas 'active' dari semua link
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Tambahkan kelas 'active' ke link yang di klik
      this.classList.add('active');
    });
  });
});


const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.classList.toggle('dark-mode');
    });

    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('theme-icon').textContent = isDarkMode ? '🌙' : '🌞';
});




document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector("video");
  if (video) {
    video.volume = 1.0; // Mengatur volume ke 100%
    video.muted = false; // Pastikan video tidak di-mute
  }
});





    // Mendapatkan URL saat ini
    const currentLocation = location.href;
    // Mendapatkan semua elemen link dalam navbar
    const menuItem = document.querySelectorAll('.navbar ul li a');
    const menuLength = menuItem.length;
    
    // Looping semua link untuk menyesuaikan class 'active'
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add('active');
        } else {
            menuItem[i].classList.remove('active');
        }
    }




