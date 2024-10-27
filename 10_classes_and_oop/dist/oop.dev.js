"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var user = {
  userName: "Muizz",
  password: 1234,
  email: "mz@gmail.com",
  getUserDetails: function getUserDetails() {
    console.log("".concat(this.userName));
    console.log(this);
  }
}; //console.log(user.getUserDetails());
//console.log(this);

function anoUser(userName, loginCount, isLogedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLogedIn = isLogedIn;
  return this;
} //*****With out new keyword the object and instance is same.so it just change values
// const one=anoUser("Muizz",8,true);
// console.log(one);
// let two=anoUser("Rafid",2,false);
// console.log(one);
//****with New key it creates a new instance of that type object of the function


var oneUser = new anoUser("july", 33, false); //console.log(oneUser instanceof anoUser);
//console.log(oneUser instanceof Object);

console.log(Object); //                           *** By Apna college
//                 **** work on proto__type

var student = {
  fullName: "july",
  marks: 95.5,
  printMraks: function printMraks() {
    console.log("Marks= ", this.marks);
  }
};
var employee = {
  calTax: function calTax() {
    console.log("tax rate  is 10% =", this.salary * 10 / 100);
  }
};
var july = {
  salary: 5000
};
july.__proto__ = employee; //july.calTax();
//                         creating constructor

var toyotaCar =
/*#__PURE__*/
function () {
  function toyotaCar(milease) {
    _classCallCheck(this, toyotaCar);

    this.milease = milease;
    console.log("creating new Objects");
  }

  _createClass(toyotaCar, [{
    key: "start",
    value: function start() {
      console.log("start with speed =", this.milease);
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log("stop");
    }
  }]);

  return toyotaCar;
}(); // let myObj = new toyotaCar(20); //automatically invoke constructor when created object using New keyword.
// console.log(myObj.start());
// myObj.stop();
// console.log(myObj.milease);
//                                INHERIANCE IN JAVASCRIPT
//method overriding: when parent and child both have the same method child method will be executed is
//called method overriding.


var Parent =
/*#__PURE__*/
function () {
  function Parent() {
    _classCallCheck(this, Parent);
  }

  _createClass(Parent, [{
    key: "hello",
    value: function hello() {
      console.log("hello");
    }
  }]);

  return Parent;
}();

var Child =
/*#__PURE__*/
function (_Parent) {
  _inherits(Child, _Parent);

  function Child() {
    _classCallCheck(this, Child);

    return _possibleConstructorReturn(this, _getPrototypeOf(Child).apply(this, arguments));
  }

  return Child;
}(Parent);

var obj = new Child(); //obj.hello();

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    // console.log("enter parent constructor");
    this.name = name;
    this.species = "homo sepience";
  }

  _createClass(Person, [{
    key: "eat",
    value: function eat() {
      console.log("eat");
    }
  }, {
    key: "sleep",
    value: function sleep() {
      console.log("sleep");
    }
  }]);

  return Person;
}();

var Engineer =
/*#__PURE__*/
function (_Person) {
  _inherits(Engineer, _Person);

  function Engineer() {
    _classCallCheck(this, Engineer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Engineer).apply(this, arguments));
  }

  _createClass(Engineer, [{
    key: "work",
    value: function work() {
      console.log("Solve problems and build solution");
    }
  }]);

  return Engineer;
}(Person); //let muizz = new Engineer();
// muizz.work();
// muizz.eat();
//         we can see all the propetry of Person in muizz object of Enginner cause it inharites
//console.log(muizz);
//                              ***** SUPER KEYWORD


var Engineer2 =
/*#__PURE__*/
function (_Person2) {
  _inherits(Engineer2, _Person2);

  function Engineer2(branch, name) {
    var _this;

    _classCallCheck(this, Engineer2);

    //console.log("enter child constructor");
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Engineer2).call(this, name)); //to invoke parent class class constructor first

    _this.branch = branch;

    _get(_getPrototypeOf(Engineer2.prototype), "eat", _assertThisInitialized(_this)).call(_assertThisInitialized(_this)); // ways to call pranents method using super


    console.log("exit child constructor and species is ", _this.species, " and name ", name);
    return _this;
  }

  return Engineer2;
}(Person); //if i created any constructor in the child class that  constructor needs to use super to call at first
//parent not to get any error


var rafid = new Engineer2("computer science", "july"); //console.log(rafid);