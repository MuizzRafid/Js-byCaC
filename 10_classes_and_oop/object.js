function createUser (userName,score){
this.userName=userName;
this.score=score;
}

createUser.prototype.increment=function (){
    this.score++;
}


createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}

const chai= new createUser("Chai",25);
console.log(chai);
chai.printMe();

