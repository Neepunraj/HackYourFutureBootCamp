console.log("level 3 Bgins here");
const randomNumber = Math.ceil(Math.random() * 100); /* secret number 1-100 */
/* console.log(randomNumber);
const userName = prompt("Please Enter Your Name:"); */
/* we can get input using promt */
/* in node js we import readline module, */
/* userName ? alert("Hello, " + userName) : alert("Please Enter your name again"); */

function getFeedback(guessedNumber) {
  if (!guessedNumber) {
    return "please enter valid number between 1-100";
  } else {
    if (guessedNumber === randomNumber) {
      return "Congratulations!";
    } else {
      return guessedNumber > randomNumber
        ? "Too High ! Please try another number"
        : "Too Low ! Please try another number ";
    }
  }
}
let arr = [];
let count = 0;
let message = "";
console.log(randomNumber);
for (let i = 0; i < 10; i++) {
  let guessedNumber = prompt("Enter any number:");
  const feedback = getFeedback(parseInt(guessedNumber));
  if (feedback === "Congratulations!") {
    alert(
      `${feedback} You Made it  and you guessed it correctly in your ${
        count + 1
      }th attempt`
    );
    break;
  } else {
    if (count === 9) {
      alert(
        `Max Limit reached and the number to guess is 
          ${randomNumber} and You have guessed for ${count + 1}th Times`
      );
      break;
    } else {
      alert(feedback);
    }
  }

  count++;
}

const secretWord = ["apple", "giant", "horse", "hacky", "steep"];
