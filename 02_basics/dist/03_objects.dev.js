"use strict";

var _JsUser;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//two ways to declare object.1literal way 2.constructor way(new keyword)
//you can add also two ways
//3.with new keyword,4.using Object.create();
//singleton makes when object declare constructor way
//object literals
var mySym = Symbol("key1"); // for Symbol the syntax is different

var JsUser = (_JsUser = {
  name: "Muizz",
  "full name": "Muizz Rafid"
}, _defineProperty(_JsUser, mySym, "mykey1"), _defineProperty(_JsUser, "age", 23), _defineProperty(_JsUser, "location", "Dhaka"), _defineProperty(_JsUser, "email", "muizzrafid1@gmail.com"), _defineProperty(_JsUser, "isLoggedIn", false), _defineProperty(_JsUser, "lastLoginDays", ["Monday", "Saturday"]), _JsUser); //2 ways to get value.i cant use first way for full name.so 2nd way is good.
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//mykey1

JsUser.email = "mzrd1@gmail.com"; //Object.freeze(JsUser);

JsUser.email = "muizzrd1@yahoo.com"; //console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello Js User");
};

JsUser.greetingtwo = function () {
  console.log("Hello user ".concat(this.name));
};

console.log(JsUser.greetingtwo());
console.log(JsUser.greeting());
/*
console.log of greeting print hello js user.
but what console.log(JsUser.greeting()) print??//undefined

In JavaScript, when a function does not have an explicit return 
statement, it implicitly returns undefined. In your code, the greeting
method of the user object does not have a return statement, so it 
returns undefined by default.
When you call console.log(Jsuser.greeting()), the jsuser.greeting() part executes
the greeting method, which logs "hello every one!" to the console. However,
since there is no explicit return statement in the greeting method, it 
implicitly returns undefined. Therefore, console.log(jsuser.greeting()) effectively
becomes console.log(undefined), and that's why you see undefined in the 
output.
*/

JsUser.greeting();
/*
You won't get undefined in the output because you are directly calling the jsuser.
greeting() function, and it logs "hello everyone!" to the console. The console.log
itself does not return a value, so there is no undefined to be printed in this case. 
If you only call the function without wrapping it in a console.log, you won't see 
any output related to the return value of the function.
The undefined in the original example occurred when you tried to log the result of 
jsuser.greeting() directly using console.log(jsuser.greeting()), and since the print method 
did not explicitly return anything, it implicitly returned undefined

*/

var person = {
  firstName: "Jwelry",
  lastName: "Downey",
  age: 3
};
var x = person;
console.log(person.age);
x.age = 4;
console.log(person.age);