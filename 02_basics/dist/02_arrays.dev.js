"use strict";

var marvel_heros = ["thor", "Ironman", "spiderman"];
var dc_heros = ["Superman", "flash", "batman"]; // marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//array takes any kinds of data.even it takes the whole array as an element
// console.log(marvel_heros[3][0]);
//concat combine two arrays and return new array

var allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //anothoer easy way to combine
//spread

var allHeros1 = [].concat(marvel_heros, dc_heros);
console.log(allHeros1);
var anoArr = [1, 2, 3, [4, 5], 6, [7, 8, [4, 5]]]; //flat:return an array of all sub-array elements concatenated into it
//recursively up to the specified depth

var useableArr = anoArr.flat(Infinity);
console.log(useableArr); //the Array.isArray(pass value) determine pass value array or not

console.log(Array.isArray("Muizz")); //Array.from() creates a new shallow-copied Array from iterable or
//array-like object

console.log(Array.from("Muizz")); //['M','u','i','z','z']

console.log(Array.from({
  name: "Muizz"
})); //interesting []
//it cant convert we have to say how to store like using key or values

var score = 100;
console.log(Array.of(score, 200, 300)); //[100,200,300]