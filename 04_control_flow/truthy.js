//truthy values and falsey values

const email="mzrd@gmail.com";

if(email){
   // console.log("got user email");
}else{
    console.log("Don't have user email");
}


//*****falsey values*****

//flase,0,-0, bigint(0n),"",null,undefined,NaN

//else ****truthy values*** like
//"0","flase"," ",[],{},function(){}
//anything inside string truthy,empty array,object and function is truthy

if([]){
    //console.log("empty array truthy");
}
if({}){
    //console.log("empty object truthy");
}
if(function(){}){
    //console.log("empty function truthy");
}


//         ********** to find Array and Object is empty or not

const emptyArray=[];
if(emptyArray.length===0){
    console.log("Array is empty");
}
const emptyObject=[];
if((Object.keys(emptyObject)).length===0){
    console.log("Object is empty");
}


//*** Nullish Coalescing Operator(??):null undefined */

let val1,val2;
val1=5??10; //if there is value initiazile
console.log(val1);
val2=null??10 //if value comes then 
console.log(val2);


// *** Ternery Operator
//condition ? true : false

const iseP=100;

iseP<=80?console.log("Less than 80"):console.log("Greater than 80");