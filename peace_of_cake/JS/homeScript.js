//hiding and showing hamburger menu for small screens
let toggle = document.getElementById("menu-toggle");

toggle.onclick = toggleMenu;
  
function toggleMenu() {
  var mobileMenu = document.getElementById("main-menu");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

//slidshow
var slideNum = 1;
showSlides(slideNum);

function nextSlides(n) {
  showSlides(slideNum += n);
}

function currentSlide(n) {
  showSlides(slideNum = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideNum = 1
  }    
  if (n < 1) {
    slideNum = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNum-1].style.display = "block";  
  dots[slideNum-1].className += " active";
}



  


