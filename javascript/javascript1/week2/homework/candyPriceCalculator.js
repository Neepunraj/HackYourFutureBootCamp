const maxAmountToSpend = Math.floor(Math.random() * 100);
console.log("Max Amount to Spend in candy is " + maxAmountToSpend);
const PurchasedCandyPriceList = [];

/* making array */
const candyTypesList = ["Sweet", "Chocolate", "Toffee", "Chewing-gum"];
const candyPriceList = [0.5, 0.7, 1.1, 0.03]; //in grams

/* function to create new array of selected purchaseCandyPrice */
function addCandy(candyType, candyWeight) {
  let price = 0;
  if (candyTypesList.includes(candyType)) {
    let candyIndexNo = candyTypesList.indexOf(candyType);
    price = candyPriceList[candyIndexNo] * candyWeight;
  }
  PurchasedCandyPriceList.push(price);
}


/* calculating total candy price */
console.log("Purchased Candy Price List " + PurchasedCandyPriceList);
function totalAmountSpent() {
  let totalAmount = 0;
  let i = 0;
  while (i < PurchasedCandyPriceList.length) {
    totalAmount += PurchasedCandyPriceList[i];
    i++;
  }
  return totalAmount;
}

/* returning true or false */
function canBuyMoreCandy() {
  console.log("Total Amount Spent is " + totalAmountSpent());
  return totalAmountSpent() < maxAmountToSpend;
}

addCandy("Sweet", 20);
addCandy("Chocolate", 30);
addCandy("Toffee", 10);
addCandy("Chewing-gum", 100);
/* logging out can i buy more or not */
console.log(
  `I want to check if i Can Buy I More Candy ? \n 
  ${
    canBuyMoreCandy()
      ? `Yes can buy , your limit is ${maxAmountToSpend} DKK and you have spent ${totalAmountSpent()} DKK, you can still spend ${
          maxAmountToSpend - totalAmountSpent()
        } DKK`
      : `No You cant , you have reached your limit and you have spent ${
          maxAmountToSpend - totalAmountSpent()
        } DKK, you have exceeded your limit by ${
          totalAmountSpent() - maxAmountToSpend
        } DKK`
  }`
);
