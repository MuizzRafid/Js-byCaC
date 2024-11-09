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

//console.log(formateDate());

//04.question:write a javascript program to create a new string adding "New!" in front of a given string.
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

//time : 6:18

//08.question:Given two values ,write a js program to find out which one is nearest to 100

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

//09.question:write js program to check a given string contains 2 to 4 occurrences of a specified
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

//aconsole.log(occurrences2("hello", "l"));
//part 2 end

//10.question:write a js program to find the number of even digits in an array of integers

const evenDigits = (arr) => {
  res = 0;
  arr.map((e) => {
    if (e % 2 == 0) {
      res++;
    }
  });
  return res;
};

//console.log(evenDigits([1, 2, 3, 4]));

//another way

const evenDigits2 = (arr) => arr.filter((ele) => ele % 2 == 0).length;

//console.log(evenDigits2([1, 2, 3, 4, 5, 6, 8, 10]));

//11.question:write a js program to check whether a given array of integers
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

//12.question:write a js program to get the lagest even number from an array
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

//13.question:write js program to replace the first digit in a string(contains  digit) with
//$ charecter.

const replaceFirst = (str) => str.replace(/[0-9]/, "$");

//console.log(replaceFirst("july2"));

//end 3

//14.question:Given a year, report if it is a leap year.

const leapYearCheck = (year) =>
  (year % 100) % 4 == 0 ? "leap Year" : "not Leap Year";

//console.log(leapYearCheck(96));

//15.question:Write a js program to compare two objects to determine if the first one contains the
//same properties as the second one (which may also have additional properties)

const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 1, b: 2, c: 3, d: 4 };
const objC = { a: 1, b: 2, c: 3 };
const objectsEqual = (a, b) => Object.keys(a).every((key) => b[key]);
console.log(objectsEqual(objA, objB));
//every iterate every values in that array and passing a boolian expression in to it

//16.question:write a js program to convert a comma-separated values string to a 2D array.A new line
//indicates a new row in the array

//abc,def,ghi
//jkl,mno,pqr
//stu,vwx,yza

const parseCSV = (csvString) =>
  csvString.split("\n").map((row) => row.split(","));

const str2 = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;
//console.log(parseCSV(str2));

//17.question:Write a js program to generate a random hexadecimal color Code.

const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const hexColorCode = () => {
  let str3 = "#";
  for (let i = 0; i < 6; i++) {
    str3 = str3 + arr[Math.floor(Math.random() * 16)];
  }
  return str3;
};

//console.log(hexColorCode());

//another way

const hexColorCode2 = () => Math.floor(Math.random() * 16).toString(16);
const getRandomHexColor = () =>
  "#" + Array.from({ length: 6 }).map(hexColorCode2).join("");

//console.log(getRandomHexColor());

//18.question:Write a js program that returns true if the provided predicate function returns true
//for all elements in a collections ,false otherwise.

const predicateFunction = (arr) => !arr.some((e) => e <= 3);

//console.log(predicateFunction([1, 4, 5, 7]));

//another wary

const predicateFunction2 = (arr) => arr.every((x) => x > 3);
//console.log(predicateFunction2([1, 4, 5, 7]));

//4 end

//19.question:Write a js function that returns a passed string with letters in alphabetica order.

function alphabeticalOrder(str) {
  let str2 = [str.length];
  let count = 0;
  str.split("").forEach((e) => {
    for (let i = 0; i < str.length; i++) {
      if (e > str[i]) {
        count++;
      }
    }
    if (str2[count] == e) {
      str2[count + 1] = e;
      count = 0;
    } else {
      str2[count] = e;
      count = 0;
    }
  });

  return str2.map((e) => e).join("");
}

//console.log(alphabeticalOrder("webmaster"));

//another way

const alphabeticalOrder2 = (str) => {
  return str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");
};

//console.log(alphabeticalOrder2("javascript"));

//20.question:Write a js function that accepts a string as param and counts the number of vowels
//within the string.

const vowelsCount = (str) => {
  count = 0;
  str.split("").map((e) => {
    if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
      count++;
    }
  });
  return count;
};

//console.log(vowelsCount("abceiouu"));

//another way

const countLetters = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.split("").filter((s) => letters.indexOf(s) > -1).length;

//console.log(countLetters("abceiouu"));

//letters.indexOf(s) > -1 checks if the current character s exists in the letters array. If it does,
// indexOf returns its position (non-negative), so it passes the filter.

//6:48

//21.question:Write a js funcion to convert an amount to coins.Example input:46 and possibel coins
//25,10,5,2,1
//outPut: 25,10,10,1

const amountToCoin = (amount) => {
  let arr = [25, 10, 5, 2, 1];
  let res = [];
  let aC = 0;

  for (let i = 0; amount > 0; i++) {
    if (amount >= arr[aC]) {
      amount -= arr[aC];
      res.push(arr[aC]);
    } else {
      aC++;
    }
  }
  return res.toString();
};

//console.log(amountToCoin(46));

//22.question:Write a js function to extract unique characters from a string.

const uniqueChar = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1)
    .join(" ");

//console.log(uniqueChar("ahb&dd@"));

//way:2

const getUniqueChars = (str) => [...new Set(str.split(""))].join(" ");

//console.log(getUniqueChars("ahb%k3*"));

//13:20

//23.question:Write a js function to find the first not repeated character.
//example String:'abacddbec'
//example output: 'e'

const firstNonRepeated = (str) => {
  let finalStr = str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.slice(index + 1).indexOf(item) === -1 &&
        arr.slice(0, index).indexOf(item) === -1
    )
    .join("");
  return finalStr[0];
};

//console.log(firstNonRepeated("abacddbecg"));

//Another way
const getNonReapeatedChars = (str) => {
  return str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.filter((arrItem) => arrItem === item).length === 1
    );
};

//console.log(getNonReapeatedChars("abacddbecg"));
