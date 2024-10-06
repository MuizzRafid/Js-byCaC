//way to declare array

const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = new Array("a", "b", "c", "d");
const deepCopy = JSON.parse(JSON.stringify(myArr));
//Cause Array is object
//when we copy an array makes shallow copy(same reference)
//and another type  is deep copy(not same reference)

//console.log(myArr);//[0,1,2,3,4,5]
myArr.push(6);
myArr.push(7);
myArr.pop();
//console.log(myArr);//[0,1,2,3,4,5,6]

//works on start

myArr.unshift(7); //7012345 add 7 in the top
// console.log(myArr);
myArr.shift(); //012345 delete 7 cause its in top
// console.log(myArr);

// console.log(myArr.includes(8));//false ,if 8 is in myArr then true
// console.log(myArr.indexOf(4));

const newArr = myArr.join(); // adds all element into string
//console.log(newArr);

// ******** slice and splice methods*******

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C", myArr);
