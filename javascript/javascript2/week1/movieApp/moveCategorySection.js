/* section for sort by category  */
const categoryList = document.createElement("section");
categoryList.setAttribute("class", "stickyCategory");

const categoryUl = document.createElement("ul");
categoryUl.setAttribute("class", "categoryUl");
categoryList.appendChild(categoryUl);

async function movieCategory() {
  const { uniqueGenre, movieList } = await getMovieCategoryListByGenre();
  uniqueGenre.forEach((category) => {
    const li = document.createElement("li");
    li.innerText = category;
    if (category === "All") {
      li.classList.add("active");
    }
    li.addEventListener("click", () => handleClickCategoryLi(li, movieList));
    categoryUl.appendChild(li);
  });
}

/* click event in li from movie */

async function handleClickCategoryLi(liItem, movieList) {
  const liListInCategory = categoryUl.querySelectorAll("li");
  liListInCategory.forEach((li) => li.classList.remove("active"));
  liItem.classList.add("active");
  const genre = liItem.innerText;
  console.log(genre);
  if (genre === "All") {
    displayMovies(movieList);
  } else {
    filteredMovie = await getMoviesByCategory(genre);
    console.log(filteredMovie);
    displayMovies(filteredMovie);
  }
}

mainApp.appendChild(categoryList);
