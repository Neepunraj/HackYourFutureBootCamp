/* 1. Loop through the list of restaurants and 
display each object in the console **using a traditional loop**.
2. Loop through the list of restaurants
 and display each object in the console **using an array function**. */
const lenthofArray = restaurants.length;
console.log(lenthofArray);

for (let i = 0; i < lenthofArray; i += 2) {
  console.log(restaurants[i]);
}
console.log("Using While Method");
let i = 0;
while (i < lenthofArray) {
  console.log(restaurants[i]);
  i++;
}

console.log("using for Each==============");
restaurants.forEach((item) => {
  console.log(item);
}); /* does not returns, and does the another task in the iteration  */

for (let restaurant of restaurants) {
  console.log(restaurant);
}
console.log("anything ");
let resturantName = [];
for (let i = 0; i < lenthofArray; i++) {
  const name = restaurants[i].name;
  resturantName.push(changeCase(name));
}
console.log(resturantName);
console.log("anything2");
const resturantName2 = restaurants.map((item) => item.name.toUpperCase());
console.log(resturantName2);
/* map returns new value */
function changeCase(name) {
  return `${name.toUpperCase()}- ${Math.random()}`;
}

const filterdResturan = restaurants.filter((item) => item.type === "burger");
console.log(filterdResturan.map((item) => item.name));
console.log(restaurants);
let resturantAddress = [];
for (let restaurant of restaurants) {
  resturantAddress.push(restaurant.address);
}
console.log(resturantAddress);

let italianPizza = [];
for (let i = 0; i < lenthofArray; i++) {
  if (
    restaurants[i].type.includes("pizza") ||
    restaurants[i].type.includes("italian")
  ) {
    italianPizza.push(restaurants[i].name);
  }
}
/* getting only name */
console.log(italianPizza);

italianPizza = restaurants.filter(
  (item) =>
    item.type === "Pizza".toLocaleLowerCase() ||
    item.type === "Italian".toLocaleLowerCase()
);

console.log(italianPizza.map((item) => item.name));
/* getting only name */
const ratings = restaurants.map((item) => item.rating);
console.log(ratings.sort());
console.log(ratings);

const newResturants = restaurants
  .map((item) => item)
  .sort((resA, resB) => (resA.rating < resB.rating ? -1 : 1))
  .map((item) => [item.name, item.rating]);
console.log(newResturants);
restaurants.sort((itemA, ItemB) => {
  return itemA.rating > ItemB.rating ? -1 : 1;
});

console.log(
  restaurants.map((item) => {
    return { name: item.name, rating: item.rating };
  })
);
/* we compare with item 1 and another itme in second */
/* works only with the object, if in text or number only .sort() */
/* callback has no name then anynomos */
