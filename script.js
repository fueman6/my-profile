// Menu icon and navbar functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Scroll sections and active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
    }
  });
});

// Add "active" class to the clicked education item
const educationItems = document.querySelectorAll('.education-item');

educationItems.forEach((item) => {
  item.addEventListener('click', () => {
    educationItems.forEach((el) => {
      el.classList.remove('active');
    });
    item.classList.add('active');
  });
});

// Sticky navbar
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 100);
});

// Remove menu icon and navbar active class when clicking navbar link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

// Swiper slider
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Dark/light mode
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
});

// Scroll reveal
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });