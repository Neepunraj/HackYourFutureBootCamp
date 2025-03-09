function checkOddEven(inputArray) {
  const totalSum = inputArray.reduce((acc, sum) => sum + acc, 0);

  return totalSum % 2 === 0 ? "Even" : "Odd";
}
console.log(checkOddEven([0]));
console.log(checkOddEven([0, 1, 4]));
console.log(checkOddEven([0, -1, -5]));
