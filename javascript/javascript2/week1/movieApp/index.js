const mainApp = document.getElementById("root");
const header = document.createElement("header");
header.setAttribute("class", "headerContainer");
const h1 = document.createElement("h1");
h1.innerText = "MovieApp";
header.appendChild(h1);
const navLinkList = ["Home", "Collections", "Contact Us"];

/* search section */
const searchDiv = document.createElement("div");
searchDiv.setAttribute("class", "searchDiv");
const searchBox = document.createElement("input");
searchBox.placeholder = "Search For Movie";
searchBox.setAttribute("class", "searchMovie");
const searchButton = document.createElement("button");
searchButton.innerText = "Search";
searchBox.setAttribute("class", "searchInput");
searchButton.setAttribute("class", "searchButton");
header.appendChild(searchDiv);
searchDiv.appendChild(searchBox);
searchDiv.appendChild(searchButton);

searchButton.addEventListener("click", () => {
  const searchedInput = searchBox.value.toLocaleLowerCase();
  const searchedMovie = getMoviesbyNameSearch(searchedInput);
  displayMovies(searchedMovie);
});

/* nav Ul */
const headerUl = document.createElement("ul");
headerUl.setAttribute("class", "headerUl");
navLinkList.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  headerUl.appendChild(li);
});

header.appendChild(headerUl);
mainApp.appendChild(header);
/* section for sort by category  */
const categoryList = document.createElement("div");
categoryList.setAttribute("class", "stickyCategory");
mainApp.appendChild(categoryList);

const categoryUl = document.createElement("ul");
categoryUl.setAttribute("class", "categoryUl");
categoryList.appendChild(categoryUl);

let filteredMovie = [];

movieCategory.forEach((category) => {
  const li = document.createElement("li");
  li.innerText = category;
  categoryUl.appendChild(li);
  li.addEventListener("click", () => {
    const allCategories = categoryUl.querySelectorAll("li");
    allCategories.forEach((i) => i.classList.remove("active"));
    li.classList.add("active");
    if (category === "All") {
      displayMovies(movieList);
    } else {
      filteredMovie = getMoviesbyCategory(category);
      displayMovies(filteredMovie);
    }
  });
});
function getMoviesbyNameSearch(title) {
  return movieList.filter((movie) => movie.title.toLocaleLowerCase() === title);
}
function getMoviesbyCategory(category) {
  return movieList.filter((movie) => movie.genre === category);
}
/* herosection */
const heroSection = document.createElement("section");
heroSection.setAttribute("class", "heroSection fade-animation");

const allCategories = categoryUl.querySelectorAll("li");
if (allCategories.length > 0) {
  allCategories[0].classList.add("active");
  displayMovies(movieList);
}
/* card container for each movie */

function displayMovies(movies) {
  console.log(movies.length);
  heroSection.innerHTML = "";
  if (movies.length > 0) {
    movies.forEach((movie) => {
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

      heroSection.appendChild(cardContainer);
    });
  } else {
    const noMoviesFoundPara = document.createElement("p");
    noMoviesFoundPara.innerText =
      "No Movies Found! Please Search Another Movie";
    heroSection.appendChild(noMoviesFoundPara);
  }
}

mainApp.appendChild(heroSection);
