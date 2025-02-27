function HighAndLow(stringNumber) {
  const newNumberArray = stringNumber.split(" ").map(Number);
  /* sice the number is int32 in the question so didnt checked for validations */
  /* optimesed Code */
  const high = Math.max(...newNumberArray);
  const low = Math.min(...newNumberArray);

  /* oldest Code */
  let high1 = newNumberArray[0];
  let low1 = newNumberArray[0];
  for (let i = 0; i < newNumberArray.length; i++) {
    newNumberArray[i] > high1
      ? (high1 = newNumberArray[i])
      : (low1 = newNumberArray[i]);
  }
  return [
    {
      optimized: `${high} ${low}`,
    } /* here i have returned optimized code and nonoptimised code output*/,
    { nonOptimized: `${high1} ${low1}` },
  ];
}

console.log(HighAndLow("1 2 3 4 5"));
console.log(HighAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(HighAndLow("1 9 3 4 -5")); // return "9 -5"
