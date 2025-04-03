const timingSection = document.createElement("section");
timingSection.setAttribute("class", "timingSection");
const timingTitle = document.createElement("h2");
timingTitle.innerText = "Your timing in in Our App";
const timingPara = document.createElement("p");
timingPara.setAttribute("class", "timingPara");

const newPar = document.createElement("p");
newPar.textContent = "00:00:00";
newPar.setAttribute("class", "timingPara");

const newPara2 = document.createElement("p");
newPara2.setAttribute("class", "newPara2");
newPara2.innerText =
  "Lets Check how much you spend on Selecting Movie, Please Press Start Button and go on movie to select any of them";

timingSection.append(timingTitle, timingPara, newPara2, newPar);

/* optimized Stop Timer for repeat button creation and events */
const stopWatchTimer = ["Start", "Stop", "Reset"];
stopWatchTimer.forEach((buttonText) => {
  const stopWatchButton = document.createElement("button");
  stopWatchButton.innerText = buttonText;
  stopWatchButton.setAttribute("class", "primaryButton");
  stopWatchButton.addEventListener("click", () =>
    handleTimerButton(buttonText)
  );
  timingSection.appendChild(stopWatchButton);
});

/* events function based on buttonText */
function handleTimerButton(buttonText) {
  if (buttonText === "Start") {
    start();
  }
  if (buttonText === "Stop") {
    stop();
  }
  if (buttonText === "Reset") {
    reset();
  }
}
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
  const secsInFormat = seconds.toString().padStart(2, "0");
  const minsInFormat = minutes < 10 ? `0${minutes}` : minutes;
  const hrsInFormat = hours < 10 ? `0${hours}` : hours;
  item.innerText = `${hrsInFormat}:${minsInFormat}:${secsInFormat}`;
}

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
const allButtons = timingSection.querySelectorAll("button");

function start() {
  allButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 1000);
    isRunning = true;
  }
}
function stop() {
  allButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = Date.now() - startTime;
  }
}
function reset() {
  allButtons.forEach((button) => button.classList.remove("active"));
  event.target.classList.add("active");
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  timer = null;
  newPar.textContent = "00:00:00";
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

function handleClickCardContainer(cardContainer) {
  stop();
  if (timer) {
    const min = `${Math.floor((elapsedTime / (1000 * 60)) % 60)}`.padStart(
      2,
      0
    );
    const sec = `${Math.floor((elapsedTime / 1000) % 60)}`.padStart(2, 0);
    const movieTitle = cardContainer.querySelector(
      ".YearTitleContainer h3"
    ).innerText;

    alert(` You took ${min}:${sec} sec to select a movie : ${movieTitle}`);
  }
}
/* implementing additional feature  */
const sectionDiv = document.createElement("section");
function createSmallCard() {
  const smallCard = document.createElement("div");
  smallCard.setAttribute("class", "smallCard");
  const aLink = document.createElement("a");
  const h1 = document.createElement("h2");
  h1.innerText = "Additional features";
  aLink.appendChild(h1);
  smallCard.appendChild(aLink);
  sectionDiv.appendChild(smallCard);
}
createSmallCard();

mainApp.appendChild(sectionDiv);
