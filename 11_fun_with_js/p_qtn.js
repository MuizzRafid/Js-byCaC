//01:question: write a javascript Program to get the extension of a filename.

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

//console.log(getFileExtension("index.html"));

//02:question:replace every charecter in a given string with the charecter follwing it in the alphabet

//String.fromCharCode
//charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("z"));

//03:question:write a javascript program to get the current date

const date = new Date();

console.log(date.toLocaleString());

const formateDate = function (date = new Date()) {
  const days = date.getDate(); //
  const months = date.getMonth() + 1; //its 0-11
  const years = date.getFullYear();

  return `${days}/${months}/${years}`;
};

console.log(formateDate());

//04.question: write a javascript program to create a new string adding "New!" in front of a given string.
//if the given string begins with "New!" already then return the original string.

let myString = "offer gets ready";
let have = "New!";
let result = myString.startsWith(have);

if (result) {
  console.log("ture");
} else {
  myString = have.concat(" ", myString);
}

//console.log(myString);

//another way

const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

//console.log(addNew("New! Offers"));

//05.question:write a js program to create a new string from a given string taking the first 3 char
//and the last 3 char of a string and adding them together .The string length must be 3 or more if
//not , the original string is returned.

let str = "july";

if (str.length < 4) {
  //console.log(str);
} else {
  let result = str.slice(0, 3).concat(str.slice(str.length - 3, str.length));
  //console.log(result);
}

//another way

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

//console.log(makeNewString("abcef"));

//06.question:write a js program to extract the first half of a string of even length.

const firstHalf = (str2) =>
  str2.length % 2 == 0 ? str2.slice(0, str2.length / 2) : "not even length";

//console.log(firstHalf("jjjkdekd"));

//07.question:write js program to concatenate two string except their first character.

const concateTwo = (str1, str2) => str1.slice(1) + str2.slice(1);

//console.log(concateTwo("july", "downey"));

//08.question:write a js program to check whether a given array of integers
//is sorted in ascending order

const checkArray = (arr) => {
  let value = arr[0];
  let res = "sorted accending";
  arr.forEach((ele) => {
    if (ele >= value) {
      value = ele;
    } else {
      res = "not sorted";
    }
  });
  return res;
};

//console.log(checkArray([1, 2, 3, 8, 5]));

//09.question:write a js program to get the lagest even number from an array
//of integers.

const largestEvenNumber = (arr) => {
  let res = 0;
  arr.forEach((e) => {
    if (e % 2 == 0 && e > res) {
      res = e;
    }
  });
  return res;
};

//console.log(largestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]));

//10.question:Given two values ,write a js program to find out which one is nearest to 100

const nearestHundred = (a, b) => {
  a1 = Math.abs(100 - a);
  b1 = Math.abs(100 - b);
  let res;
  if (a1 > b1 || a1 == b1) {
    res = b;
  } else {
    res = a;
  }
  return res;
};

//console.log(nearestHundred(85, 110));

//11.question:write js program to check a given string contains 2 to 4 occurrences of a specified
//character.

const occurrences = (str, char) => {
  let res = 0;
  str.split("").map((c) => {
    if (c == char) res++;
  });
  return res;
};

//another way
const occurrences2 = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

//console.log(occurrences2("hello", "l"));
