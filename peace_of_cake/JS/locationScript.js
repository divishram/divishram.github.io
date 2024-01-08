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

var etobicoke = document.getElementById("store1");
var lakeshore = document.getElementById("store2");
var hayden = document.getElementById("store3");

etobicoke.onclick = changeMap1;
lakeshore.onclick = changeMap2;
hayden.onclick = changeMap3;

function changeMap1() {
  document.getElementById("map-canvas").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.2457351824673!2d-79.60855718533298!3d43.72622175572519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3b1557d8ca69%3A0x66a5d205e6eadc1!2sHumber%20College%20North!5e0!3m2!1sen!2sca!4v1638296830895!5m2!1sen!2sca";
  etobicoke.style.color = "#D17878";
  lakeshore.style.color = "rgb(43, 43, 43)";
  hayden.style.color = "rgb(43, 43, 43)";
}
function changeMap2() {
  document.getElementById("map-canvas").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.453882588163!2d-79.52318538562147!3d43.59709036407706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b49b24d272c33%3A0x6365bf51e8ca867e!2sHumber%20lakeshore!5e0!3m2!1sen!2sca!4v1638314915090!5m2!1sen!2sca";
  lakeshore.style.color = "#D17878";
  etobicoke.style.color = "rgb(43, 43, 43)";
  hayden.style.color = "rgb(43, 43, 43)";
}
function changeMap3(){
  document.getElementById("map-canvas").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.958670847264!2d-79.38599358561812!3d43.669829359375235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3517c0b3021f%3A0xf230b6fbcc847026!2sHumber%20International%20Graduate%20School!5e0!3m2!1sen!2sca!4v1638314974495!5m2!1sen!2sca";
  hayden.style.color = "#D17878";
  lakeshore.style.color = "rgb(43, 43, 43)";
  etobicoke.style.color = "rgb(43, 43, 43)";
}
