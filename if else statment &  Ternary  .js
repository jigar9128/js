// if
let a = prompt("enter your number");
a = Number.parseInt(a); //Converting a string to a number
if (a > 0) {
  alert("valid number"); //popup in browser or chrome
}

//if else
if (a > 0) {
  alert("valid number"); //popup in browser or chrome
} else {
  alert("invalid number"); //popup in browser or chrome
}

//if else if

if (a < 0) {
  alert("invalid age");
} else if (a > 10 && a <= 25) {
  alert("you are a young");
} else if (a > 25 && a <= 50) {
  alert("you are a father");
} else {
  alert("you are a old");
}

//Ternary oprator

console.log(a > 50 ? "you are old" : "you are young");
