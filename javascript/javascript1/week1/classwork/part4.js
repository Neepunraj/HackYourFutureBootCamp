console.log("====Part 4====")

const orderNumber2 = [1,2,2]
const orderNumber3 = [3,4,4]
const orderNumber4 = [0,0,0]
/* 20% discount on first order */
let totalPrice2 = Pizzaprices[orderNumber2[0]] + Pizzaprices[orderNumber2[2]]+Pizzaprices[orderNumber2[2]]
console.log("total Price before discount and all : ",totalPrice2)
console.log("============")
let discountedAmount  = Pizzaprices[orderNumber2[0]] * 0.2
console.log("the discounted Amount is ", discountedAmount)
console.log('Total Price Before discount')
console.log("Total Price:", totalPrice2, "DKK")
totalPrice2 = totalPrice2- discountedAmount
console.log("after Discount total price is", totalPrice2)
const addPlasticBags = true

/* add plastic */
if(addPlasticBags){
    const PlasticBagsPrice = 5
    totalPrice2 += PlasticBagsPrice
}
console.log("final Price after adding plastic:", totalPrice2)
let deliveryfee = 0
if(totalPrice2<=300){
    deliveryfee = 50
    totalPrice2 += deliveryfee
    console.log('delivery fee is included:',deliveryfee,"DKK",)
}
console.log("indcluding deliveyr fee, total porder is ", totalPrice2)

/* adding vat */
let vat   =  totalPrice2 * 0.25

let finalPrice = totalPrice2+ vat
console.log("finalPrice after vat is :", finalPrice, "Dkk")