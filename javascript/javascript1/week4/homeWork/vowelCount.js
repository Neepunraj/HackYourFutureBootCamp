const getWord = prompt("Enter any Word");
function vowelCount(word) {
  let count = 0;
  const splittedWords = word.split("");
  const vowelsList = "aeiouAEIOU".split("");
  let vowelsInWord = [];
  for (let i = 0; i < splittedWords.length; i++) {
    if (vowelsList.includes(splittedWords[i])) {
      count++;
      vowelsInWord.push(splittedWords[i]);
    }
  }
  return { count, vowelsInWord };
}
const { count, vowelsInWord } = vowelCount(getWord);
alert(
  `There are ${count} vowels in your provided Word "${getWord}" and they are ${vowelsInWord}`
);
