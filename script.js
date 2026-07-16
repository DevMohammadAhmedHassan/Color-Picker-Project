// variables

let redBtn = document.querySelector(".red");
let yellowBtn = document.querySelector(".yellow");
let greenBtn = document.querySelector(".green");
let blueBtn = document.querySelector(".blue");
let orangeBtn = document.querySelector(".orange");
let pinkBtn = document.querySelector(".pink");

// Functions

const redHandler = () => {
  document.body.style.backgroundColor = "red";
};
const yellowHandler = () => {
  document.body.style.backgroundColor = "yellow";
};
const greenHandler = () => {
  document.body.style.backgroundColor = "green";
};
const blueHandler = () => {
  document.body.style.backgroundColor = "blue";
};
const orangeHandler = () => {
  document.body.style.backgroundColor = "orange";
};
const pinkHandler = () => {
  document.body.style.backgroundColor = "pink";
};

// Event Listeners

redBtn.addEventListener("click", redHandler);

yellowBtn.addEventListener("click", yellowHandler);

greenBtn.addEventListener("click", greenHandler);

blueBtn.addEventListener("click", blueHandler);

orangeBtn.addEventListener("click", orangeHandler);

pinkBtn.addEventListener("click", pinkHandler);
