"use strict";

var score = undefined; // console.log(typeof score);
// console.log(typeof (score));

var valueInNumber = Number(score); // console.log(typeof valueInNumber);
// console.log(valueInNumber);
//To Number
//"33"=>33,""=>0, "33abc"=>NaN,true=>1,false=>0,null=>0,undefined=>NaN

var isLogedIn = 32423;
var boolIsLoggedIn = Boolean(isLogedIn); // console.log(boolIsLoggedIn);
//To Boolean
//1=>true,0=>false,""=>false,"afa"=>true,1432=>true

var someNumber = "";
var stringNumber = String(someNumber); // console.log(stringNumber);
// To String
//33=>"33", true=>"true"
//***********Operation*************

var value = 3;
var negValue = -value; // console.log(negValue);

console.log(Math.pow(2, 3)); //2^3
// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log(1+2+"2");//32 if number first then operation will done
// console.log("1"+2+2);//122 if string first all will convert into string
// console.log(1+"2"+2);//122

console.log(+true); //1 + help to convert boolean true to 1
// console.log(true+);//error

console.log(+""); //0

console.log(+"abd"); //NaN