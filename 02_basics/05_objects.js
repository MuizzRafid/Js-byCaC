const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f", 7: "g", 8: "i" };

const obj4 = { ...obj1, ...obj2, ...obj3 };

// *** WAYS TO ITERATE OBJECTS

//01:for in loop
for (let key in obj4) {
  // console.log(key, obj4[key]);
}

//02:Object.keys()
const keys = Object.keys(obj4); //it returns an array of property name or key
for (let key of keys) {
  //console.log(key, obj4[key]);
}

//03:Object.values()
const values = Object.values(obj4);
for (let value of values) {
  //console.log(value);
}

//04:Object.entries()
const entries = Object.entries(obj4);
for (let [key, value] of entries) {
  //console.log(key, value);
}

//05:forEach method(Array)
const Keys = Object.keys(obj4);
Keys.forEach((key) => {
  //console.log(key, obj4[key]);
});

// ** importance of :hasOwnProperty()

const obj5 = {
  a: 1,
  b: 2,
};

Object.prototype.addittionalProperty = ":this is inherited";

for (let key in obj5) {
  console.log(key, obj5[key]);
}
/*
In the example above, the for...in loop would iterate over not only the 
properties a and b but also the inherited additionalProperty from the 
prototype chain. To avoid this, you can use hasOwnProperty()

*/

for (let key in obj5) {
  if (obj5.hasOwnProperty(key)) {
    console.log(key, obj5[key]);
  }
}
