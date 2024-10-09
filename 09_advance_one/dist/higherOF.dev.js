"use strict";

//A function which takes another function as an argument or return a function
//from it is know as higher order function
function x() {
  console.log("hellow");
} //here y is the higher order function and x is callback function


function y(x) {
  x();
}

y(x);
var raidus = [3, 1, 2, 4]; //in this case area  circumference are callback function ,

var area = function area(radius) {
  return Math.PI * radius * radius;
};

var circumference = function circumference(radius) {
  return 2 * Math.PI * radius;
};

var calculate = function calculate(radius, logic) {
  var output = [];

  for (var i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};

Array.prototype.calculatee = function (logic) {
  var output = [];

  for (var i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }

  return output;
}; //console.log(calculate(raidus, area));
//console.log(raidus.calculatee(area));
//console.log(raidus.map(area));
//console.log(calculate(raidus, circumference));

/* ***others example of higher order function
//use this on browser (takes a function)

function greet(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  console.log(callback(name));
}


processUserInput(greet);



//    return a function 
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const twice = multiplier(2);
console.log(twice(5));
*/