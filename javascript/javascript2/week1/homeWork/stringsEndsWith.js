function solution(text, ending) {
  let array = text.split("");
  array = array.slice();
  console.log(array);
  return (stringMEthod = text.endsWith(ending));
}
console.log(solution("abc", "bc")); // returns true
console.log(solution("abc", "d")); // returns false
