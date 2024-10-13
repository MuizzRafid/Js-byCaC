"use strict";

/*
A higher-order function is a function that either:

Takes one or more functions as arguments, or
Returns a function as its result.
Higher-order functions rely on the fact that functions are first-class, meaning you can pass them 
as arguments or return them.


*/
var radius = [3, 1, 2, 4];

function cicumference(r) {
  return 2 * Math.PI * r;
}

function area(r) {
  return Math.PI * r * r;
}

var calculate = function calculate(tocal, len) {
  var output = [];

  for (var i = 0; i < len.length; i++) {
    var result = tocal(len[i]);
    output.push(result);
  }

  for (var _i = 0; _i < len.length; _i++) {
    console.log(output[_i]);
  }
};

calculate(area, radius);