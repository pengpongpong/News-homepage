const open_menu = document.querySelector(".open_icon");
const close_menu = document.querySelector(".close_icon");
const menu = document.querySelector(".navbar_menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

// open hamburger menu and darken background
open_menu.addEventListener("click", () => {
  overlay.style.display = "block";
  menu.style.transform = "translate(0, 0)";
  body.style.overflowY = "hidden";
});

// close hamburger menu and remove darken background
close_menu.addEventListener("click", () => {
  menu.style.transform = "translate(100%, 0)";
  overlay.style.display = "none";
  body.style.overflowY = "auto";
});


// close hamburger menu when clicked outside or close icon
document.addEventListener("click", (e) => {
  if (
    !close_menu.contains(e.target) &&
    !menu.contains(e.target) &&
    !open_menu.contains(e.target)
  ) {
    menu.style.transform = "translate(100%, 0)";
    overlay.style.display = "none";
    body.style.overflowY = "auto";
  }
});
