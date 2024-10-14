"use strict";

//promise object as a placeholder for a certain period of time until we recived a value
//from async operation.other def: a container for the future value.other def: a promise is an
//object representing the eventual completion or failure of an asychronous operation.

/*
const promiseOne=new Promise((resolve,reject)=>{
    //Do an asyc task
    //DB task,cryptography,network
    setTimeout(function(){
    console.log("Async is one");
    resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("promise Consumed One");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Two");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise consumed two");
});

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({userName:"rafid",emailId:"example@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(typeof user);
})


const promiseFour=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=false;
    if(!error){
        resolve({userName:"rafid"})
    }else{
        reject('ERROR Something wrong');
    }
},1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName;
}).then(function(userName){
console.log(userName);
}).catch(function(err){
 console.log(err);
}).finally(()=>{
    console.log("worked resolved or rejected");
})


const promiseFive=new Promise(function(resolve,reject){
setTimeout(function(){
    let error=true;
    if(error){
        resolve({userName:"Muizz",email:"exp@gmail.com"});
    }else{
        reject('ERROR: js went wrong')
    }
},0)
});

async function consumePromiseFive(){
   try{
    const response=await promiseFive;
    console.log(response);
   }catch(error){
    console.log("error");
   }
}
consumePromiseFive();

*/
//Two ways to do
//**NO:1 using Async & Await
// async function getAllUsers(){
//     try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//      const data=await response.json();
//      console.log("Async");
//      console.log(data);
//     }catch(err){
//         console.log("E: ",err);
//     }
// }
// getAllUsers();
//NO:2 Using Fetch
fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {
  return response.json();
}).then(function (data) {
  //console.log("fetch");
  console.log(data);
})["catch"](function (error) {
  console.log(error);
});