console.log("Hello World");
/* console.log("MVP ") */
const students = [];
function addGrade(grade) {}
function createStudent(name, age, grades) {
  return students.push({ name, age, grades });
}

createStudent("Neepun", 30, [4, 5, 10, 9]);
createStudent("Himal", 25, [7, 7, 8, 9]);
createStudent("Sagarmatha", 30, [9, 9, 10, 8]);
console.log(students);

function displayStudentInfo(students) {
  for (let i = 0; i <= students.length; i++) {
    if (i >= students.length) {
      return;
    }
    const { name, age, grades } = students[i];
    console.log(`${name}, Age: ${age}, Average Grades: ${grades}`);
  }
}
displayStudentInfo(students);

function calculaetAverageGrade(student) {
  const { grades } = student;
  let sumofGrades = grades.reduce((acc, tot) => acc + tot, 0);
  const averageGrade = sumofGrades / grades.length;
  return averageGrade;
}

function findTopStudent(students) {
  let topStudent = [];
  let checkAvg = 0;
  for (let i = 0; i < students.length; i++) {
    const avg = calculaetAverageGrade(students[i]);
    if (avg > checkAvg) {
      checkAvg = avg;
      topStudent = students[i];
    }
  }
  return topStudent;
}
const findTop = findTopStudent(students);
console.log(
  `The top student of class is ${
    findTop.name
  },and the average Grade is ${calculaetAverageGrade(findTop)}`
);

function addGrade(studentNAme, grade) {
  if (!studentNAme) return;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentNAme) {
      students[i].grades.push(grade);
    }
  }
}
addGrade("Neepun", 5);
addGrade("Himal", 8);
addGrade("Sagarmatha", 6);
console.log("Updated Student");
console.log(students);

getGrades("Neepun");

function calculateLowestGrade(student) {
  const { grades } = student;
  let lowest = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}
function calculatHigestGrade(student) {
  const { grades } = student;
  let greatest = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (greatest < grades[i]) {
      greatest = grades[i];
    }
  }
  return greatest;
}
function getGrades(studentNAme) {
  let averageGrade = 0;
  let lowestGrade = 0;
  let highestGrade = 0;
  if (!studentNAme) return;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === studentNAme) {
      averageGrade = calculaetAverageGrade(students[i]);
      lowestGrade = Math.min(...students[i].grades); //using advance Javascript without calling function
      highestGrade = calculatHigestGrade(students[i]);
    }
  }

  return `${studentNAme} has average grade of ${averageGrade}, lowest Grade is  ${lowestGrade} and higestGrade is ${highestGrade}`;
}
console.log(getGrades("Neepun"));

console.log("Excercise 1.2");
function findMovieByRating(movieLists) {
  let movieWithHigestRating = [];
  for (let i = 0; i < movieLists.length; i++) {
    if (movieLists[i].rating >= 8) {
      movieWithHigestRating.push(movieLists[i].title);
    }
  }
  return movieWithHigestRating;
}

let movieLists = [
  { title: "Interstellar", rating: 8.6 },
  { title: "The Room", rating: 3.7 },
  { title: "The Godfather", rating: 9.2 },
  { title: "Cars", rating: 7.1 },
];

console.log(findMovieByRating(movieLists));

const a = 10;
const b = -10;
const c = "100";
const d = "no";
const e = {
  name: "John",
};
const f = [1, 2, 3];
const h = true;

// guess the output of the following statements
console.log("#1", a + a); //20
console.log("#2", a + b); //0
console.log("#3", a + c); //10100
console.log("#4", a + d); //10no
console.log("#5", a + e); //10
console.log("#6", a + e["name"]); //10John
console.log("#7", a + e["age"]); //10+undefined = NAN
console.log("#8", a + f); //10 not sure
console.log("#9", a + f[1]); //11
console.log("#10", a + h); //11

function calculateAverageGrade(students) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < students.length; i++) {
    let grade = students[i].grade;

    if (typeof grade === "number" && grade > 0) {
      total += grade;
      count++;
    } else {
      console.log("Invalid grade for student: " + students[i].name);
    }
  }
  console.log(total, count);

  return count > 0 ? total / count : 0;
}

let studentsList = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: -10 },
  { name: "Charlie", grade: 85 },
  { name: "David", grade: 100 },
  { name: "Eva", grade: "A" },
];

console.log("Average grade:", calculateAverageGrade(studentsList));
// Expected Output: Average grade: 91.66

const recepieList = [];
/* using rest operator */
function addRecipie(recipeItem, ...rest) {
  recepieList.push(recipeItem, ...rest);
}
const recipeItem1 = {
  name: "spaghetti",
  timing: 30,
  ingredients: ["spagetti", "tomato sauce", "garlic"],
};
const recipeItem2 = {
  name: "Salad",
  timing: 10,
  ingredients: ["lettuce", "tomato", "cucumber", "olive oil"],
};
const recipeItem3 = {
  name: "Pancakes",
  timing: 20,
  ingredients: ["flour", "milk", "eggs", "sugar"],
};
addRecipie(recipeItem1, recipeItem2, recipeItem3);
console.log(recepieList);
function findFastesRecipe() {
  let lowest = recepieList[0].timing;
  for (let i = 0; i < recepieList.length; i++) {
    const { timing } = recepieList[i];
    if (timing < lowest) {
      lowest = timing;
    }
  }

  return recepieList.find((item) => item.timing === lowest); //filter will return array, find will return the object in array
}
const fasterRecipe = findFastesRecipe();
console.log(fasterRecipe);
console.log(
  `the fastes recipe is ${fasterRecipe.name}, timing is ${fasterRecipe.timing}`
);

