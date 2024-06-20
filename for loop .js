//for loop
let sum = 0;
let n = prompt("Enter a value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  console.log(i + 1, "+");
}
console.log("Sum of first natural", +n + "  number is " + sum);

//for in
let obj = {
  jigar: 79,
  shubh: 33,
  nitya: 78,
  jenil: 60,
};

console.log(obj.jigar); //koi pan ek vastu output ma print karva mate
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]); // obj ni andar ni badhi j vastu sathe print thay
}
//for of
for (let b of "jigar R parmar ") {
  console.log(b);
}
