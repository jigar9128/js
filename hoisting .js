//Following two line will run successfully due to javascript hoisting
console.log(a);
greet();
function greet() {
  console.log("Good night");
}
var a = 9; //Declaration hoisted to the top but initialization not
//jo aapde let or const lakhsu var ni jagya aa to pela error aavse ke "a" initialization karo
console.log(a);
function fact(n) {
  const m = n;
}
if (n <= o) {
  return 1;
}
return m * fact((m = 1));
