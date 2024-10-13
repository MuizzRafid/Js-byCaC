"use strict";

//****** map method
var myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //this map is different from three.js Map()

var newNums = myNums.map(function (num) {
  return num + 10;
}); //console.log(newNums);
//***** Chaining: using two or more methods

var nNums = myNums.map(function (num) {
  return num * 10;
}).map(function (num) {
  return num + 1;
}) //this num=10 cause its comes from first method
.filter(function (num) {
  return num >= 40;
});
console.log(nNums);