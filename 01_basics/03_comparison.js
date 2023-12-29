
//**** not usual comparison 

console.log("2">1);//true js con "2" to 2 but this is not recomended

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true its a problem here js make null as 0


console.log(undefined==0)//false ,>0 = false,>=0 =fasle 


// ******  ===  *** is called strict check,it check uqual or not and also its datatype

console.log("2"===2); //false because datatype not same