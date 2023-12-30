const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["Superman","flash","batman"];


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//array takes any kinds of data.even it takes the whole array as an element
// console.log(marvel_heros[3][0]);


//concat combine two arrays and return new array
const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros);

//anothoer easy way to combine

//spread
const allHeros1=[...marvel_heros,...dc_heros];
console.log(allHeros1);

const anoArr=[1,2,3,[4,5],6,[7,8,[4,5]]];

//flat:return an array of all sub-array elements concatenated into it
//recursively up to the specified depth

const useableArr=anoArr.flat(Infinity);
console.log(useableArr);


console.log(Array.isArray("Muizz"));
console.log(Array.from("Muizz"));
console.log(Array.from({name: "Muizz"}));//interesting
//it cant convert we have to say how to store like using key or values

let score=100;
console.log(Array.of(score,200,300));