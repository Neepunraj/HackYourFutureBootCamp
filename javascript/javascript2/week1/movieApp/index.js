const movieList = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "The adventures of a group of explorers who use a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
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
    rating: 0,
  },
  {
    id: 2,
    title: "Inception",
    description:
      "A skilled thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
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
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    price: "120.00",
    rating: 0,
  },
  {
    id: 3,
    title: "Iron Man",
    description:
      "After being held captive in an Afghan cave, billionaire industrialist Tony Stark creates a unique weaponized suit of armor to fight evil.",
    movie_year: 2008,
    director: "Jon Favreau",
    actors: [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Jeff Bridges",
      "Terrence Howard",
      "Leslie Bibb",
      "Clark Gregg",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dMc96Rn0XutMaIYJNwkJ5yO9oTh.jpg",
    price: "120.00",
    rating: 0,
  },
  {
    id: 4,
    title: "The Avengers",
    description:
      "When an unexpected enemy emerges that threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., assembles a team of superheroes to save the world.",
    movie_year: 2012,
    director: "Joss Whedon",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Scarlett Johansson",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Tom Hiddleston",
    ],
    poster_url:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    price: "120.00",
    rating: 0,
  },
  {
    id: 5,
    title: "Captain America: The First Avenger",
    description:
      "During World War II, Steve Rogers is enhanced to super-soldier status and must stop the Red Skull, the head of Hydra, from using a potent weapon.",
    movie_year: 2011,
    director: "Joe Johnston",
    actors: [
      "Chris Evans",
      "Hugo Weaving",
      "Hayley Atwell",
      "Sebastian Stan",
      "Tommy Lee Jones",
      "Dominique McElligott",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    price: "120.00",
    rating: 0,
  },
  {
    id: 6,
    title: "Spider-Man: Homecoming",
    description:
      "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter ego Spider-Man, and faces his greatest threat yet.",
    movie_year: 2017,
    director: "Jon Watts",
    actors: [
      "Tom Holland",
      "Michael Keaton",
      "Robert Downey Jr.",
      "Marisa Tomei",
      "Zendaya",
      "Jacob Batalon",
    ],
    poster_url:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    price: "120.00",
    rating: 0,
  },
  {
    id: 7,
    title: "Black Panther",
    description:
      "T'Challa, the new ruler of the technologically advanced African nation of Wakanda, must defend his land from an old foe and ensure his legacy.",
    movie_year: 2018,
    director: "Ryan Coogler",
    actors: [
      "Chadwick Boseman",
      "Michael B. Jordan",
      "Lupita Nyong'o",
      "Danai Gurira",
      "Martin Freeman",
      "Daniel Kaluuya",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udd8VinUWwLIiTYn3wdOEpCk9Fq.jpg",
    price: "120.00",
    rating: 0,
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore order to the universe.",
    movie_year: 2019,
    director: "Anthony Russo, Joe Russo",
    actors: [
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Scarlett Johansson",
      "Jeremy Renner",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    price: "150.00",
    rating: 0,
  },
  {
    id: 9,
    title: "Dune",
    description:
      "In the year 10191, the world is in chaos as noble families battle for control over the desert planet of Arrakis, known for its valuable resource, the spice melange.",
    movie_year: 2021,
    director: "Denis Villeneuve",
    actors: [
      "Timothée Chalamet",
      "Rebecca Ferguson",
      "Oscar Isaac",
      "Josh Brolin",
      "Stellan Skarsgård",
      "Javier Bardem",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    price: "130.00",
    rating: 0,
  },
  {
    id: 10,
    title: "The Batman",
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's corruption and question his family's involvement.",
    movie_year: 2022,
    director: "Matt Reeves",
    actors: [
      "Robert Pattinson",
      "Zoë Kravitz",
      "Paul Dano",
      "Jeffrey Wright",
      "John Turturro",
      "Andy Serkis",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    price: "140.00",
    rating: 0,
  },
  {
    id: 11,
    title: "The Matrix Resurrections",
    description:
      "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
    movie_year: 2021,
    director: "Lana Wachowski",
    actors: [
      "Keanu Reeves",
      "Carrie-Anne Moss",
      "Yahya Abdul-Mateen II",
      "Jessica Henwick",
      "Jonathan Groff",
      "Neil Patrick Harris",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8c4a8kE7PizaGQQnditMmI1xbRp.jpg",
    price: "130.00",
    rating: 0,
  },
  {
    id: 12,
    title: "No Time to Die",
    description:
      "James Bond has left active service. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
    movie_year: 2021,
    director: "Cary Joji Fukunaga",
    actors: [
      "Daniel Craig",
      "Rami Malek",
      "Léa Seydoux",
      "Ben Whishaw",
      "Naomie Harris",
      "Jeffrey Wright",
    ],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    price: "140.00",
    rating: 0,
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
  averageRating.innerText = `Current Rating : ${movie.rating}/5`;
  detailsDiv.appendChild(averageRating);

  /* rating */
  const ratingHeader = document.createElement("h3");
  ratingHeader.innerText = "Give Ratings ";
  detailsDiv.appendChild(ratingHeader);
  const ratingsDiv = document.createElement("div");
  ratingsDiv.className = "ratingsContainer";

  let currentRating = 0;

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("i");
    star.className = "fa fa-star";
    star.setAttribute("data-rating", i);
    ratingsDiv.appendChild(star);

    star.addEventListener("mouseenter", () => {
      for (let j = 0; j <= i; j++) {
        const tempIcon = ratingsDiv.children[j];
        tempIcon.style.color = "yellow";
      }
    });

    star.addEventListener("mouseleave", () => {
      for (let j = 0; j < i; j++) {
        const tempIcon = ratingsDiv.children[j];
        tempIcon.style.color = j < movie.rating ? "yellow" : "gray";
      }
    });

    star.addEventListener("click", () => {
      movie.rating = i + 1;
      currentRating = i + 1;
      for (let j = 0; j < 5; j++) {
        const tempIcon = ratingsDiv.children[j];
        tempIcon.style.color = j < currentRating ? "yellow" : "gray";
      }
      averageRating.innerText = `${movie.rating}/5`;
    });
  }

  detailsDiv.appendChild(ratingsDiv);

  heroSection.appendChild(cardContainer);
});

mainApp.appendChild(heroSection);
