"use strict";

var arr = [5, 1, 3, 2, 8, 4]; // Double-[10,2,6,4,12]
// Triple -[15,3,9,6,18]

function _double(x) {
  return x * 2;
} // ***** map basically maping each values ,it can play with those values and creating a new array  of
//those valeus and returning it


var output = arr.map(_double);
console.log(output); // *** filter function is used to filter values based on some ligic.
//filter odd values

function isOdd(x) {
  return x % 2 == 1;
}

var output2 = arr.filter(isOdd);
console.log(output2); //  ***** reduce is used for lots of values of an array and come out with a single value
//to get sum or maximum number or minimum number
//basic function

function findSum(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(findSum(arr)); //covert to reduce
//Tow Parameter 1)callback function 2)initial value of accumulator
//callback p1:accumulate those value or result what we going to get
//callback p2:values of the array

var output3 = arr.reduce(function (accumolator, current) {
  accumolator = accumolator + current;
  return accumolator;
}, 0);
console.log(output3); // find maximun value in array using reduce()

var max = arr.reduce(function (acc, cur) {
  if (cur > acc) {
    acc = cur;
  }

  return acc;
}, 0);
console.log(max); //    ** UNDERSTAND MAP() FILTER() REDUCE() WITH MORE EXAMPLES

var users = [{
  firstName: "july",
  lastName: "mota",
  age: 5
}, {
  firstName: "donald",
  lastName: "trump",
  age: 75
}, {
  firstName: "elon",
  lastName: "musk",
  age: 50
}, {
  firstName: "akshay",
  lastName: "saini",
  age: 26
}, {
  firstName: "ben",
  lastName: "eric",
  age: 26
}];
var output4 = users.map(function (x) {
  return x.firstName + " " + x.lastName;
});
console.log(output4); // find it [5:1,26:2,50:1,75:1]

var output5 = users.reduce(function (acc, cur) {
  if (acc[cur.age]) {
    acc[cur.age] = ++acc[cur.age]; //behind:acc['26']=++1;
  } else {
    acc[cur.age] = 1;
  }

  return acc;
}, {});
console.log(output5); //find out first name whon age is less then 30
//i can use chain

var output6 = users.filter(function (x) {
  return x.age < 30;
}).map(function (x) {
  return x.firstName;
});
console.log(output6); //hw : do the same thing using only reduce
//poliphe of map filter redue

var index = 0;
var output7 = users.reduce(function (acc, cur) {
  if (cur.age < 30) {
    acc[index] = cur.firstName + " and age: " + cur.age;
    index++;
  }

  return acc;
}, {});
console.log(output7);