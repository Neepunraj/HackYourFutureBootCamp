const mainApp = document.getElementById("root");
const header = document.createElement("header");
header.setAttribute("class", "headerContainer");
const h1 = document.createElement("h1");
h1.innerText = "Movie App";
header.appendChild(h1);
const navLinkList = ["Home", "Collections", "Contact Us"];

/* nav Ul */
const headerUl = document.createElement("ul");
headerUl.setAttribute("class", "hederUl");
navLinkList.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  headerUl.appendChild(li);
});

header.appendChild(headerUl);
mainApp.appendChild(header);

/* herosection */
const heroSection = document.createElement("section");
heroSection.setAttribute("class", "heroSection");

/* card container for each movie */

movieList.forEach((movie) => {
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class", "cardContainer");

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
  detailsDiv.setAttribute("class", "detailsDiv");

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
  averageRating.innerText = `Current Rating: ${movie.rating}/5`;
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

  let ratings = [];
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

mainApp.appendChild(heroSection);
