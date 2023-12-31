//Immediately Invoked Function Expression(IIFE)


//function immediately execute
//syntax: ()() >1st parenthesis for defination ,2nd for execution

(function chai(){
    console.log(`DB CONNECTED`);
})();//semicolor is mendatory to stop the line

((name)=>{
    console.log(`DB CONNECTED TOO ${name}`);
})('Muizz');


