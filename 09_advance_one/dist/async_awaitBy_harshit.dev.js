"use strict";

//use promharshit.html
//                            ****** async await
//
var url = "https://jsonplaceholder.typicode.com/posts"; // when i write async then that function not a normal function.then it returns promise.

function getPost() {
  var response, data;
  return regeneratorRuntime.async(function getPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _context.next = 5;
            break;
          }

          throw new Error("something wrong");

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(response.json());

        case 7:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
} //console.log(getPost());


getPost().then(function (myData) {
  return console.log(myData);
})["catch"](function (err) {
  console(err);
});
/*
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
*/
//  ****       this part is by youtube(step by step)
//link:https://youtu.be/KuoIVGhDb-E?feature=shared

/*
//normal function

// function myFunction() {
//   return console.log("Async/Await");
// }
// myFunction();

//         async function

// async function myFunction() {
//   //return console.log("Async/Await");
//   let sentence = "Promise is resolved";
//   return sentence;
// }
// myFunction().then((d) => console.log(d));

//          explecitely return promise

async function fun() {
  return Promise.resolve("Promise vv is relsolve");
}
//fun().then(console.log);

//      Await keyword
//we can't use await in normal function .

async function lawait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("i am async and await keyword");
    }, 2000);
  });
  let result = await promise;
  console.log(result);
}
lawait();

//                     reading Api data

async function cApi() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log(response);
  let data = await response.json();
  console.log(data);
}

cApi();
//

//                  reading Github User data
const urrrl = "https://jsonplaceholder.typicode.com/todos/1";
function loadData(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      console.log(response);
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}
loadData(urrrl);
*/