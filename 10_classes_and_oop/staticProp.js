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
july.callMe();
//console.log(user.createdID());
