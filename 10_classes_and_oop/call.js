function setUserName(userName){
    this.userName=userName;
}

function createUser(userName,gmail,password){
    setUserName.call(this,userName);

    this.password=password;
    this.gmail=gmail;
}


const chai=new createUser("chai","chai@gmail.com",1222);

console.log(chai);