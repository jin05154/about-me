const musicPlayer = document.querySelector("audio");
const profilePicture = document.getElementById("picture");
const btnClosePicture = document.getElementById("close-profile-btn");
const menuSlider = document.getElementById("menu-slider");
const galleryItems = document.querySelectorAll(".gallery-box");
const galleryImages = document.querySelectorAll(".gallery-box > img");
const btnCloseGallery = document.getElementById("close-gallery-btn");
const popupSign = document.getElementById("popup-sign");

// dark mode toggle switch
let checkbox = document.querySelector('input[type="checkbox"]');
let checkedMenu = 0;

// TODO: 정보/nav 아이콘/언어 변경/dark mode

musicPlayer.volume = 0.2;
musicPlayer.controlsList = "nodownload noplaybackrate";
profilePicture.addEventListener("click", () => {
  document.getElementById("picture-large").style.display = "block";
});
btnClosePicture.addEventListener("click", () => {
  document.getElementById("picture-large").style.display = "none";
});
galleryItems.forEach((item, index) =>
  item.addEventListener("click", function () {
    document.getElementById("gallery-large").style.display = "block";
    document.getElementById("gallery-large-img").src = galleryImages[index].src;
  })
);
btnCloseGallery.addEventListener(
  "click",
  () => (document.getElementById("gallery-large").style.display = "none")
);

function changeMenu(n) {
  checkedMenu = n;
  for (let i = 1; i <= 3; i++) {
    if (i == n) {
      document.getElementById(`menu-${i}`).style.color = "var(--menu-color)";
      document.getElementById(`content-${i}`).style.display = "contents";
    } else {
      document.getElementById(`menu-${i}`).style.color =
        "var(--secondary-text)";
      document.getElementById(`content-${i}`).style.display = "none";
    }
  }
}

function handleSlider(n) {
  changeMenu(n);
  menuSlider.style.transform = `translateX(calc(${n - 1} * 100px))`;
}

// dark mode
document.addEventListener("DOMContentLoaded", function () {
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      popupSign.style.display = "inline";
      setTimeout(function () {
        popupSign.style.display = "none";
        checkbox.checked = false;
      }, 2500);
      // 안내문 나타났다 사라지기까지 3초 기다린 후에 display: none으로 고정, 스위치 제자리
    }
  });
});

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
