mainApp.appendChild(heroSection);

/* Rating section*/
const moviesByRatingSection = document.createElement("section");
mainApp.appendChild(moviesByRatingSection);
moviesByRatingSection.setAttribute("class", "moviesByRatingSection");

const headerForRating = document.createElement("h3");
headerForRating.innerText = "Movies by Rating";
headerForRating.setAttribute("class", "headerForRating");
moviesByRatingSection.appendChild(headerForRating);

const showMovieDiv = document.createElement("div");
showMovieDiv.setAttribute("class", "showMovieDiv");
moviesByRatingSection.appendChild(showMovieDiv);

const highestToLowest = document.createElement("button");
highestToLowest.innerText = "Highest";
highestToLowest.setAttribute("data-sort", "highest");
highestToLowest.setAttribute("class", "primaryButton");
moviesByRatingSection.appendChild(highestToLowest);

const lowestToHighest = document.createElement("button");
lowestToHighest.innerText = "Lowest";
lowestToHighest.setAttribute("data-sort", "lowest");
lowestToHighest.setAttribute("class", "primaryButton");
moviesByRatingSection.appendChild(lowestToHighest);

const sortButtons = moviesByRatingSection.querySelectorAll("button");
sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button);
  });
});

function handleButtonClick(button) {
  const sortRating = button.getAttribute("data-sort");
  displayMoviesByRating(sortRating);
}
/* default display */
displayMoviesByRating("highest");

function displayMoviesByRating(order) {
  showMovieDiv.innerHTML = "";
  const sortedMovies = getMoviesByRating(order);
  sortedMovies.forEach((movie) => {
    const newDiv = getMovieCard(movie);

    showMovieDiv.appendChild(newDiv);
  });
}
