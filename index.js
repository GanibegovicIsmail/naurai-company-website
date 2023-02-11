const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

//Displaying mobile menu

const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

//Show active menu when scrolling

const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  //adds highlighting class to menu items

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    servicesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//Close mobile menu

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");

  if (window.innerWidth <= 768 && menuBars) {
    menuBars.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

let initialX = 0;
let initialY = 0;

document.addEventListener("mousemove", (event) => {
  if (initialX === 0) {
    initialX = event.clientX;
  }
  if (initialY === 0) {
    initialY = event.clientY;
  }
  const xDiff = (event.clientX - initialX) / 2;
  const yDiff = (event.clientY - initialY) / 2;
  initialX = event.clientX;
  initialY = event.clientY;
  document.body.style.backgroundPosition = `${-xDiff}px ${-yDiff}px`;
});
