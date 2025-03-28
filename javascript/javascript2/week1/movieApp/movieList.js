/* fetch movies from github using async await */
async function getMovies() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/Neepunraj/neepunraj.github.io/refs/heads/main/movies.json"
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
}
