"use strict";

//Immediately Invoked Function Expression(IIFE)
//function immediately execute
//syntax: ()() >1st parenthesis for defination ,2nd for execution
//** Syntax:1
(function chai() {//console.log(`DB CONNECTED`);
})(); //semicolor is mendatory to stop the line


(function (name) {//console.log(`DB CONNECTED TOO ${name}`);
})("Muizz"); // *** Syntax:2


(function hello(value) {
  console.log("".concat(value));
})("Rafid"); //hello("rr"); //gives an error, i can't call it
// **** The Common Uses of IIFE

/*
all iife functions are encapsulated.so its obviously a use.but other
common uses are:
1.Module Pattern
2.Closure
*/
//Module


var Mymodule = function () {
  function privateFun() {
    return "Hey!I am private";
  }

  return {
    publicFun: function publicFun() {
      return "Hey!I am public";
    }
  };
}();

console.log(Mymodule.publicFun()); //Closure

var counter = function () {
  var count = 0;
  return function () {
    return ++count;
  };
}();

console.log(counter()); //1

console.log(counter()); //2

console.log(counter()); //3

function hell() {
  var c = 0;
  return function () {
    return ++c;
  };
} //console.log(hell());//gives function(annonymous)
//because i loged in the function directly.but i should loged what i get
//in return.This is also a code of closure


var giveHell = hell();
console.log(giveHell());
console.log(giveHell());