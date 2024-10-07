"use strict";

function sayMyName() {
  console.log("Muizz Rafid");
} //sayMyName();


function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

function addTwoNumbers2(number1, number2) {
  return number1 + number2;
} // addTwoNumbers(3,5);//8
// addTwoNumbers(3,"4");//34
//let result=addTwoNumbers(3,5);
//console.log("My result 1:",result);//My result 1:undefined


result = addTwoNumbers2(3, 5); //console.log("My result 2:",result);//My result 2:8

function loginUserMessege(username) {
  if (!username) {
    return "Please enter a username";
  }

  return "".concat(username, " just logged in");
} // console.log(loginUserMessege("muizz"));//muizz just logged in
// console.log(loginUserMessege());//please enter a username

/*
rest operator(...) or spread operator(...) named different on diff uses
for rest:(...) it allows to represent an indefinite number of argurments as an 
array.The rest parameter must be that parameter in a function's parameter list
*/
// ** REST operator(...)


calculateCartPrice = function calculateCartPrice(val1) {
  for (var _len = arguments.length, num1 = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    num1[_key - 1] = arguments[_key];
  }

  return num1;
}; //console.log(calculateCartPrice(200,400,500,600));//[400,500,600]


var user = {
  userName: "muizz",
  price: 199
};

function handleObject(anyobject) {
  console.log("Username is ".concat(anyobject.userName, " and price is ").concat(anyobject.price));
}

handleObject(user); //Passing direct object

handleObject({
  userName: "Downey",
  price: 200
});
var myArr = [200, 400, 500, 600];

function handleArray(getArray) {
  return getArray[2];
}

console.log(handleArray(myArr)); //Passing direct Array

console.log(handleArray([900, 800, 700, 100]));
/*
// ****** Try to use all the loops

takeArray = function (arr) {
  const gArr = Object.entries(arr);
  for (let [key, value] of gArr) {
    console.log("Entries", value);
  }

  arr.forEach((e) => {
    console.log("for Each", e);
  });

  for (let ar in arr) {
    console.log("for In", arr[ar]);
  }
  let keys = Object.keys(arr);
  for (let key of keys) {
    console.log("Object.keys()", arr[key]);
  }

  let values = Object.values(arr);
  for (let value of values) {
    console.log("Object.values()", value);
  }
};

*/