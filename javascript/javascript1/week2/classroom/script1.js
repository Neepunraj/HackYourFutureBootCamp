console.log("++++++++Part 1+++++++++");

const balance = 1000;

if (balance <= 0) {
  console.log("please Deposit Money ");
} else if (balance > 0 && balance <= 1000) {
  console.log("Your Balance is looking ok");
} else if (balance > 1000 && balance <= 3000) {
  console.log("Your Balance is looking Good");
} else if (balance > 3000 && balance <= 10000) {
  console.log("your balance is fantastic");
} else {
  console.log("your Balance is amaging");
}

console.log("++++++++Part 2 function +++++++++");

function getCircleArea(circularRadius) {
  const circleArea = Math.PI * circularRadius * circularRadius;
  return circleArea;
}
console.log("The Are of Circle With radius 2", getCircleArea(2));

console.log("++++++++Part 3 temperature +++++++++");

function celciusToFahreneit(celcius) {
  return (9 / 5) * celcius + 32;
}

console.log("32 Deg will be " + celciusToFahreneit(32) + "farenheight");

console.log("++++++++Part 5 date Formater+++++++++");
function convertDate(dateString) {
  //using concept of Es6
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
}

const dateString = "1994-03-21";

console.log(
  `Revered Date for  ${dateString}  is  ${convertDate(dateString)}`
);

//using split reverse and join
function newDateConversion(dateString) {
  const newDate = dateString.split("-").reverse().join("-");
  console.log(`Revered Date for  ${dateString}  is  ${newDate}`);
}
newDateConversion(dateString);

const emailString =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
console.log("++++++++Part 6 Email+++++++++");

function sendEmailTo(recepient) {
  console.log(`Email Sent to ${recepient}`);
}

const emailsIdLists = emailString.split("|");
//using for loop technique taught in class for array
for (let emailId in emailsIdLists) {
  sendEmailTo(emailsIdLists[emailId]);
}
