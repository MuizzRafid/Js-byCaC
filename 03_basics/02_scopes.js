/*
There are 3 Types of scope:
1.global scope(for browser its called window)
2.Funcional scope
3.block scope

*/

var c = 300; //c is a global variable
let a = 100;
//block scope
{
  let a = 10;
  const b = 20;
  var c = 30;
  //console.log("inner a:",a);
}

//console.log(a);//error
//console.log(c);//i can print this outside of the scope and its a problem

//console.log("outter a:",a);

function one() {
  let userName = "Muizz";
  function two() {
    let email = "mzrd1@gmail.com";
    //console.log("call ones property inside two: ",userName);//sucessfully print
  }
  two();
  return userName;
}
one();

if (true) {
  const username = "muizz ";
  if (username.trim() === "muizz") {
    const web = "youtube";
    // console.log(username+web);//muizz youtube
  }
  // console.log(web);//error
}

//***************       Interstring          ************
//2ways declare function

console.log(addOne(5)); //no error for before declaration

function addOne(num) {
  return num + 1;
}

//addTwo();//gives error when call before declaration

//this declaration also called expression
const addTwo = function (num) {
  return num + 2;
};

//to learn more study hoisting(why we declare function before initialize but not expression?)
