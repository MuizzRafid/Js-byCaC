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
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json();
})
.then((data)=>{
    //console.log("fetch");
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})



