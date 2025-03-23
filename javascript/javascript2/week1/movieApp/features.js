/* common Movie Card
 */
function getMovieCard(movie) {
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "cardContainer fade-animation");

  /* image */
  const heroImage = document.createElement("img");
  heroImage.setAttribute("class", "heroImage");

  heroImage.src = movie.poster_url;
  cardContainer.appendChild(heroImage);

  /* div for year, title and Pric */
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

  detailsDiv.appendChild(ratingsDiv);

  return cardContainer;
}

/* function for search event */
function handleSearch() {
  const searchedInput = searchBox.value.toLocaleLowerCase();
  const searchedMovie = getMoviesbyNameSearch(searchedInput);
  displayMovies(searchedMovie);
}

async function getMoviesbyNameSearch(title) {
  movieList = await getMovies();
  return movieList.filter((movie) => movie.title.toLowerCase() === title);
}

async function getMoviesbyCategory(category) {
  movieList = await getMovies();
  return movieList.filter((movie) => movie.genre === category);
}

async function getMovieCategoryListByGenre() {
  movieList = await getMovies();
  const genreList = movieList.map((item) => item.genre);
  const uniqueGenre = ["All"]; /* by default all is there */
  genreList.forEach((genre) => {
    if (uniqueGenre.includes(genre) === false) {
      uniqueGenre.push(genre);
    }
  });

  return uniqueGenre;
}

function getMoviesByRating(order) {
  return movieList.sort((itemA, itemB) => {
    return order === "highest"
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
