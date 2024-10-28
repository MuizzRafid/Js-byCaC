"use strict";

//01:question: write a javascript Program to get the extension of a filename.
var getFileExtension = function getFileExtension(str) {
  return str.slice(str.lastIndexOf("."));
}; //console.log(getFileExtension("index.html"));
//02:question:replace every charecter in a given string with the charecter follwing it in the alphabet
//String.fromCharCode
//charCodeAt


var moveCharsForward = function moveCharsForward(str) {
  return str.split("").map(function (_char) {
    return String.fromCharCode(_char.charCodeAt(0) + 1);
  }).join("");
};

console.log(moveCharsForward("z")); //03:question:write a javascript program to get the current date

var date = new Date();
console.log(date.toLocaleString());

var formateDate = function formateDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var days = date.getDate(); //

  var months = date.getMonth() + 1; //its 0-11

  var years = date.getFullYear();
  return "".concat(days, "/").concat(months, "/").concat(years);
};

console.log(formateDate()); //04.question: write a javascript program to create a new string adding "New!" in front of a given string.
//if the given string begins with "New!" already then return the original string.