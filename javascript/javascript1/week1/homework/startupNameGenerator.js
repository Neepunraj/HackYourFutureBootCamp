console.log("===Startup Name Generator===")
const firstWords = [
  "Alpha",
  "Beta",
  "Cargo",
  "Dango",
  "Echo",
  "FisherMan",
  "Gokyo",
  "Helicoptor",
  "InkMan",
  "Romeo",
];
const seconWords = [
  "Floppy",
  "Luck",
  "Star",
  "Mango",
  "Friendly",
  "Ship",
  "Trek",
  "Smash",
  "Rider",
  "Juliet",
];

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
const startupName =
  firstWords[getRandomNumber()] + seconWords[getRandomNumber()];
console.log(
  `Your name for Startup Company is ${startupName}, and it is ${startupName.length} charachters long`
);
