"use strict";

/*
There are 3 Types of scope:
1.global scope(for browser its called window)
2.Funcional scope
3.block scope(if..else,forloop)

var:has functional scope
let and const:has block scope
*/
var c = 300; //c is a global variable

var a = 100; //block scope

{
  var _a = 10;
  var b = 20;
  var c = 30; //console.log("inner a:",a);
} //console.log(a);//error
//console.log(c);//i can print this outside of the scope cause the functional
//scope it counts is global as its function scope

function fscope() {
  var cc = "log me";
} //console.log(cc);//give me error cause here i define a functional scope for cc


function scopeExample() {
  if (true) {
    var aa = "aa here";
    var bb = "bb here";
    console.log(aa);
  } //console.log(aa); //error cause outside of block


  console.log(bb);
} //console.log(bb);//error cause outside of function


scopeExample();

function one() {
  var userName = "Muizz";

  function two() {
    var email = "mzrd1@gmail.com"; //console.log("call ones property inside two: ",userName);//sucessfully print
  }

  two();
  return userName;
}

one();

if (true) {
  var username = "muizz ";

  if (username.trim() === "muizz") {
    var web = "youtube"; // console.log(username+web);//muizz youtube
  } // console.log(web);//error

} //***************       Interstring          ************
//2ways declare function


console.log(addOne(5)); //no error for before declaration

function addOne(num) {
  return num + 1;
} //addTwo();//gives error when call before declaration
//this declaration also called expression


var addTwo = function addTwo(num) {
  return num + 2;
}; //to learn more study hoisting(why we declare function before initialize but not expression?)