 let myName="Muizz   ";

// console.log(myName.trueLength());

let myHeros=["thor","spiderman"];

let heroPower={

}

Object.prototype.Rafid=function(){
    console.log("Rafid is in Object");
}

//heroPower.Rafid();//All gives Rafid is in Object
//myHeros.Rafid();
//myName.Rafid();


Array.prototype.heyRafid=function(){
    console.log("its Array hey");
}

//myHeros.heyRafid(); //its Array hey
//heroPower.heyRafid();//give error cause higherarchy


//* ******** OLD SYNTAX
const user={
    name:"chai",
    email:"chai@gmail.com"
}

const teacher={
    makeVideo:true
};

const teachingSupport={
  isAvailable: false,
}

const tASupport={
    makesAssignment:"Js assignment",
    fulltime:true,
    __proto__:teachingSupport,
}

console.log(tASupport.isAvailable);//false (its works and its called prototypalinheritance)

teacher.__proto__=user;//protoTypal inheritance
console.log(teacher.name);//chai

// ***** MODERN SYNTAX*******
Object.setPrototypeOf(teachingSupport,teacher);


let anoUN="GG Chai";

String.prototype.trueLength=function(){
    console.log(`this is: ${this}`);
    console.log(`${this.trim().length}`);
}

anoUN.trueLength();

myName.trueLength();