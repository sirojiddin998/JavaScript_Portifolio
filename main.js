window.addEventListener("DOMContentLoaded", function () {
  // LOader
  const loader_containes = document.querySelector(".loader_containes");
  setTimeout(function () {
    loader_containes.style.opacity = "0";
    setTimeout(function () {
      loader_containes.style.display = "none";
    }, 2500);
  }, 2500);
// LOader


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
  // Acardion
//  let contBx =  document.getElementsByClassName("contBx")
//  for(i=0; i<contBx.length; i++){
//   contBx[i].addEventListener('click',function(){
//     this.classList.toggle('active')
//   })
//   var panel = document.querySelector('.panel')
//   panel.addEventListener("click",function(){
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   })
//  }
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("actives");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

});
