
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

// addTwoNumbers(3,5);//8
// addTwoNumbers(3,"4");//34

//let result=addTwoNumbers(3,5);
//console.log("My result 1:",result);//My result 1:undefined
result=addTwoNumbers2(3,5);
//console.log("My result 2:",result);//My result 2:8


function loginUserMessege(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessege("muizz"));//muizz just logged in
// console.log(loginUserMessege());//please enter a username

//rest operator(...) or spread operator(...) named different on diff uses

//using rest operator(...)
calculateCartPrice=function(val1, ...num1){
return num1;
}
//console.log(calculateCartPrice(200,400,500,600));//[400,500,600]

const user={
    userName: "muizz",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleObject(user);

//Passing direct object
handleObject({
    userName:"Downey",
    price: 200
});

const myArr=[200,400,500,600];

function handleArray(getArray){
return getArray[2];
}
console.log(handleArray(myArr));

//Passing direct Array
console.log(handleArray([900,800,700,100]));