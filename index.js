function handleClickProfile() {
  document.getElementById("picture-large").style.display = "block";
}

function handleCloseProfile() {
  document.getElementById("picture-large").style.display = "none";
}

function changeMenu(n) {
  for (let i = 1; i <= 3; i++) {
    if (i == n) {
      document.getElementById(`menu-${i}`).style.color = "var(--menu-color)";
      document.getElementById(`content-${i}`).style.display = "contents";
    } else {
      document.getElementById(`menu-${i}`).style.color = "black";
      document.getElementById(`content-${i}`).style.display = "none";
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

// TODO: 정보/nav 아이콘/bgm/언어 변경/dark mode