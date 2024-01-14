class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`User name is :${username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`new course add by: ${this.username}`);
    }
}

const chai=new teacher('chai','c@gmail.com','8822');
chai.addCourse();

const masalaChai=new user('masalaChai');

console.log(chai instanceof user);//chai instanceof teacher,teacher instanceof user