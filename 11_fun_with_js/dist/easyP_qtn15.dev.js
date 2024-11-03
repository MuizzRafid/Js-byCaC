"use strict";

//01:question: write a javascript Program to get the extension of a filename.
var getFileExtension = function getFileExtension(str) {
  return str.slice(str.lastIndexOf("."));
}; //console.log(getFileExtension("index.html"));
//02:question:replace every charecter in a given string with the charecter follwing it in the alphabet
//String.fromCharCode
//charCodeAt


var moveCharsForward = function moveCharsForward(str) {
  return str.split("").map(function (_char) {
    return String.fromCharCode(_char.charCodeAt(0) + 1);
  }).join("");
};

console.log(moveCharsForward("z")); //03:question:write a javascript program to get the current date

var date = new Date();
console.log(date.toLocaleString());

var formateDate = function formateDate() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var days = date.getDate(); //

  var months = date.getMonth() + 1; //its 0-11

  var years = date.getFullYear();
  return "".concat(days, "/").concat(months, "/").concat(years);
}; //console.log(formateDate());
//04.question:write a javascript program to create a new string adding "New!" in front of a given string.
//if the given string begins with "New!" already then return the original string.


var myString = "offer gets ready";
var have = "New!";
var result = myString.startsWith(have);

if (result) {
  console.log("ture");
} else {
  myString = have.concat(" ", myString);
} //console.log(myString);
//another way


var addNew = function addNew(str) {
  return str.indexOf("New!") === 0 ? str : "New! ".concat(str);
}; //console.log(addNew("New! Offers"));
//05.question:write a js program to create a new string from a given string taking the first 3 char
//and the last 3 char of a string and adding them together .The string length must be 3 or more if
//not , the original string is returned.


var str = "july";

if (str.length < 4) {//console.log(str);
} else {
  var _result = str.slice(0, 3).concat(str.slice(str.length - 3, str.length)); //console.log(result);

} //another way


var makeNewString = function makeNewString(str) {
  return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
}; //console.log(makeNewString("abcef"));
//06.question:write a js program to extract the first half of a string of even length.


var firstHalf = function firstHalf(str2) {
  return str2.length % 2 == 0 ? str2.slice(0, str2.length / 2) : "not even length";
}; //console.log(firstHalf("jjjkdekd"));
//07.question:write js program to concatenate two string except their first character.


var concateTwo = function concateTwo(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}; //console.log(concateTwo("july", "downey"));
//time : 6:18
//08.question:Given two values ,write a js program to find out which one is nearest to 100


var nearestHundred = function nearestHundred(a, b) {
  a1 = Math.abs(100 - a);
  b1 = Math.abs(100 - b);
  var res;

  if (a1 > b1 || a1 == b1) {
    res = b;
  } else {
    res = a;
  }

  return res;
}; //console.log(nearestHundred(85, 110));
//09.question:write js program to check a given string contains 2 to 4 occurrences of a specified
//character.


var occurrences = function occurrences(str, _char2) {
  var res = 0;
  str.split("").map(function (c) {
    if (c == _char2) res++;
  });
  return res;
}; //another way


var occurrences2 = function occurrences2(str, _char3) {
  return str.split("").filter(function (ch) {
    return ch === _char3;
  }).length;
}; //aconsole.log(occurrences2("hello", "l"));
//part 2 end
//10.question:write a js program to find the number of even digits in an array of integers


var evenDigits = function evenDigits(arr) {
  res = 0;
  arr.map(function (e) {
    if (e % 2 == 0) {
      res++;
    }
  });
  return res;
}; //console.log(evenDigits([1, 2, 3, 4]));
//another way


var evenDigits2 = function evenDigits2(arr) {
  return arr.filter(function (ele) {
    return ele % 2 == 0;
  }).length;
}; //console.log(evenDigits2([1, 2, 3, 4, 5, 6, 8, 10]));
//11.question:write a js program to check whether a given array of integers
//is sorted in ascending order


var checkArray = function checkArray(arr) {
  var value = arr[0];
  var res = "sorted accending";
  arr.forEach(function (ele) {
    if (ele >= value) {
      value = ele;
    } else {
      res = "not sorted";
    }
  });
  return res;
}; //console.log(checkArray([1, 2, 3, 8, 5]));
//12.question:write a js program to get the lagest even number from an array
//of integers.


