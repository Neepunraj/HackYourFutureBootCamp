/* function getStoredData() {
  let storeDatainLocal = [];
  const getDataFromStorage = localStorage.getItem("movieLists");
  const daysInMillisecondfor3days = 3 * 24 * 60 * 60 * 1000;
  const currentTime = new Date().getTime();

  if (getDataFromStorage) {
    const movieData = JSON.parse(getDataFromStorage);
    const dateStored = movieData.timeStamp;
    if (currentTime - dateStored < daysInMillisecondfor3days) {
      storeDatainLocal = movieData.movies;
    } else {
      localStorage.removeItem("movieLists");
      localStorage = movieList;
    }
  } else {
    localStorage = movieList;
  }
  storeMovieList(localStorage);
  return localStorage;
}
function storeMovieList(movies) {
  const movieData = {
    movies: movies,
    timeStamp: new Date().getTime(),
  };
  localStorage.setItem("movieLists", JSON.stringify(movieData));
}
document.addEventListener("DOMContentLoaded", () => {
  const triala = getStoredData();
  console.log(triala);
});
 */
