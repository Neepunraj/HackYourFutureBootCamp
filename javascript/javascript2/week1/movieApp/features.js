/* common Movie Card
 */
function getMovieCard(movie) {
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "cardContainer fade-animation");

  /* image */
  const heroImage = document.createElement("img");
  heroImage.setAttribute("class", "heroImage");
  heroImage.setAttribute("loading", "lazy");

  heroImage.src = movie.poster_url;
  cardContainer.appendChild(heroImage);

  /* div for year, title and Price */
  const yearTitlePriceContainer = document.createElement("div");
  yearTitlePriceContainer.setAttribute("class", "YearTitleContainer");

  const movieYear = document.createElement("p");
  movieYear.innerText = movie.movie_year;
  yearTitlePriceContainer.appendChild(movieYear);

  let movieTitle = document.createElement("h3");
  movieTitle.innerText = movie.title;
  yearTitlePriceContainer.appendChild(movieTitle);
  if (movie.title.length > 15) {
    let truncateText = movie.title.substring(0, 15) + "...";
    movieTitle.innerText = truncateText;
  }

  const price = document.createElement("p");
  price.innerText = `${movie.price}DKK`;
  yearTitlePriceContainer.append(price);
  cardContainer.appendChild(yearTitlePriceContainer);

  /* descriptions and details */
  const detailsDiv = document.createElement("div");
  detailsDiv.setAttribute("class", "detailsDiv fade-animation");

  yearTitlePriceContainer.appendChild(detailsDiv);
  cardContainer.addEventListener("mouseover", () => {
    detailsDiv.classList.add("visible");
    cardContainer.style.cursor = "pointer";
  });
  cardContainer.addEventListener("mouseleave", () => {
    detailsDiv.classList.remove("visible");
  });

  const director = document.createElement("p");
  director.innerText = `Director: ${movie.director}`;
  detailsDiv.appendChild(director);

  const casts = document.createElement("p");
  casts.innerText = `Casts: `;
  detailsDiv.appendChild(casts);

  movie.actors.map((cast) => {
    const spanText = document.createElement("span");
    spanText.innerText = `${cast}, `;
    casts.appendChild(spanText);
  });

  const movieDescription = document.createElement("p");
  movieDescription.innerText = movie.description;
  detailsDiv.appendChild(movieDescription);

  const averageRating = document.createElement("p");
  averageRating.innerText = `Current Rating: ${movie.rating}`;
  detailsDiv.appendChild(averageRating);

  /* rating */
  const ratingHeader = document.createElement("h3");
  ratingHeader.innerText = "Give Ratings ";
  detailsDiv.appendChild(ratingHeader);
  const ratingsDiv = document.createElement("div");
  ratingsDiv.setAttribute("class", "ratingsContainer");

  for (let i = 5; i > 0; i--) {
    const star = document.createElement("i");
    star.className = "fa fa-star";
    star.setAttribute("data-rating", i);
    ratingsDiv.appendChild(star);
  }

  const stars = ratingsDiv.querySelectorAll("i");

  for (let star of stars) {
    star.addEventListener("click", () => {
      const children = star.parentElement.children;
      for (let child of children) {
        if (child.getAttribute("data-clicked")) {
          return false;
        }
      }

      star.setAttribute("data-clicked", "true");
      const rating = star.dataset.rating;
      movie.rating = rating;
      /* set rating  */
      console.log(movie);
    });
  }
  /* added eventListener */
  cardContainer.addEventListener("click", () =>
    handleClickCardContainer(movie)
  );

  detailsDiv.appendChild(ratingsDiv);

  return cardContainer;
}

function createSmallMovieCard(movie) {
  const smallCard = document.createElement("div");
  smallCard.setAttribute("class", "smallCard");
  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "imageContainer");
  smallCard.appendChild(imageContainer);

  const poster = document.createElement("img");
  poster.src = movie.poster_url;
  poster.setAttribute("class", "smallCardPoster");
  poster.setAttribute("loading", "lazy");

  const title = document.createElement("h3");
  title.innerText = movie.title;
  title.setAttribute("class", "title");
  const year = document.createElement("p");
  year.innerText = `${movie.movie_year}`;
  year.setAttribute("class", "year");
  const price = document.createElement("p");
  price.innerText = `${movie.price}kr.`;
  price.setAttribute("class", "price");
  const topTitle = document.createElement("div");
  topTitle.setAttribute("class", "topTitle");
  topTitle.append(year, price);
  imageContainer.append(poster, title, topTitle);
  smallCard.addEventListener("click", () => {
    handleClickCardContainer(movie);
  });
  return smallCard;
}
/* function for search event and  optimized */
async function handleSearch() {
  const searchedInput = searchBox.value.toLocaleLowerCase();
  const searchedMovie = movieList.filter(
    (movie) => movie.title.toLowerCase() === searchedInput
  );
  displayMovies(searchedMovie);
}
/* optimisation here */
async function getMovieCategoryListByGenre() {
  const genreList = movieList.map((item) => item.genre);
  const uniqueGenre = ["All"]; /* by default all is there */
  genreList.forEach((genre) => {
    if (uniqueGenre.includes(genre) === false) {
      uniqueGenre.push(genre);
    }
  });

  return { uniqueGenre, movieList };
}

async function getMoviesByRating(order) {
  return movieList.sort((itemA, itemB) => {
    return order.toLowerCase() === "highest"
      ? itemB.rating - itemA.rating
      : itemA.rating - itemB.rating;
  });
}

/* hero section */
function displayMovies(movies) {
  heroSection.innerHTML = "";
  if (movies.length > 0) {
    movies.forEach((movie) => {
      const movieCard = getMovieCard(movie);
      heroSection.appendChild(movieCard);
    });
  } else {
    const noMoviesFoundPara = document.createElement("p");
    noMoviesFoundPara.innerText =
      "No Movies Found! Please Search Another Movie";
    heroSection.appendChild(noMoviesFoundPara);
  }
}
function moviesByYear() {
  const sortedMoviesbyYear = movieList.sort(
    (itemA, itemB) => itemB.movie_year - itemA.movie_year
  );
  return sortedMoviesbyYear;
}
function moviesbyHighRating() {
  const sortedMoviesbyRating = movieList.sort(
    (itemA, itemB) => itemB.rating - itemA.rating
  );
  return sortedMoviesbyRating;
}
function sciFiMovie() {
  return movieList.filter(
    (movie) => movie.genre.toLocaleLowerCase() === "sci-fi"
  );
}
/* displayed movies on load */
window.onload = async () => {
  movieList = await getMovies();
  displayMovies(movieList);
  displayMoviesByRating("Highest");
  movieCategory();
  const sortMoviesByYear = moviesByYear();

  sortMoviesByYear.forEach((movie) => {
    const smallCard = createSmallMovieCard(movie);
    recentlyAddedWrapper.appendChild(smallCard);
  });
  const moviesByRating = moviesbyHighRating();
  moviesByRating.forEach((movie) => {
    const smallCard = createSmallMovieCard(movie);
    highratingWrapper.appendChild(smallCard);
  });
  const movieBySciFi = sciFiMovie();
  movieBySciFi.forEach((movie) => {
    const smallCard = createSmallMovieCard(movie);
    scifiWrapper.appendChild(smallCard);
  });
};
