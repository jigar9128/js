//Arithamatic oprator
let a = 5;
let b = 4;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);
console.log("a++ =", a++);
console.log("++a =", ++a);
console.log("a-- =", a--);
console.log("--a =", --a);
console.log("++b =", ++b);
console.log("b++ =", b++);
console.log("--b =", --b);
console.log("b-- =", b--);

//Assingment oprator

let Assingment = 1;
Assingment += 5;
console.log("a is now =", a);
Assingment -= 5;
console.log("a is now =", a);
Assingment *= 5;
console.log("a is now =", a);
Assingment /= 5;
console.log("a is now =", a);

//comparision oprator

let comp1 = 6;
let comp2 = "6  ";
console.log("comp1 == comp2 ", comp1 == comp2);
console.log("comp1 != comp2 ", comp1 != comp2);
console.log("comp1 == comp2 ", comp1 === comp2);
console.log("comp1 !== comp2 ", comp1 !== comp2);

//logical oprator

let x = 6;
let y = 7;
console.log(x < y && x == 6);
console.log(x < y || x == 6);
console.log(!false);
console.log(!true);

//Bitwise oprator

console.log(11 | 23);
console.log(14 & 12);

//Rest & Spread oprator
//Rest Array sathe
function addNumbers(a, b, c, ...other) {
  //Rest is use to print extra number useing (...)this was not declared
  console.log(other);
  return a + b + c;
}
const res = addNumbers(1, 2, 3, 4, 5, 6, 7);
console.log(res);

//Spread
//Array sathe
let names = ["jigar ", " nitya ", " jenil ", "madhav", "dax"];
function getNames(name1, name2, name3, name4, name5) {
  console.log(name1, name2, name3, name4, name5);
}
getNames(names[0], names[1], names[2], names[3], names[4]);
getNames(...names); //spred oprator no use kari ne (last output aapelo che aa spred oprator no che)
getNames(names); //normal rita

//Rest with object

const obj1 = {
  first: "jigar",
  second: "nitya",
  third: "jenil",
  fourth: "dax",
  fifth: "madhav",
};

// Using rest syntax to separate properties
const { ...rest } = obj1;
const { first, second, ...rest1 } = obj1;
console.log(first, rest1); // Output: "jigar"
console.log(second); // Output: "nitya"
console.log(rest); // Output: { third: "jenil", fourth: "dax", fifth: "madhav" }

//Optional chaining
//syntax: obj?.a?.b

let jigar = {
  nitya: {
    name: "jenil",
    name1: "madhav",
  },
};
console.log(jigar?.nitya?.name1);
//2 rit
let x1 = "jigar";
let y1 = "nitya";
console.log(jigar?.[x1]?.[y1]);
