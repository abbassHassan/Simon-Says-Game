// buttons
const red_btn = document.getElementById("red");
const blue_btn = document.getElementById("blue");
const green_btn = document.getElementById("green");
const yellow_btn = document.getElementById("yellow");
const title = document.getElementById("level-title");

//button animation method
function button_animation(audio) {
  if (gameOver) return;
  this.classList.add("pressed");
  document.getElementById(audio).play();
  setTimeout(() => {
    this.classList.remove("pressed");
  }, 50);
}

