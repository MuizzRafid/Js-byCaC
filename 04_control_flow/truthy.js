//truthy values and falsey values

const email = "mzrd@gmail.com";

if (email) {
  // console.log("got user email");
} else {
  console.log("Don't have user email");
}

//*****falsey values*****

//flase,0,-0, bigint(0n),"",null,undefined,NaN

//else ****truthy values*** like
//"0","flase"," ",[],{},function(){}
//anything inside string truthy,empty array,object and function is truthy

if ([]) {
  //console.log("empty array truthy");
}
if ({}) {
  //console.log("empty object truthy");
}
if (function () {}) {
  //console.log("empty function truthy");
}

//         ********** to find Array and Object is empty or not

const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("Array is empty");
}
const emptyObject = [];
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

//*** Nullish Coalescing Operator(??):null undefined */

//return its right-hand side operand when its left-ahdn side operand is
//null or undefined,and otherwise returns its left-hand side operand.

let x,
  y = 3;

var z = x ?? y;
//console.log(z);

function a() {
  console.log("a here");
  return undefined;
}
function b() {
  console.log("b here");
  return false;
}
function c() {
  console.log("c here");
  return "foo";
}

console.log(a() ?? c()); //a here,c here ,foo
//interesting at first a here print then it get undefined so it
//goes for c to evaluate and print c here , foo
console.log(b() ?? c()); //b here flase
//but b() has no undefined or null so after print b here it not
//goes for

// *** Ternery Operator
//condition ? true : false

const iseP = 100;

iseP <= 80 ? console.log("Less than 80") : console.log("Greater than 80");
