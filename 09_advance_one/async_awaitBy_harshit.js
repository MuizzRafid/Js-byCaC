//use promharshit.html

//                            ****** async await

//

const url = "https://jsonplaceholder.typicode.com/posts";

// when i write async then that function not a normal function.then it returns promise.
async function getPost() {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("something wrong");
  }
  const data = await response.json();
  //console.log(response);
  return data;
}

//console.log(getPost());

getPost()
  .then((myData) => console.log(myData))
  .catch((err) => {
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
