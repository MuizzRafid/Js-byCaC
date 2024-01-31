"use strict";

// ****for in loop
// forin in object
var myObj = {
  js: "JavaScript",
  cpp: "C Plus Plus"
};

for (var key in myObj) {
  //key is a array so i use myObj[key]
  console.log("".concat(key, " means ").concat(myObj[key]));
}
/*
console.log(myObj.key)//gives undefined cause there has not key as named "key"


If you try to use myObj.key instead, JavaScript will attempt to access a property
named "key" on the myObj object, rather than dynamically accessing the property 
whose name is held in the variable key. Since there's no such property named "key"
in your object literal, myObj.key will return undefined.
*/
//forin in Array


var myArr = ["js", "python", "java"];

for (var _key in myArr) {
  console.log("".concat(_key, " : ").concat(myArr[_key]));
} //*** We can't use it on Map */