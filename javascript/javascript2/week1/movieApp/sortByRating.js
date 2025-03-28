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
const sortButton = ["Highest", "Lowest"];
sortButton.forEach((buttonText) => {
  const createButton = document.createElement("button");
  createButton.innerText = buttonText;
  createButton.setAttribute("data-sort", buttonText);
  createButton.setAttribute("class", "primaryButton");
  createButton.addEventListener("click", () => {
    handleButtonClick(createButton);
  });
  moviesByRatingSection.appendChild(createButton);
});

function handleButtonClick(button) {
  const sortRating = button.getAttribute("data-sort");
  const buttonsList = moviesByRatingSection.querySelectorAll("button");
  buttonsList.forEach((button) => button.classList.remove("active"));
  button.classList.add("active");
  displayMoviesByRating(sortRating);
}
/* default display */

async function displayMoviesByRating(order) {
  showMovieDiv.innerHTML = "";
  const sortedMovies = await getMoviesByRating(order);
  sortedMovies.forEach((movie) => {
    const newDiv = getMovieCard(movie);
    showMovieDiv.appendChild(newDiv);
  });
}
