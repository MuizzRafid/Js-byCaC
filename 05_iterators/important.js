/*
// ****** Try to use all the loops

takeArray = function (arr) {
  const gArr = Object.entries(arr);
  for (let [key, value] of gArr) {
    console.log("Entries", value);
  }

  arr.forEach((e) => {
    console.log("for Each", e);
  });

  for (let ar in arr) {
    console.log("for In", arr[ar]);
  }
  let keys = Object.keys(arr);//get array of keys
  //so i used for of
  for (let key of keys) {
    console.log("Object.keys()", arr[key]);
  }

  let values = Object.values(arr);//same here get values
  // of a array so used  for of
  for (let value of values) {
    console.log("Object.values()", value);
  }
};

*/
