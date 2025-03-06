const movieList = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    movie_year: 2014,
    director: "Christopher Nolan",
    actors: [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain",
      "Michael Caine",
      "Casey Affleck",
      "Mackenzie Foy",
      "John Lithgow",
      "Ellen Burstyn",
      "Matt Damon",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    price: "120.00",
  },
  {
    id: 2, // Changed id to ensure uniqueness
    title: "Inception",
    description:
      "A skilled thief is offered a chance to have his criminal history erased if he can infiltrate the mind of a target and implant an idea.",
    movie_year: 2010,
    director: "Christopher Nolan",
    actors: [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Elliot Page",
      "Tom Hardy",
      "Ken Watanabe",
      "Marion Cotillard",
      "Cillian Murphy",
    ],
    poster_url:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    price: "120.00",
  },
];

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
const heroSection = document.createElement("section");
heroSection.setAttribute("class", "heroSection");

movieList.forEach((movie) => {
  const div = document.createElement("div");
  div.setAttribute("class", "cardContainer");

  const heroImage = document.createElement("img");
  heroImage.setAttribute("class", "heroImage");
  heroImage.src = movie.poster_url;
  div.appendChild(heroImage);

  const titlePriceDiv = document.createElement("div");
  titlePriceDiv.setAttribute("class", "childDiv");

  const movieYear = document.createElement("p");
  movieYear.innerText = movie.movie_year;
  titlePriceDiv.appendChild(movieYear);

  const h3 = document.createElement("h2");
  h3.innerText = movie.title;
  titlePriceDiv.appendChild(h3);

  const price = document.createElement("p");
  price.innerText = `${movie.price} DKK`;
  titlePriceDiv.append(price);
  div.appendChild(titlePriceDiv);

  div.addEventListener("mouseover", () => {
    div.style.cursor = "pointer";
    const newdiv = document.createElement("div");
    const para = document.createElement("p");
    para.innerText = movie.description;
    newdiv.appendChild(para);
    heroSection.appendChild(newdiv);
  });

  heroSection.appendChild(div);
});

mainApp.appendChild(heroSection);
