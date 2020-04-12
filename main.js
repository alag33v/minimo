const toggle = document.querySelector('.menu-icon-wrapper');
const burger = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-nav');
const mainPhoto = document.querySelector('.main__photo');
// const logo = document.querySelector('.header__logo');

toggle.onclick = function () {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('mobile-nav--active');
  mainPhoto.classList.toggle('invisible');
  logo.classList.toggle('invisible');
}