class User{
constructor(email,password){
    this.email=email;
    this.password=password;
    
}

get password(){
return `${this._password}juLy`;
}
set password(value){
    this._password=value;
}


}

const tea=new User("tea","t2t3");
console.log(tea.password);

