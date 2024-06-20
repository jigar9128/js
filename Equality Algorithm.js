//loosly equality algorithem

console.log("1" == 1); // true
console.log(true == 0); // false
console.log(false == 0); // true

//strict equality algorithem

console.log("1" === 1); // false
console.log(false === 0); // false

console.log(1 === 1); // true
console.log(false === false); // true

//Same Value Equality Algorithm

console.log(NaN === NaN); // false
Object.is(NaN, NaN); // true  solve using Object.is()

//Same Value Zero Equality Algorithm

function sameValueZero(x, y) {
  if (typeof x === "" && typeof y === "6") {
    // x and y are equal (may be -0 and 0) or they are both NaN
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
