console.log("=====Part 3===")
const pizzas= ["Margherita Pizza","Pesto Pizza ","Pepperoni Pizza","BBQ Chicken Pizza","White Pizza","Meat Lover's Pizza"]
const Pizzaprices= [90,120,120,130,110,135]
console.log("#1",pizzas[0],Pizzaprices[0],"DKK")
console.log(typeof(pizzas))


/* starting code  */

let owner = "Carlo"
console.log(owner)
owner = "Maria"
console.log(owner)
const restrurantName = "Carlo's Pizzaria"
console.log(restrurantName)
console.log("Our Menu")
console.log("#1",pizzas[0],Pizzaprices[0],"DKK")
console.log("#2",pizzas[1],Pizzaprices[1],"DKK")
console.log("#3",pizzas[2],Pizzaprices[2],"DKK")
console.log("#4",pizzas[3],Pizzaprices[3],"DKK")
console.log("#5",pizzas[4],Pizzaprices[4],"DKK")
console.log("#6",pizzas[5],Pizzaprices[5],"DKK")

const order = [0,1,1,2,4]
const totalPrice = Pizzaprices[order[0]]+Pizzaprices[order[1]]+Pizzaprices[order[2]]+Pizzaprices[order[3]]+Pizzaprices[order[4]]

console.log(totalPrice)
