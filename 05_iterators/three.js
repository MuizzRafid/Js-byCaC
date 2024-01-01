// ****** specialize loops for Array*********

//for of loop

const arr=[1,2,3,4,5];

for (const num of arr) {
   // console.log(num);
}

const greetings="Hello World";

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps
//No duplicate value
const map =new Map();
map.set('BN','Bangladesh');
map.set('UK','United Kingdom');
map.set('USA','United States of America');

//console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

//                   **** We can't use forof in Objects easily