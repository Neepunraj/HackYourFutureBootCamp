let class07Students = [];
// asumming studentName always starts with Capital letter to avoid toLowerCase()
function addNewStudentToClass(studentName) {
  if (!studentName) {
    console.log("Please Enter a valid Name");
  } else if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class");
  } else if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("Cannot add more than 6 students to class 07");
  } else if (class07Students.length >= 6 && studentName === "Queen") {
    class07Students.pop();
    class07Students.push(studentName);
    console.log("Student " + studentName + " is added to the class");
  } else {
    class07Students.push(studentName);
    console.log("Student " + studentName + " is added to the class");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
console.log("Number of Students in the class is " + getNumberOfStudents());
console.log("Adding New Student to the class and Checking");
addNewStudentToClass("Benjamin");
addNewStudentToClass("Himal");
addNewStudentToClass("Neepun");
addNewStudentToClass("Suman");
addNewStudentToClass("Neepun");
addNewStudentToClass("SagarMatha");
addNewStudentToClass("Annapurna");
addNewStudentToClass("Manang");
addNewStudentToClass("Queen");
addNewStudentToClass("Mustang");
addNewStudentToClass("Queen");
console.log(
  "Number of Students in the class after adding is  " + getNumberOfStudents()
);
console.log("student to the class are " + class07Students);
