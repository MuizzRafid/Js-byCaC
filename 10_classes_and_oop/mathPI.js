const descripter=Object.getOwnPropertyDescriptor(Math,'PI');

//console.log(descripter);

const chai={
    name:"ginger chai",
    price: 30,
    isAvailable:true,
    get:function(){
        console.log("Hello Chai!");
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable:false,
    enumerable: true,
})
//console.log(Object.getOwnPropertyDescriptor(chai,"name")); 



for([key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}