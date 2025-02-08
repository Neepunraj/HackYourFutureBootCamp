console.log("====Human Age Checker====")
/* human age calculator */
const yearOfBirth = 1994;
const yearFuture = 2027;

const age = yearFuture - yearOfBirth;
console.log(`You will be ${age}, years old in ${yearFuture}`);

/* dog age calculator */
console.log("===dog Age Checker===")
const dogYearOfBirth= 2035
const dogYearFuture = 2045
let dogYear = dogYearFuture - dogYearOfBirth
const shouldShowresultInDogsYear = true
if(shouldShowresultInDogsYear){
    dogYear *= 7
    console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture);
}else{
   
    console.log("Your dog will be",dogYear,"Human years old in ", dogYearFuture)

}