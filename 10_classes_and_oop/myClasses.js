class user{
   constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
   }

    encryptPassword(){
        return `${this.password}abc`;
         
   }
     changeUsername(){
        console.log(`${this.username.toUpperCase()}`);
     }

}

const chai=new user('chai','chai@gmail.com',"3332");

console.log(chai.encryptPassword());
//console.log(chai.changeUsername());
chai.changeUsername();


// *** the same thing by Function

function User(username,email,password){
    this.username=username;
    this.password=password;
    this.email=email;
    
}
User.prototype.encryptPassword=function(){
    
    return `${this.password}tt`;
    }

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`;
}
const tea=new User('tea','tea@gmail.com',"tt88");

 console.log(tea.changeUsername());
 console.log(tea.encryptPassword());

