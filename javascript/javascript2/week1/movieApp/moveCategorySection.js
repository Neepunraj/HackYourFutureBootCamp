/* section for sort by category  */
const categoryList = document.createElement("section");
categoryList.setAttribute("class", "stickyCategory");

const categoryUl = document.createElement("ul");
categoryUl.setAttribute("class", "categoryUl");
categoryList.appendChild(categoryUl);
async function movieCategory() {
  const movieCategory = await getMovieCategoryListByGenre();
  movieCategory.forEach((category) => {
    const li = document.createElement("li");
    li.innerText = category;
    categoryUl.appendChild(li);
  });
}
movieCategory();

/* create list with movie categories  */

const allCategoryByGenreInLi = categoryUl.querySelectorAll("li");
if (allCategoryByGenreInLi.length > 0) {
  allCategoryByGenreInLi[0].classList.add("active");
  displayMovies(movieList);
}
allCategoryByGenreInLi.forEach((liItem) => {
  liItem.addEventListener("click", () => {
    handleClickCategoryLi(liItem);
  });
});
/* click event in li from movie */

function handleClickCategoryLi(liItem) {
  allCategoryByGenreInLi.forEach((li) => li.classList.remove("active"));
  liItem.classList.add("active");
  const genre = liItem.innerText;
  if (genre === "All") {
    displayMovies(movieList);
  } else {
    filteredMovie = getMoviesbyCategory(genre);
    console.log(filteredMovie);
    displayMovies(filteredMovie);
  }
}

mainApp.appendChild(categoryList);
