function handleClickProfilePicture() {
  document.getElementById("picture-large").style.display = "block";
}

function handleClickClosePicture() {
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

// TODO: 게시물/정보/bgm/언어 변경/dark mode