const movieCategory = [
  "All",

  "Action",
  "Kids",
  "Sci-Fi",
  "Years",
  "Bollywood",
  "Hollywood",
  "Thriller",
  "High Rated",
  "Crime",
  "Adventure",
  "War",
  "Fantasy",
  "Comedy",
];

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
    genre: "Sci-Fi",
    rating: 8.6,
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
    genre: "Sci-Fi",
    rating: 8.8,
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
    genre: "Action",
    rating: 7.9,
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
    genre: "Action",
    rating: 8.0,
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
    genre: "Action",
    rating: 6.9,
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
    genre: "Action",
    rating: 7.4,
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
    genre: "Action",
    rating: 7.3,
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
    genre: "Action",
    rating: 8.4,
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
    genre: "Sci-Fi",
    rating: 8.2,
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
    genre: "Action",
    rating: 7.8,
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
    genre: "Sci-Fi",
    rating: 5.7,
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
    genre: "Action",
    rating: 6.7,
  },
  {
    id: 13,
    title: "Toy Story",
    description:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's room.",
    movie_year: 1995,
    director: "John Lasseter",
    actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    price: "120.00",
    genre: "Kids",
    rating: 8.3,
  },
  {
    id: 14,
    title: "Finding Nemo",
    description:
      "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    movie_year: 2003,
    director: "Andrew Stanton, Lee Unkrich",
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    price: "120.00",
    genre: "Kids",
    rating: 8.1,
  },
  {
    id: 15,
    title: "Moana",
    description:
      "In Ancient Polynesia, when a terrible curse incurred by Maui reaches a tropical island, Moana, the daughter of the village chief, answers the ocean's call to seek out the demigod to set things right.",
    movie_year: 2016,
    director: "Ron Clements, John Musker",
    actors: ["Auli'i Cravalho", "Dwayne Johnson", "Rachel House"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",
    price: "120.00",
    genre: "Comedy",
    rating: 7.6,
  },
  {
    id: 16,
    title: "The Lion King",
    description:
      "Lion prince Simba flees his kingdom after the death of his father, but returns as an adult to reclaim his throne.",
    movie_year: 1994,
    director: "Roger Allers, Rob Minkoff",
    actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    price: "120.00",
    genre: "Kids",
    rating: 8.5,
  },
  {
    id: 17,
    title: "A Star is Born",
    description:
      "A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.",
    movie_year: 2018,
    director: "Bradley Cooper",
    actors: ["Lady Gaga", "Bradley Cooper", "Sam Elliott"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    price: "120.00",
    genre: "Years",
    rating: 7.5,
  },
  {
    id: 18,
    title: "3 Idiots",
    description:
      "In India, three engineering students form a lasting friendship while navigating the pressures of their university.",
    movie_year: 2009,
    director: "Rajkumar Hirani",
    actors: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    price: "120.00",
    genre: "Bollywood",
    rating: 8.4,
  },
  {
    id: 19,
    title: "The Social Network",
    description:
      "A chronicle of the founding of Facebook, exploring the legal battles and social implications that followed.",
    movie_year: 2010,
    director: "David Fincher",
    actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    price: "120.00",
    genre: "Hollywood",
    rating: 7.7,
  },
  {
    id: 20,
    title: "Gone Girl",
    description:
      "A woman disappears on her fifth wedding anniversary, and her husband becomes the prime suspect in her mysterious disappearance.",
    movie_year: 2014,
    director: "David Fincher",
    actors: ["Ben Affleck", "Rosamund Pike", "Neil Patrick Harris"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
    price: "120.00",
    genre: "Thriller",
    rating: 8.1,
  },
  {
    id: 21,
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    movie_year: 1994,
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "William Sadler"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/20f2GThu22hp5MgCA4dg3bZ3gTS.jpg",
    price: "120.00",
    genre: "High Rated",
    rating: 9.3,
  },
  {
    id: 22,
    title: "Mad Max: Fury Road",
    description:
      "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant and his army in a high-octane chase.",
    movie_year: 2015,
    director: "George Miller",
    actors: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    price: "120.00",
    genre: "Action",
    rating: 8.1,
  },
  {
    id: 23,
    title: "The Godfather",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    movie_year: 1972,
    director: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wcK775sWenUrXzBpkUWvzoMZgGQ.jpg",
    price: "120.00",
    genre: "Crime",
    rating: 9.2,
  },
  {
    id: 24,
    title: "Inception",
    description:
      "A skilled thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    movie_year: 2010,
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    price: "120.00",
    genre: "Sci-Fi",
    rating: 8.8,
  },
  {
    id: 25,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    description:
      "A young hobbit, Frodo, is tasked with carrying a powerful ring to Mount Doom to destroy it and save Middle-earth.",
    movie_year: 2001,
    director: "Peter Jackson",
    actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    price: "120.00",
    genre: "Adventure",
    rating: 8.8,
  },
  {
    id: 26,
    title: "1917",
    description:
      "As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
    movie_year: 2019,
    director: "Sam Mendes",
    actors: ["George MacKay", "Dean-Charles Chapman", "Mark Strong"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    price: "120.00",
    genre: "War",
    rating: 8.3,
  },
  {
    id: 27,
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    description:
      "Four kids travel to the magical land of Narnia and help fight against the evil White Witch.",
    movie_year: 2005,
    director: "Andrew Adamson",
    actors: ["Tilda Swinton", "Georgie Henley", "William Moseley"],
    poster_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
    price: "120.00",
    genre: "Fantasy",
    rating: 7.1,
  },
];
