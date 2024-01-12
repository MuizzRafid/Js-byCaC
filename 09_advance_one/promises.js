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
    },1700)
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
})

