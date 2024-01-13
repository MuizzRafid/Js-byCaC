const user={
    userName:"Muizz",
    password:1234,
    email:"mz@gmail.com",
    getUserDetails:function(){
        console.log(`${this.userName}`);
        console.log(this);
    }
}

//console.log(user.getUserDetails());

//console.log(this);

function anoUser(userName,loginCount,isLogedIn){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLogedIn=isLogedIn;

return this;
}

//*****With out new keyword the object and instance is same.so it just change values
// const one=anoUser("Muizz",8,true);
// console.log(one);
// let two=anoUser("Rafid",2,false);
// console.log(one);

//****with New key it creates a new instance of that type object of the function
const oneUser=new anoUser("july",33,false);


//console.log(oneUser instanceof anoUser);
//console.log(oneUser instanceof Object);
console.log(Object);