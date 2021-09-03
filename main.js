window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("mol", window.scrollY > 0);
  });
  // ------------------------------------------
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const navigationItems = document.querySelectorAll(".navigation a");
  // ------------------------------------------
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
  // ------------------------------------------
  navigationItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      navigation.classList.remove("active");
    });
  });

  // -----------------------------------------
  const scrollBtn = document.querySelector(".scrollTotob");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  // ------------------------------------------
  // animate
  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});
