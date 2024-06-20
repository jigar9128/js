//Array method

/*
string 
join
pop
push
shift
unshift
*/

//-----------------string---------------//
//syntex:- (obj.tostring) na upyog thi object na string ma farvi sakay che
// let num = [1, 2, 3, 4, 5];
// let b = num.toString();
// console.log(b, typeof b);

// //-----------------join---------------//
// //join thi aapde array na element vache kai pan print kaaravu hoy ex(*,_,and,or,not etc..)to aapde aana print karavi sakiye chiye
// let num1 = [1, 2, 3, 4, 5];
// console.log(num1, typeof num1); //aama string ma nathi farvyo aatle aano type object j rahesa
// let c = num1.join("  and ");
// console.log(c);

// //-----------------pop---------------//
// //pop na use thi jyare aadpde final output joiye chiye to aaray no last word or no. or leter aa nikdi jay che aane new array print thay che
// let num2 = [1, 2, 3, 4, 5];
// num2.pop();
// console.log(num2, r);
// var r = num2.pop(); //new ex of hoisting
// console.log(num2, r);

// //-----------------push---------------//
// // 'Object.push' kari ne je pan "()" ni andar lakhe su aa array ni end ma print thai aane aani baju ma aani new length aavi jase
// let num3 = [1, 2, 3, 4, 5];
// let q = num3.push(9); //push return a new array length
// console.log(num3, q);

// //-----------------shift()---------------//
// let num4 = [1, 2, 3, 4, 5];
// let w = num4.shift(); //remove first array element form the array and print new array ("without first element ")
// console.log(num4, w);

// //-----------------unshift()---------------//
// let num5 = [1, 2, 3, 4, 5];
// let t = num5.unshift(57); //array ma starting ma value muke che
// console.log(num5, t);

//=========================================string Methode================================//

/*
length 
toUpperCase
toLowerCase
slice :- slice thi aapde  koi pan 2 no. nakhi aane aa no. ma katla leter aave che aa joi sakiye chiye 
replace :- using replace you can replace your text, ex.(line no. 61)
concat :- using concat you can joint two text
trim :- using trim you can remove all spaces from your string 
using trim right you can remove spaces form the strin which can in right side
same as using trim left 
*/

let a = "jigarparmar";
let b = "nitya";
let c = "      nitya       ";
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.slice(2, 6));
console.log(a.replace("jigarparmar", "nitya"));
console.log(a.replace("jigarparmar", "nitya"));
console.log(a.concat(" is a friend of ", b));
