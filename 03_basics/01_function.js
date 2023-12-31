
function sayMyName(){

    console.log("Muizz Rafid");
}
//sayMyName();

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
function addTwoNumbers2(number1,number2){
    
    return number1+number2;
}

addTwoNumbers(3,5);//8
addTwoNumbers(3,"4");//34

let result=addTwoNumbers(3,5);
console.log("My result 1:",result);
result=addTwoNumbers2(3,5);
console.log("My result 2:",result);


function loginUserMessege(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessege("muizz"));
console.log(loginUserMessege());