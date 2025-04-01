/* fetch movies from github using async await */
async function getMovies() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Neepunraj/neepunraj.github.io/refs/heads/main/movies.json"
    );
    movieList = response.json();

    return movieList;
  } catch (err) {
    console.log(err);
  }
}
function getMoviesByCategory(category) {
  return movieList.filter((movie) => movie.genre === category);
}
