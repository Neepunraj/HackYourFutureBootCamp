function getFullName(firstName, surName) {
  return `${firstName} ${surName}`;
}
console.log(getFullName("Benjamin", "Hughes"));
console.log(getFullName("Neepun", "Shrestha"));

/* with Variable to store the returned value from the function */
const fullName1 = getFullName("Himal", "Shrestha");
const fullName2 = getFullName("Sagar", "Matha");
console.log(fullName1);
console.log(fullName2);

//usig new concept for if else in single line using ternary operator
function getFullNameVersion2(firstName, surName, useFormalName) {
return useFormalName?  `Lord ${firstName} ${surName}` : `${firstName} ${surName}`;
}
console.log(getFullNameVersion2("Benjamin", "Hughes", true));

//more optimized version with gender
function getFullNameVersion3(
  firstName,
  surName,
  useFormalName = false,
  gender = "male"
) {
  if (!firstName || !surName) {
        return "Please Dont forget to write your First Name and SurName";
    }
  const fullName = `${firstName} ${surName}`;
  if (useFormalName) {
    return gender.toLowerCase() === "female" ? `Lady ${fullName}` : `Lord ${fullName}`;
  }
  return fullName;
}
console.log(getFullNameVersion3("Annapurna", "Himal", true, "Female"));
console.log(getFullNameVersion3("Sagar", "Matha", true,"male"));
