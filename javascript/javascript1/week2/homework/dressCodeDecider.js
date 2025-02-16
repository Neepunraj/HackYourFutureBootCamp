function dressCodeGenerator(temperature) {
  if (temperature <= 0) {
    return "Down Jacket and Mittens and Woolen Sweaters";
  } else if (temperature > 0 && temperature <= 10) {
    return "Hoodies, Jacket and Gloves";
  } else if (temperature > 10 && temperature <= 20) {
    return "Light Jacket and Sweater , joggers";
  } else if (temperature > 20 && temperature <= 30) {
    return "T-shirt , Kurtha, linen Cotton Shirt , Shorts , hemp pants, yoga pants or harem pants";
  } else {
    return "light shirts , bamboo shirts and organic cotton pants, cotton shirts, shorts, harem pants";
  }
}
const degreeOutside = 35;
console.log(
  `its ${degreeOutside} degree outside so you can wear any of  ${dressCodeGenerator(
    degreeOutside
  )}`
);