const ingredients = ["spagetti", "olive oil", "cucumber", "garlic"];
function getRecipeBasedOnIngredinets(ingredientList) {
  const findRecipie = [];
  const getIngredients = recepieList.forEach((recipe) => {
    console.log(recipe.ingredients);
    for (let i = 0; i < ingredientList.length; i++) {
      if (findRecipie.includes(recipe)) {
        return; //checking scenrario if there is already ingredients to avoid repetive push
      } else if (recipe.ingredients.includes(ingredientList[i])) {
        findRecipie.push(recipe);
      }
    }
    console.log(findRecipie);
  });
}
getRecipeBasedOnIngredinets(ingredients);

console.log("Review Amazons Code ");

function filterItems(itemsTobeShipped) {
  let boxToBeShipped = [];
  for (let i = 0; i < itemsTobeShipped.length; i++) {
    if (itemsTobeShipped[i].price < 30 && itemsTobeShipped[i].inStock) {
      if (itemsTobeShipped[i].price < 20) {
        let itemToBePacked = itemsTobeShipped[i].item;
        boxToBeShipped.push(itemToBePacked);
      }
    }
  }
  if (boxToBeShipped.length === 0) {
    return [];
  }

  return boxToBeShipped;
}

let shipitems = [
  { item: "Apple", price: 1.5, inStock: true },
  { item: "Laptop", price: 999.99, inStock: true },
  { item: "T-shirt", price: 15, inStock: false },
  { item: "Bananas", price: 2, inStock: true },
  { item: "Headphones", price: 25, inStock: true },
];

console.log(filterItems(shipitems));
// Expected Output: ["Apple", "Bananas"]

console.log("Handeling Errors");
function logOnlySmallNumbers(number) {
  // make this function throw an error if the number is higher than 100
  // otherwise log the number
  if (number > 100) {
    throw new Error(`${number} is greater than 100 `);
  }
  console.log(number, " is less than 100");
}

function logSmallNumbers(numbers) {
  // make sure this method logs all the small numbers by handling any errors
  for (const number of numbers) {
    try {
      logOnlySmallNumbers(number);
    } catch (error) {
      console.log("Error Occured " + error);
    }
  }
}

logSmallNumbers([40, 150, 9999, 20, -10, 3000]);

console.log("Implementing Shopping Cart");

function createVisitor(name, age, height, hasPass) {
  return { name, age, height: height, hasPass };
}
const visitorsList = [];
const visitor1 = createVisitor("Neepun", 30, 170, false);
visitorsList.push(visitor1);

function calculateTicketPrice(visitor) {
  let price = 0;
  if (visitor.hasPass) {
    price = 0;
  } else {
    if (visitor.age < 12) {
      price = 10;
    } else if (visitor.age >= 12 && visitor.age <= 17) {
      price = 15;
    } else {
      price = 20;
    }
  }
  return price;
}
const priceforVisitor1 = calculateTicketPrice(visitorsList[0]);
console.log(priceforVisitor1);

function canRide(visitor, minHeight) {
  return visitor.height >= minHeight
    ? console.log("Yes! you can ride," + visitor.name)
    : console.log("NO! You cannot Ride, " + visitor.name);
}
canRide({ name: "Alice", height: 140 }, 120); // true
canRide({ name: "Bob", height: 110 }, 120); // false
visitorsList.push(createVisitor("Sagarmatha", 20, 140, false));
visitorsList.push(createVisitor("AnnaPurna", 12, 100, false));
visitorsList.push(createVisitor("AmaYAngri", 17, 120, false));
visitorsList.push(createVisitor("MachhaPucchere", 30, 140, false));
visitorsList.push(createVisitor("Vintuna", 11, 90, false));

console.log(visitorsList);
function calculateTotalRevenu(visitorsList) {
  let totalRevenue = 0;
  visitorsList.forEach((eachVisitor) => {
    totalRevenue += calculateTicketPrice(eachVisitor);
  });
  return totalRevenue;
}
const totalRevenueCheck = calculateTotalRevenu(visitorsList);
console.log("This year the total revenue is " + totalRevenueCheck);
function displayVisitorInfo(visitor) {
  const ticketPrice = calculateTicketPrice(visitor);
  const { name, age, height } = visitor;
  console.log(
    `Name: ${name} | Age: ${age} | Height: ${height}cm | Ticket Price: ${ticketPrice}`
  );
}

visitorsList.forEach((eachVisitor) => {
  displayVisitorInfo(eachVisitor);
});
