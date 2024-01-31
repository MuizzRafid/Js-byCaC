// ****for in loop

// forin in object
const myObj = {
  js: "JavaScript",
  cpp: "C Plus Plus",
};

for (const key in myObj) {
  //key is a array so i use myObj[key]
  console.log(`${key} means ${myObj[key]}`);
}

/*
console.log(myObj.key)//gives undefined cause there has not key as named "key"0


If you try to use myObj.key instead, JavaScript will attempt to access a property
named "key" on the myObj object, rather than dynamically accessing the property 
whose name is held in the variable key. Since there's no such property named "key"
in your object literal, myObj.key will return undefined.
*/
//forin in Array
const myArr = ["js", "python", "java"];

for (const key in myArr) {
  console.log(`${key} : ${myArr[key]}`);
}

//*** We can't use it on Map */
