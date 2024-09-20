let links = document.querySelector(".links");
let burger = document.querySelector(".burger");
let navLinks = document.querySelectorAll(".links ul li");

burger.addEventListener("click", () => {
  links.classList.toggle("display");
});

document.addEventListener("click", (e) => {
  if (e.target !== links && e.target !== burger) {
    links.classList.remove("display");
  }
});
let scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("navbar-scroll");
  } else {
    document.querySelector("header").classList.remove("navbar-scroll");
  }
  if (window.scrollY > 500) {
    scrollToTop.classList.add("display");
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    scrollToTop.classList.remove("display");
  }
});

// active link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});
