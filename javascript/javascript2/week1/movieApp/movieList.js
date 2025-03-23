let movieList = [];

async function getMovies() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Neepunraj/neepunraj.github.io/refs/heads/main/movies.json"
    );
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
async function init() {
  movieList = await getMovies();
  displayMovies(movieList);
}