var largestEvenNumber = function largestEvenNumber(arr) {
  var res = 0;
  arr.forEach(function (e) {
    if (e % 2 == 0 && e > res) {
      res = e;
    }
  });
  return res;
}; //console.log(largestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]));
//13.question:write js program to replace the first digit in a string(contains  digit) with
//$ charecter.


var replaceFirst = function replaceFirst(str) {
  return str.replace(/[0-9]/, "$");
}; //console.log(replaceFirst("july2"));
//end 3
//14.question:Given a year, report if it is a leap year.


var leapYearCheck = function leapYearCheck(year) {
  return year % 100 % 4 == 0 ? "leap Year" : "not Leap Year";
}; //console.log(leapYearCheck(96));
//15.question:Write a js program to compare two objects to determine if the first one contains the
//same properties as the second one (which may also have additional properties)


var objA = {
  a: 1,
  b: 2,
  c: 3
};
var objB = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var objC = {
  a: 1,
  b: 2,
  c: 3
};

var objectsEqual = function objectsEqual(a, b) {
  return Object.keys(a).every(function (key) {
    return b[key];
  });
};

console.log(objectsEqual(objA, objB)); //every iterate every values in that array and passing a boolian expression in to it
//16.question:write a js program to convert a comma-separated values string to a 2D array.A new line
//indicates a new row in the array
//abc,def,ghi
//jkl,mno,pqr
//stu,vwx,yza

var parseCSV = function parseCSV(csvString) {
  return csvString.split("\n").map(function (row) {
    return row.split(",");
  });
};

var str2 = "abc,def,ghi\njkl,mno,pqr\nstu,vwx,yza"; //console.log(parseCSV(str2));
//17.question:Write a js program to generate a random hexadecimal color Code.

var arr = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var hexColorCode = function hexColorCode() {
  var str3 = "#";

  for (var i = 0; i < 6; i++) {
    str3 = str3 + arr[Math.floor(Math.random() * 16)];
  }

  return str3;
}; //console.log(hexColorCode());
//another way


var hexColorCode2 = function hexColorCode2() {
  return Math.floor(Math.random() * 16).toString(16);
};

var getRandomHexColor = function getRandomHexColor() {
  return "#" + Array.from({
    length: 6
  }).map(hexColorCode2).join("");
}; //console.log(getRandomHexColor());
//18.question:Write a js program that returns true if the provided predicate function returns true
//for all elements in a collections ,false otherwise.


var predicateFunction = function predicateFunction(arr) {
  return !arr.some(function (e) {
    return e <= 3;
  });
}; //console.log(predicateFunction([1, 4, 5, 7]));
//another wary


var predicateFunction2 = function predicateFunction2(arr) {
  return arr.every(function (x) {
    return x > 3;
  });
}; //console.log(predicateFunction2([1, 4, 5, 7]));
//4 end
//19.question:Write a js function that returns a passed string with letters in alphabetica order.


function alphabeticalOrder(str) {
  var str2 = [str.length];
  var count = 0;
  str.split("").forEach(function (e) {
    for (var i = 0; i < str.length; i++) {
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
  return str2.map(function (e) {
    return e;
  }).join("");
} //console.log(alphabeticalOrder("webmaster"));
//another way


var alphabeticalOrder2 = function alphabeticalOrder2(str) {
  return str.split("").sort(function (a, b) {
    return a > b ? 1 : -1;
  }).join("");
}; //console.log(alphabeticalOrder2("javascript"));
//20.question:Write a js function that accepts a string as param and counts the number of vowels
//within the string.


var vowelsCount = function vowelsCount(str) {
  count = 0;
  str.split("").map(function (e) {
    if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
      count++;
    }
  });
  return count;
}; //console.log(vowelsCount("abceiouu"));
//another way


var countLetters = function countLetters(str) {
  var letters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ["a", "e", "i", "o", "u"];
  return str.split("").filter(function (s) {
    return letters.indexOf(s) > -1;
  }).length;
}; //console.log(countLetters("abceiouu"));
//letters.indexOf(s) > -1 checks if the current character s exists in the letters array. If it does,
// indexOf returns its position (non-negative), so it passes the filter.