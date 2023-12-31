
// singleton or decalreing by constructor

const objUser = new Object;//this is sigleton object const u={} is not sigleton

objUser.id="123abc";
objUser.name="sammy";
objUser.isLoggedIn=false;

//console.log(objUser);


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullName:{
            firstname:"Muizz",
            lastname: "Rafid"
        }
    }
}

//console.log(regularUser.fullname.userfullName);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

//const obj3={obj1,obj2}//we see uder obj3 two more obj are obj1,obj2...still the problem

//two ways to combine obj 1>assign ,2>spread

//assign
//const obj3=Object.assign(obj1,obj2);
//console.log(obj3);

//spread

const obj3={...obj1,...obj2};
//console.log(obj3); //{'1':'a','2':'b',...}

//both this return me an array of keys or values.those very imp******
//console.log(Object.keys(obj3));//['1','2','3','4']
//console.log(Object.values(obj3));//['a','b','c','d']

//entries return array of each key and value

//console.log(Object.entries(obj3));//[['1','a'],['2','b'],['3','c'],['4','d']]

const course={
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//object destructuring

const {courseInstructor: Instructor}=course;
//console.log(courseInstructor);
console.log(Instructor);