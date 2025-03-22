const header = document.createElement("header");

/* header */
header.setAttribute("class", "headerContainer");
const h1 = document.createElement("h1");
h1.innerText = "MovieApp";
header.appendChild(h1);

/* search */
const searchDiv = document.createElement("div");
searchDiv.setAttribute("class", "searchDiv");

const searchBox = document.createElement("input");
searchBox.placeholder = "Search For Movie";
searchBox.setAttribute("class", "searchInput");

const searchButton = document.createElement("button");
searchButton.innerText = "Search";
searchButton.setAttribute("class", "searchButton");

header.appendChild(searchDiv);
searchDiv.appendChild(searchBox);
searchDiv.appendChild(searchButton);

searchButton.addEventListener("click", handleSearch);
  handleSearch();
});

/* nav Ul */
const headerUl = document.createElement("ul");
headerUl.setAttribute("class", "headerUl");
/* displaying home collection and contact us */
navLinkList.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  headerUl.appendChild(li);
});
header.appendChild(headerUl);
mainApp.appendChild(header);
