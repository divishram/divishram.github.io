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
