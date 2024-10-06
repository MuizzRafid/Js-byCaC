// singleton or decalreing by constructor

function objUser(name) {
  this.name = name;
}
const objUser = new Object(); //this is sigleton object const u={} is not sigleton

/*
new Object syntax is correct, and it creates a new object using the 
built-in Object constructor. The Object constructor is a standard 
JavaScript constructor function that creates an object wrapper. In this
case, the new Object syntax is a shorthand for creating an empty object.
*/
objUser.id = "123abc";
objUser.name = "sammy";
objUser.isLoggedIn = false;

//console.log(objUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullName: {
      firstname: "Muizz",
      lastname: "Rafid",
    },
  },
};

//console.log(regularUser.fullname.userfullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e" };
//make '5' property non-enumerable in obj3
Object.defineProperty(obj3, "5", { enumerable: false });

//const obj4={obj1,obj2,obj3}//we see under obj3 two more obj are obj1,obj2...still the problem

//two ways to combine obj. 1>assign ,2>spread

//****Object.assign() copies only enumerable properties from source objects to the target
//object.If a property is non-enumerable, it won't be included in the copy.

//const obj3=Object.assign(obj1,obj2);
//console.log(obj3);

//spread

const obj4 = { ...obj1, ...obj2 };
//console.log(obj3); //{'1':'a','2':'b',...}

//both this return me an array of keys or values.those very imp******
//console.log(Object.keys(obj3));//['1','2','3','4']
//console.log(Object.values(obj3));//['a','b','c','d']

//entries return array of each key and value

//console.log(Object.entries(obj3));//[['1','a'],['2','b'],['3','c'],['4','d']]

const course = {
  courseName: "Js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

//object destructuring
//Object destructuring is a way to quickly get values out of an object and store
//them in variables. Instead of writing long lines to access each property,
//destructuring lets you pick out the values in a simple, clean way.

const { courseInstructor: Instructor } = course;
//console.log(courseInstructor);
console.log(Instructor);
