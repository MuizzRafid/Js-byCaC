// ****** Primitive or value type

// 7types: String,Number,Boolean,null,undefined,Symbol,BigInt

      // *********** Search :the typeof operator

let outsideTemp=null;//nulls type is object

// using of symbol:its a data type which is unique also if i pass same value
const id=Symbol(123);
const  aid=Symbol(123);

console.log(id==aid); //false

//BigInt
let bigNumber=14342809374893913n;


// ******* Non-Primitive or reference type

//Array,object,Functions

//array
const heros=["sharukh","rajnikanth","amir khan"];


//object : anything inside the curly bracis is called object
let myObj={
    name:"Muizz",
    age:23
}

//function
const myFunction= function(){
    console.log("hello World");
}


console.log(typeof heros);//bigNumber(bigint),myObj(object),myFunction(function),outsideTemp(object)