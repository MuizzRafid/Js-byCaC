/*
A higher-order function is a function that either:

Takes one or more functions as arguments, or
Returns a function as its result.
Higher-order functions rely on the fact that functions are first-class, meaning you can pass them 
as arguments or return them.


*/

const radius = [3, 1, 2, 4];

function cicumference(r) {
  return 2 * Math.PI * r;
}
function area(r) {
  return Math.PI * r * r;
}

const calculate = function (tocal, len) {
  const output = [];
  for (let i = 0; i < len.length; i++) {
    let result = tocal(len[i]);
    output.push(result);
  }
  for (let i = 0; i < len.length; i++) {
    console.log(output[i]);
  }
};

calculate(area, radius);
