const score = 500;
// console.log(score);  //500

const balance = new Number(100);
// console.log(balance);//[Number:100]

console.log(typeof balance.toString()); //string
// console.log(balance.toFixed(2));//100.00

const oN = 123.87; //124
// console.log(oN.toPrecision(3));

// ************* Maths ***************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.8));
console.log(Math.ceil(4.1));
console.log(Math.floor(5.9));
console.log(Math.max(5, 8, 43, 22));

console.log(Math.random());
// for random result come between 1 to 0 .so using +1 to insure the number must biger than 1
//if 0.04*10=0.4
console.log(Math.random() * 10 + 1);
console.log(Math.round(Math.random() * 10 + 1));

const min = 10;
const max = 20;
let dif = max - min + 1;
console.log(Math.floor(Math.random() * dif) + min);
