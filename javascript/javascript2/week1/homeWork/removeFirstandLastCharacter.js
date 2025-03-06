function removeFirstandLast(text) {
  const newArrayText = text.split("");
  const arrayMethod = newArrayText.slice(1, -1).join("");
  const directString = text.slice(1, -1);
  return { arrayMethod, directString };
}
const body = document.querySelector("body");
const textToRemove = "Neepun";
const { arrayMethod, directString } = removeFirstandLast(textToRemove);
const divNEw = document.createElement("div");
const h1 = document.createElement("h1");
divNEw.appendChild(h1);
h1.innerText = `The text to remove is ${textToRemove} `;

const newPara = document.createElement("p");
newPara.innerText = `the removal of first and last character in above text
using Array Method is "${arrayMethod}" and using directString is "${directString}" `;
divNEw.appendChild(newPara);
body.appendChild(divNEw);
