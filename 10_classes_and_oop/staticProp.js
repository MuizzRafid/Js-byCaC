//static helps to stop getting permisson to a function for objects

class user{
    constructor(username){
        this.username=username;
    }

    callMe(){
        console.log(`Hey! ${this.username}`);
    }

      createdID(){
        return `123`;
    }
}


const july=new user('july');

//console.log(july.createdID());//error

class teacher extends user{
  constructor(username,email){
    super(username);
    this.email=email;
  }

}

const t=new teacher('teacher','t@gmail.com');

t.callMe();//Hey! teacher

console.log(t.createdID());