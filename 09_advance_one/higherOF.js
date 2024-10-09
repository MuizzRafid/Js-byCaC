//A function which takes another function as an argument or return a function
//from it is know as higher order function

function x() {
  console.log("hellow");
}

//here y is the higher order function and x is callback function
function y(x) {
  x();
}

y(x);

const raidus = [3, 1, 2, 4];

//in this case area  circumference are callback function ,
const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

Array.prototype.calculatee = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
//console.log(calculate(raidus, area));
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
