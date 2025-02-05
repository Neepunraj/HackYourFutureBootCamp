
console.log("=====Checking Hose Rent ====")

function housePriceChecker(
  length,
  bredth,
  height,
  gardenArea,
  paidPrice,
  name
) {
  const volume = length * bredth * height;
  const housePrice = volume * 2.5 * 1000 + gardenArea * 300;
  
  if (paidPrice > housePrice) {
    console.log(`Oh no  ${name},you have paid too much for your rent, You Paid, ${paidPrice - housePrice} more then the Actual Price`);
  } else {
    console.log(`Just Chill ${name} you have not paid much for your house! Invest on Some More Assests`);
  }
}
//peters housePrice Checker
housePriceChecker(8, 10, 10, 100, 2500000, "Peter");

// julia housePriceChecker
housePriceChecker(5, 11, 8, 70, 1000000, "Julia");
