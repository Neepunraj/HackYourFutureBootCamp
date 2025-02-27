import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});
/* pleayer has to guess 5 letter word */
const wordToGuessList = ["apple", "giant", "horse", "hacky", "steep"];
const random = Math.ceil(Math.random() * wordToGuessList.length);
const wordtoGuess = wordToGuessList[random];
/* will do it later */
