const timingSection = document.createElement("section");
const timingTitle = document.createElement("h2");
timingTitle.innerText = "Your timing in in Our App";
const timingPara = document.createElement("p");
timingPara.setAttribute("class", "timingPara");

const buttonToClickMovie = document.createElement("button");
buttonToClickMovie.innerText = "Start";
const stopTimer = document.createElement("button");
stopTimer.innerText = "Stop";
const resetTimer = document.createElement("button");
resetTimer.innerText = "Reset";

timingSection.append(
  timingTitle,
  timingPara,
  buttonToClickMovie,
  stopTimer,
  resetTimer
);
buttonToClickMovie.addEventListener("click", () => {
  start();
});
stopTimer.addEventListener("click", () => {
  stop();
});
resetTimer.addEventListener("click", () => {
  reset();
});

let intervalID = null;
mainApp.appendChild(timingSection);

let seconds = 0;
let minutes = 0;
let hours = 0;

startCount();
function getTime() {
  seconds++;
  if (seconds >= 59) {
    minutes++;
    seconds = 0;
  }
  if (minutes >= 59) {
    hours++;
    minutes = 0;
  }
  if (hours >= 24) {
    hours = 0;
  }
}

function renderTime(item) {
  const secsInFormat = seconds < 10 ? `0${seconds}` : seconds;
  const minsInFormat = minutes < 10 ? `0${minutes}` : minutes;
  const hrsInFormat = hours < 10 ? `0${hours}` : hours;
  item.innerText = `${hrsInFormat}:${minsInFormat}:${secsInFormat}`;
}
const newPar = document.createElement("p");
timingSection.appendChild(newPar);
function startCount() {
  setInterval(() => {
    renderTime(timingPara);
    getTime();
  }, 1000);
}
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 1000);
    isRunning = true;
  }
}
function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = Date.now() - startTime;
  }
}
function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  newPar.textContent = "00.00.00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
  let mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let sec = Math.floor((elapsedTime / 1000) % 60);
  hrs = `${hrs}`.padStart(2, 0);
  mins = `${mins}`.padStart(2, 0);
  sec = `${sec}`.padStart(2, 0);
  newPar.innerText = `${hrs}:${mins}:${sec}`;
}
