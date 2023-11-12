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

// adding the click listener for the buttons
red_btn.addEventListener("click", function () {
  button_animation.call(this, "redAudio");
  buttonClicked.call(this);
});
green_btn.addEventListener("click", function () {
  button_animation.call(this, "greenAudio");
  buttonClicked.call(this);
});
blue_btn.addEventListener("click", function () {
  button_animation.call(this, "blueAudio");
  buttonClicked.call(this);
});
yellow_btn.addEventListener("click", function () {
  button_animation.call(this, "yellowAudio");
  buttonClicked.call(this);
});

let gameOver = true;
let level;
let colorsOrder;
let current;
let userInput;
let randColor;
let colors = ["green", "red", "blue", "yellow"];

document.addEventListener("keydown", function () {
  if (gameOver) {
    start();
  }
});

function generateRandom() {
  randColor = colors[Math.floor(Math.random() * 4)];
  colorsOrder.push(randColor);
  button_animation.call(
    document.getElementById(randColor),
    randColor + "Audio"
  );
}

function start() {
  colorsOrder = [];
  gameOver = false;
  level = 1;
  title.textContent = "Level " + level;
  current = 0;
  generateRandom();
}
