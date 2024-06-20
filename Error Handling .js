// setTimeout(() => {
//   console.log("hello!");
// }, 1000);
// try {
//   console.log(parva);
// } catch (error) {
//   console.log("yo yo honysign  " + error);
// }
// setTimeout(() => {
//   console.log("how");
// }, 2000);
// setTimeout(() => {
//   console.log("are you ?");
// }, 3000);
// setTimeout(() => {
//   console.log("guy");
// }, 4000);

try {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age > 150) {
    throw new ReferenceError("this is probebly not true");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {
  // Finally aa program successfully run thai gyo che aa dekhadva mate
  // jo tame try na half run karso to pan finallyto run thase j
  console.log("The script is still runing"); //finally is use for complete a program
}

//--------------------------TYPES OF ERROR------------------------//
/*ReferenceError:which is not present 
SyntaxError:show typing mistake
TypeError:show Data type error
EvalError:This error is call when eval()is call
RangeError:a RangeError is throw when trying to pass a value as an argument to a fn that doesn't allow a range that includes a value
URIError:when wrong character is used in URI
internalerror:In the JS engine,this error occurs most often when there is too much dataand the stack execeed its cricital size
*/

//--------------------------ReferenceError------------------------//
// a();

//--------------------------SyntaxError------------------------//

// if({

// }

//--------------------------TypeError------------------------//
// let obj;
// console.log(obj.name);
//--------------------------RangeErrorr------------------------//
let arr = new Array(-1);
//--------------------------URIError  ------------------------//
