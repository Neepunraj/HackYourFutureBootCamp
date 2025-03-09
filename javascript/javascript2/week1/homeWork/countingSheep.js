const shipStatus = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
function countShip(shipStatus) {
  let count = 0;
  shipStatus.forEach((eachShip) => {
    if (eachShip !== null && eachShip !== undefined && eachShip) {
      count++;
    }
  });
  return count;
}
console.log(countShip(shipStatus));
