/* const h1 = document.body.querySelector("h1");
console.log(h1);
const ul = document.body.querySelector("ul");
const list4 = document.createElement("li");
list4.innerText = "this is list 4";
ul.appendChild(list4); */
/* 
const list0 = document.createElement("li");
list0.innerText = "this is list item 0";

ul.insertBefore(list0, list4); */
/* const dishes = ["Momo", "Pizza", "Chicken", "hero"];
const ul = document.createElement("ul");
dishes.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  ul.appendChild(li);
});
document.body.appendChild(ul); */

const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/350",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/351",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/352",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];
const ul = document.createElement("ul");
podcasts.forEach((item) => {
  const { name, imageUrl } = item;
  const li = document.createElement("li");
  const h1 = document.createElement("h1");
  h1.innerHTML = name;
  li.appendChild(h1);
  if (imageUrl) {
    imageAppender(imageUrl, li);
  }
  ul.appendChild(li);
});
document.body.appendChild(ul);

function imageAppender(imageUrl, TagtoAppend) {
  const image = document.createElement("img");
  image.src = imageUrl;
  TagtoAppend.appendChild(image);
}
// Should append a img tag to the body with the picture from 'https://picsum.photos/536/354'
const newH2 = document.createElement("h2");
newH2.innerText = "This is Calling AppendingImage Function";
document.body.appendChild(newH2);
imageAppender("https://picsum.photos/536/354", document.querySelector("body"));

const button = document.createElement("button");
button.innerText = "Click Me";
let isClicked = false;
button.addEventListener("click", () => {
  isClicked = !isClicked;
  if (isClicked) {
    button.innerText = "Clicked";
    button.style.backgroundColor = "red";
    imageAppender(
      "https://picsum.photos/536/357",
      document.querySelector("body")
    );
  } else {
    button.innerText = "Click Me";
    button.style.backgroundColor = "#117ceb";
    const toRemove = document.body.lastElementChild;
    console.log(toRemove);
    document.body.removeChild(toRemove);
  }
});

document.body.appendChild(button);
const formDiv = document.querySelector(".box");
const firstName = document.createElement("h2");
const secondNAme = document.createElement("h2");
formDiv.appendChild(firstName);
formDiv.appendChild(secondNAme);
const form = formDiv.querySelector("form");
form.addEventListener("change", (event) => {
  console.log(event);
  event.preventDefault();
  const firstNameInput = form.querySelector("#firstNameInput");
  firstName.innerText = firstNameInput.value;
  const secondNameInput = form.querySelector("#secondNameInput");
  secondNAme.innerText = secondNameInput.value;
});
