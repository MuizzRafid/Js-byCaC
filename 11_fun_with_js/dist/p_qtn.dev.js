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

var myString = "offer gets ready";
var have = "New!";
var result = myString.startsWith(have);

if (result) {
  console.log("ture");
} else {
  myString = have.concat(" ", myString);
} //console.log(myString);
//another way


var addNew = function addNew(str) {
  return str.indexOf("New!") === 0 ? str : "New! ".concat(str);
}; //console.log(addNew("New! Offers"));
//05.question:write a js program to create a new string from a given string taking the first 3 char
//and the last 3 char of a string and adding them together .The string length must be 3 or more if
//not , the original string is returned.


var str = "july";

if (str.length < 4) {//console.log(str);
} else {
  var _result = str.slice(0, 3).concat(str.slice(str.length - 3, str.length)); //console.log(result);

} //another way


var makeNewString = function makeNewString(str) {
  return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
}; //console.log(makeNewString("abcef"));
//06.question:write a js program to extract the first half of a string of even length.


var firstHalf = function firstHalf(str2) {
  return str2.length % 2 == 0 ? str2.slice(0, str2.length / 2) : "not even length";
}; //console.log(firstHalf("jjjkdekd"));
//07.question:write js program to concatenate two string except their first character.


var concateTwo = function concateTwo(str1, str2) {
  return str1.slice(1) + str2.slice(1);
};

console.log(concateTwo("july", "downey"));