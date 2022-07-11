// dark mode toggle switch
let checkbox = document.querySelector('input[type="checkbox"]');
let checkedMenu = 0;

// TODO: addEventListener/정보/nav 아이콘/bgm/언어 변경/dark mode

function handleClickProfile() {
  document.getElementById("picture-large").style.display = "block";
}

function handleCloseProfile() {
  document.getElementById("picture-large").style.display = "none";
}

function changeMenu(n) {
  checkedMenu = n;
  for (let i = 1; i <= 3; i++) {
    if (checkbox.checked) {
      if (i == n) {
        document.getElementById(`menu-${i}`).style.color = "var(--menu-color)";
        document.getElementById(`content-${i}`).style.display = "contents";
      } else {
        document.getElementById(`menu-${i}`).style.color = "var(--dark-mode-text)";
        document.getElementById(`content-${i}`).style.display = "none";
      }
    } else {
      if (i == n) {
        document.getElementById(`menu-${i}`).style.color = "var(--menu-color)";
        document.getElementById(`content-${i}`).style.display = "contents";
      } else {
        document.getElementById(`menu-${i}`).style.color = "var(--secondary-text)";
        document.getElementById(`content-${i}`).style.display = "none";
      }
    }
  }
}

function handleSlider(n) {
  changeMenu(n);
  document.getElementById("menu-slider").style.transform = `translateX(calc(${
    n - 1
  } * 100px))`;
}

function handleClickGallery(path) {
  document.getElementById("gallery-large").style.display = "block";
  document.getElementById("gallery-large-img").src = path;
}

function handleCloseGallery() {
  document.getElementById("gallery-large").style.display = "none";
}

// dark mode
// document.addEventListener("DOMContentLoaded", function () {
//   checkbox.addEventListener("change", function () {
//     if (checkbox.checked) {
//       document.body.classList.add("dark-mode");
//       switchToDark(document.getElementById("profile"));
//       document.getElementById("contents").style.backgroundColor = "var(--dark-mode-background-2)";
//       // document.querySelectorAll("nav").forEach((el) => switchToDark(el));
//       document.querySelectorAll("article").forEach((el) => switchToDark(el));
//     } else {
//       document.body.classList.remove("dark-mode");
//       switchToLight(document.getElementById("profile"));
//       document.getElementById("contents").style.backgroundColor = "var(--content-background)";
//       // document.querySelectorAll("nav").forEach((el) => switchToLight(el));
//       document.querySelectorAll("article").forEach((el) => switchToLight(el));
//     }
//   });
// });

// function switchToDark(el) {
//   el.style.backgroundColor = "var(--dark-mode-background-1)";
//   el.style.color = "var(--dark-mode-text)";
//   el.style.borderBottom = "1px solid var(--dark-mode-border)";
// }

// function switchToLight(el) {
//   el.style.backgroundColor = "white";
//   el.style.color = "black";
//   el.style.borderBottom = "1px solid var(--nav-border-color)";
// }
