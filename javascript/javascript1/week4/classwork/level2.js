const todaysDate = new Date().toDateString();
console.log(todaysDate); //outputs Mon Feb 24 2025
function daysUntilBirthday(birthDate) {
  const todaysDate = new Date();
  const [year, month, day] = birthDate.split("-").map(Number);
  const nextBirthday = new Date(todaysDate.getFullYear(), month - 1, day);
  //if birthday is passed the have to add new year i.e 1year
  if (nextBirthday < todaysDate) {
    nextBirthday.setFullYear(todaysDate.getFullYear() + 1);
  }
  return Math.ceil((nextBirthday - todaysDate) / 86400000); // in a day there is 86400 sec and in millisec its 86400000
}
const daysLeftUntilBirthday = daysUntilBirthday("1995-02-15");
console.log("Days until birthday is : " + daysLeftUntilBirthday);

function ageOnDate(date1, date2) {
  const birthdayDate = new Date(date1.split("-").map(Number));
  const providedDate = new Date(date2.split("-").map(Number));
  return Math.ceil((providedDate - birthdayDate) / (86400000 * 365));
}
const myAge = ageOnDate("1994-06-18", "2030-02-24");
console.log("I am " + myAge + " years old.");

/* review NaSa`s Code */
console.log("==============");

function getTicketPrice(age, isVIP) {
  let price;
  if (isVIP) return 0;
  if (age < 12) {
    price = 50;
  } else if (age < 18) {
    price = 75;
  } else {
    price = 100;
  }

  return price;
}

function canTravel(height, age) {
  return (
    height >= 140 && age >= 10
  ); /* for space travel has to be 140m height and again age has to be above 10 */
}

function printPassengerInfo(name, age, height, isVIP) {
  let ticketPrice = getTicketPrice(age, isVIP);
  let travelStatus = canTravel(height, age)
    ? "Approved for space tracel"
    : "Not eligible for space travel";
  console.log(
    `${name} | Age:  ${age} | Height: ${height} cm | Ticket Price: $${ticketPrice}  | Travel Status:  ${travelStatus}` /* introduced o ject literals */
  );
}

printPassengerInfo("John", 25, 180, false);
printPassengerInfo("Jane", 10, 130, false);
printPassengerInfo("Bob", 16, 155, true);
printPassengerInfo("Alice", 8, 120, false);
printPassengerInfo("David", 12, 140, false);
printPassengerInfo("Eve", 18, 160, false);
printPassengerInfo("Frank", 11, 145, false);
printPassengerInfo("Grace", 14, 135, false);
printPassengerInfo("Henry", 9, 125, false);
printPassengerInfo("Isabel", 13, 150, false);
printPassengerInfo("Kevin", 17, 170, false);
printPassengerInfo("Lucy", 7, 110, false);
printPassengerInfo("Michael", 15, 165, false);
printPassengerInfo("Nancy", 19, 175, false);
printPassengerInfo("Oliver", 6, 105, false);
printPassengerInfo("Patricia", 20, 185, false);
printPassengerInfo("Quinn", 5, 100, false);
printPassengerInfo("Robert", 21, 190, false);

/* sum Even numbers */
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
// Expected output: 12 (because 2 + 4 + 6 = 12)

function sumEvenNumbers(numbers) {
  let sum = 0;
  /* with for loop */
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  console.log(sum);
  /* using advance js */
  return numbers.reduce(
    (sum, acc) => (acc % 2 === 0 ? sum + acc : sum),
    0
  ); /* reduce function instead of using for loop */
}

console.log(sumEvenNumbers([10, 15, 20, 25]));
// Expected output: 30 (because 10 + 20 = 30)
console.log(secondLargest([10, 20, 4, 45, 99])); // 45
console.log(secondLargest([3, 3, 3])); // null
console.log(secondLargest([5])); // null
console.log(secondLargest([])); // null
function secondLargest(numberArrays) {
  numberArrays.sort((a, b) => a - b);
  const uniqueNumbersArray = [];
  const lengthOfArray = numberArrays.length;
  for (let i = 0; i < lengthOfArray; i++) {
    if (i === 0 || numberArrays[i] !== numberArrays[i - 1]) {
      uniqueNumbersArray.push(numberArrays[i]);
    }
  }
  return uniqueNumbersArray.length > 1
    ? uniqueNumbersArray[lengthOfArray - 2]
    : null;
}

/* number 3 do stuff() */

function doStuff(numbers) {
  const oddNumbers = [];
  let sum = 0;
  let count = 0;
  for (let number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
      count++;
    }
    sum = 0;
  }
  for (let number of oddNumbers) {
    sum += number;
  }

  return oddNumbers.length > 0
    ? sum / count
    : "No odd number detected and it will results in NAN";
}

let numbers = [-3, 1, 8, 5, 7, 14, 98, 15];
console.log(doStuff(numbers)); // Output: 5

numbers = [2, 4, 8, 5, 7];
console.log(doStuff(numbers)); // Output: 6

numbers.pop();
console.log("after Pop", numbers); //remove last elmenet
numbers.unshift(1); //adds element for the first position in right
console.log("After ushift", numbers);
numbers.pop();
numbers.push(8);
numbers.unshift(2);
numbers[0] += 3;
numbers[2] *= 3;
console.log(doStuff([2, 4, 6])); // Nan???
/* because there is no add and that means sum be zero and count also and any number divisible by zero will give NAN */
