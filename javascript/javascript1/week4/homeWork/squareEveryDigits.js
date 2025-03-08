function squareEveryDigit(number) {
  if (!number) {
    return "No valid Number found Plese Enter valid number";
  }
  /* old method */
  const splitNumbersToArray = [];
  while (number > 0) {
    splitNumbersToArray.unshift(
      (number % 10) ** 2
    ); /* used modulo to get reminder and stored the sqaure of it */
    number = Math.floor(number / 10);
  }
  let concatSquaredNumber = "";
  for (let i = 0; i < splitNumbersToArray.length; i++) {
    concatSquaredNumber += splitNumbersToArray[i];
  }

  return parseInt(concatSquaredNumber); /* converted string to int */
}
console.log(squareEveryDigit(9119));
console.log(squareEveryDigit());
console.log(squareEveryDigit(765));
