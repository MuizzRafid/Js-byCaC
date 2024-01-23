"use strict";

var user = {
  userName: "Muizz",
  price: 999,
  welcomeMessege: function welcomeMessege() {
    console.log("".concat(this.userName, ", Welcome to website")); //  console.log(this);
  }
}; // user.welcomeMessege();//Muizz, we....
// user.userName="Sam";
// user.welcomeMessege();//Sam, welcome.....
//console.log(this);//{} ,result is an empty object

/*
Three types of function.1)function declaration,2)function expression
3)arrow function...

function declaration vs function expression
1.can access before | can access after function defination
2.declaration are hoisted | expression are not hoisted.


*/

one();

function one() {
  var userName = "Muizz"; // console.log(this.userName);//undefined
  // console.log(this);//gives Object[global]
}

var two = function two() {
  var userName = "Muizz"; // console.log(this.userName);//undefined
  // console.log(this);//give Object[global]
};

two();

var three = function three() {
  var userName = "Muizz"; // console.log(this.userName);//undefined
  // console.log(this);//gives {} empty object
};

three(); // **************** Ways to write arrow function **************
//NO:1

var addTwo = function addTwo(num1, num2) {
  return num1 + num2;
};

console.log(addTwo(4, 5)); //NO:2 implicit return
//const addThree = (n1,n2,n3) =>  n1+n2+n3;
//console.log(addThree(1,2,3));
//NO:3

var addThree = function addThree(n1, n2, n3) {
  return n1 + n2 + n3;
};

console.log(addThree(1, 2, 3)); // ** Return an object

var returnObj = function returnObj() {
  return {
    username: "Muizz"
  };
};

console.log(returnObj());