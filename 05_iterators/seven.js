//****** map method

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//this map is different from three.js Map()
const newNums = myNums.map((num) => num + 10);
//console.log(newNums);

//***** Chaining: using two or more methods

const nNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1) //this num=10 cause its comes from first method
  .filter((num) => num >= 40);

console.log(nNums);
