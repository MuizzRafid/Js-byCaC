const user = {
  userName: "Muizz",
  password: 1234,
  email: "mz@gmail.com",
  getUserDetails: function () {
    console.log(`${this.userName}`);
    console.log(this);
  },
};

//console.log(user.getUserDetails());

//console.log(this);

function anoUser(userName, loginCount, isLogedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLogedIn = isLogedIn;

  return this;
}

//*****With out new keyword the object and instance is same.so it just change values
// const one=anoUser("Muizz",8,true);
// console.log(one);
// let two=anoUser("Rafid",2,false);
// console.log(one);

//****with New key it creates a new instance of that type object of the function
const oneUser = new anoUser("july", 33, false);

//console.log(oneUser instanceof anoUser);
//console.log(oneUser instanceof Object);
console.log(Object);

//                           *** By Apna college

//                 **** work on proto__type

const student = {
  fullName: "july",
  marks: 95.5,
  printMraks: function () {
    console.log("Marks= ", this.marks);
  },
};

const employee = {
  calTax() {
    console.log("tax rate  is 10% =", (this.salary * 10) / 100);
  },
};

const july = {
  salary: 5000,
};

july.__proto__ = employee;

//july.calTax();
//                         creating constructor
class toyotaCar {
  constructor(milease) {
    this.milease = milease;
    console.log("creating new Objects");
  }

  start() {
    console.log("start with speed =", this.milease);
  }
  stop() {
    console.log("stop");
  }
}

// let myObj = new toyotaCar(20); //automatically invoke constructor when created object using New keyword.
// console.log(myObj.start());
// myObj.stop();
// console.log(myObj.milease);

//                                INHERIANCE IN JAVASCRIPT

//method overriding: when parent and child both have the same method child method will be executed is
//called method overriding.

class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let obj = new Child();

//obj.hello();

class Person {
  constructor(name) {
    // console.log("enter parent constructor");
    this.name = name;
    this.species = "homo sepience";
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}

class Engineer extends Person {
  work() {
    console.log("Solve problems and build solution");
  }
}

//let muizz = new Engineer();

// muizz.work();
// muizz.eat();

//         we can see all the propetry of Person in muizz object of Enginner cause it inharites

//console.log(muizz);

//                              ***** SUPER KEYWORD

class Engineer2 extends Person {
  constructor(branch, name) {
    //console.log("enter child constructor");
    super(name); //to invoke parent class class constructor first
    this.branch = branch;
    super.eat(); // ways to call pranents method using super
    console.log(
      "exit child constructor and species is ",
      this.species,
      " and name ",
      name
    );
  }
}

//if i created any constructor in the child class that  constructor needs to use super to call at first
//parent not to get any error

let rafid = new Engineer2("computer science", "july");

//console.log(rafid);
