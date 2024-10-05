//**** not usual comparison

console.log("2" > 1); //true js con "2" to 2 but this is not recomended

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true its a problem here js make null as 0

console.log(undefined == 0); //false ,>0 = false,>=0 =fasle

// *** == *** is called loose equality
//== (loose equality) checks for equality after type coercion. This means that before comparing, JavaScript will try to
//convert the values to a common type if they are of different types.

console.log(5 == "5");

// ******  ===  *** is called strict equality,
//== (strict equality) checks for equality without type coercion. It compares both the value and the type.
// If the types are different, it returns false right away

console.log("2" === 2); //false because datatype not same

/*   *** coercion***

Type coercion in JavaScript is the process of automatically converting one data type to another when performing certain operations. JavaScript is a dynamically typed language, which means variables can change types
 based on the context in which they're used, and type coercion happens implicitly in many situations.

 two type:
 1.implicit coercion(js do automatically)
 2.explicit coercion(you do maunally)

 example :
 if(""){
 ...
 }else if(1){
 
 }

*/
