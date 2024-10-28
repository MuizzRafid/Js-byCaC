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
