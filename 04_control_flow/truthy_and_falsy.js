//what you write mainly belongs to two types.1)truthy2)falsy

//falsy values:0 undefined NaN document.all false null "" -0
//And all other are truthy

if ("") {
  console.log("this is truthy");
} else {
  console.log("this is falsy");
}

var array = [1, 2, 3, 4];
for (var key in array) {
  console.log(key, array[key]);
}
