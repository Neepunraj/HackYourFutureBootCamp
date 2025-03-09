function solution(text, ending) {
  let array = text.split("");
  array = array.slice();
  console.log(array);
  const stringMethod = text.endsWith(ending);
  return stringMethod;
}
console.log(solution("abc", "bc")); // returns true
console.log(solution("abc", "d")); // returns false
