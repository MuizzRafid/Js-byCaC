// ****for in loop

// forin in object
const myObj={
    js:"JavaScript",
    cpp:"C Plus Plus"
}

for (const key in myObj) {
   
   console.log(`${key} means ${myObj[key]}`);
}

//forin in Array
const myArr=['js','python','java'];

for (const key in myArr) {
    console.log(`${key} : ${myArr[key]}`);
}

//*** We can't use it on Map */