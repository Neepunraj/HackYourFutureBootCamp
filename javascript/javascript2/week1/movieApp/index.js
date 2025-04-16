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

function handleClickCardContainer(movie) {
  console.log(movie);
  stop();
  if (timer) {
    console.log(timer);
    const min = `${Math.floor((elapsedTime / (1000 * 60)) % 60)}`.padStart(
      2,
      "0"
    );
    const sec = `${Math.floor((elapsedTime / 1000) % 60)}`.padStart(2, "0");
    console.log(elapsedTime);
    const movieTitle = movie.title;
    alert(`You took ${min}:${sec} sec to select a movie: ${movieTitle}`);
  }

  let modal = document.getElementById("movie-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.setAttribute("id", "movie-modal");
    modal.setAttribute("class", "modal");

    const modalContent = document.createElement("div");
    modalContent.setAttribute("class", "modal-content");

    const closeButton = document.createElement("span");
    closeButton.setAttribute("class", "close-button");
    closeButton.innerText = "×";

    modalContent.appendChild(closeButton);

    const modalTitle = document.createElement("h2");
    const modalDirector = document.createElement("p");
    const modalDescription = document.createElement("p");
    const modalActors = document.createElement("p");
    const modalRating = document.createElement("p");

    const commentLabel = document.createElement("label");
    commentLabel.innerText = "Add a Review about this";
    const commentInput = document.createElement("textarea");
    commentInput.setAttribute("id", "modal-comment-input");
    commentInput.setAttribute("rows", "4");
    commentInput.setAttribute("placeholder", "Write your comment here...");

    modalTitle.setAttribute("id", "modal-movie-title");
    modalDirector.setAttribute("id", "modal-movie-director");
    modalDescription.setAttribute("id", "modal-movie-description");
    modalActors.setAttribute("id", "modal-movie-actors");
    modalRating.setAttribute("id", "modal-movie-rating");

    modalContent.append(
      modalTitle,
      modalDirector,
      modalDescription,
      modalActors,
      modalRating,
      commentLabel,
      commentInput
    );

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  document.getElementById("modal-movie-title").innerText = movie.title;
  document.getElementById(
    "modal-movie-director"
  ).innerText = `Director: ${movie.director}`;
  document.getElementById("modal-movie-description").innerText =
    movie.description;
  document.getElementById(
    "modal-movie-actors"
  ).innerText = `Casts: ${movie.actors.join(", ")}`;
  document.getElementById(
    "modal-movie-rating"
  ).innerText = `Current Rating: ${movie.rating}`;

  modal.style.display = "block";
}
/* implementing additional feature  */
const recentlyAdded = document.createElement("section");
recentlyAdded.setAttribute("class", "sectionDiv");

const recentlyAddedWrapper = document.createElement("div");
recentlyAddedWrapper.setAttribute("class", "wrapper");
const recentlyTitle = document.createElement("h2");
recentlyTitle.innerText = "Recently Added and Uploaded";
recentlyAdded.appendChild(recentlyTitle);
recentlyAdded.appendChild(recentlyAddedWrapper);

mainApp.appendChild(recentlyAdded);

/* high rating  */
const highRating = document.createElement("section");
highRating.setAttribute("class", "sectionDiv");

const highratingWrapper = document.createElement("div");
highratingWrapper.setAttribute("class", "wrapper");
const highRatingTitle = document.createElement("h2");
highRatingTitle.innerText = "Highly Rated ";
highratingWrapper.appendChild(highRatingTitle);
highRating.appendChild(highratingWrapper);

mainApp.appendChild(highRating);

/* sci-fi */
const scifiMovie = document.createElement("section");
scifiMovie.setAttribute("class", "sectionDiv");

const scifiWrapper = document.createElement("div");
scifiWrapper.setAttribute("class", "wrapper");
const scifiTitle = document.createElement("h2");
scifiTitle.innerText = "SciFi and Action";
scifiWrapper.appendChild(scifiTitle);
scifiMovie.appendChild(scifiWrapper);

mainApp.appendChild(scifiMovie);
