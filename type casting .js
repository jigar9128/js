//number + boolean

let resultone = "23" + true;
console.log(resultone);
//23true

//string + boolean or numeric string + boolean

let resulttwo = "jigar" + false;
console.log(resulttwo);
//jigarfalse

let resulttwo2 = "1" + true;
console.log(resulttwo2);
//1true

//number / boolean

let resultthree = "23" / true;
console.log(resultthree);
//23

//string / boolean

let resultfour = "jigar" / false;
console.log(resultfour);
//NaN

//number , null

let resultfive = 1 / null;
console.log(resultfive);
//when number / null result = Infinity , when string / null result = NaN

let resultsix = 1 + null;
console.log(resultsix);
//we use (=,-,*,) then result is 1

let resultseven = 1 + undefined;
console.log(resultseven);
//when number (+,-,*,/) undefined result = NaN
//when null (+,-,*,/) undefined result = NaN
//when boolean (+,-,*,/) undefined result = NaN

//string to a number

const result = Number("1");
console.log(result);
//result = 1
