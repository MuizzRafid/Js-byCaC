//two ways to declare object.1literal way 2.constructor way
//you can add also two ways
//3.with new keyword,4.using Object.create();

//singleton makes when object declare constructor way

//object literals

const mySym=Symbol("key1");// for Symbol the syntax is different

const JsUser={
    name: "Muizz",
    "full name":"Muizz Rafid",
    [mySym]:"mykey1",
    age: 23,
    location:"Dhaka",
    email:"muizzrafid1@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//2 ways to get value.i cant use first way for full name.so 2nd way is good. 
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);//mykey1

JsUser.email="mzrd1@gmail.com";
//Object.freeze(JsUser);
JsUser.email="muizzrd1@yahoo.com";

//console.log(JsUser);

JsUser.greeting= function(){
console.log("hello Js User");
}
JsUser.greetingtwo= function(){
    console.log(`Hello user ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



//objects are mutable.Objects are addressed by reference not by value.

const person={
    firstName:"Jwelry",
    lastName:"Downey",
    age:3
}
const x=person;
console.log(person.age);
x.age=4;
console.log(person.age);

