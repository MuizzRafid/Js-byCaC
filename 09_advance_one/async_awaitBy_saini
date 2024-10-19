/*
1> What is async?
2> what is await?
3> how async await wroks behind the sence?
4> Example of using async/await
5> Error Handling
6> Interviews
7> Async await vs Promise.then/.catch

*/

//async is a keyword that is use before a function to create a async funtion .Async function
//all ways return a Promise. but if i try to return a value then this function will take it
//and wrap it with Promise and return it

/*

//       showing async always return promise if you try to return value

async function getData() {
  return "july";
}

let data = getData();
console.log(data);
getData().then((d) => {
  console.log(d);
});
*/

const p = new Promise((resolve, reject) => {
  resolve("Promise is resolved");
});

//await is a keyword which is only use inside a async function. it gives us the resolve value

async function getData2() {
  //usual way to resolve promise
  p.then((d) => {
    // console.log(d);
  });
  //using await the same work
  const val = await p;
  //console.log(val);//means await resolve p and hold the value of resolve
}

const res = getData2();
//console.log(res);

//

//          VERY IMPORTANT :**** difference between a normal function and async await on promise

const p1 = new Promise((rs, rj) => {
  setTimeout(() => {
    rs("p1 is resolved");
  }, 4000);
});
const p2 = new Promise((rs, rj) => {
  setTimeout(() => {
    rs("p2 is resolved");
  }, 2000);
});
const p3 = new Promise((rs, rj) => {
  setTimeout(() => {
    rs("p3 is resolved");
  }, 3000);
});

//normal function

function handlePromise() {
  //js Engine is wait for no one
  p1.then();
  console.log("next line after promise resolve");
}

//handlePromise();

//async function
let start = Date.now();
while (Date.now() - start < 1000);

async function handlePromise2() {
  // looks like js engine is waiting  but not true
  console.log("hellow i am after 1s which take by upper while");
  //now makes thing more complecated
  const res2 = await p2;
  console.log(res2, "\nnext line after p2 promise resolve");

  const res = await p1;
  console.log(res, "\nnext line after p1 promise resolve");
  const res3 = await p3;
  console.log(res3, "\nnext line after p3 promise resolve");
}

handlePromise2();

//now underStandWhat is Heppening............!!!!

//in the start CallStack is empty. when it faces handlePromise2() it sees 3 promises has to resolve
//and those promises are taking their own time to resolve.now this handlePromise2 function in my call
//stack .As js is sigle theated it go for line by line .so it log like 83. Then it goes for line 85
//and sees await p2 over there.important thing is then handlePromise2  is suspended for 2s p2
//and throw out of the callstack and not frezzing the main thread cause js is single threated and wait
//for p2 to resolve sothat it can move ahead.now the interesting things come
/*
(to search:how js engine and eventloop works when handling async code)
***initialize of p1,p2 and p3 the timer is starts with that.but if there is so many code to execute
between the initializing ofp1,p2p3 and handlePromise2 which takes 1s to execute.so i get the result just
after 1s of the other execution takes to complete cause p1 p2 p3 starts when the it initialize

When await p2 suspends the function, the suspension only applies to the code inside handlePromise2()
cause other asynchronous tasks are not paused .timers for p1,p2,and p3 keep running because they exist 
outside of the execution of handlepromise2But, this suspension only applies to the function itself. 
js engine essentially pause the execution and allows other task to the eventloop.
It doesn’t affect other ongoing asynchronous operations (like p1, p3),which are being managed separately
by the Web APIs and timers .All three timers started at the same time, because p1,p2,and p3 were created
at the same time when their promises were initialized.await only suspends the function's execution, but 
the underlying timers keep running in the background. This is why p1 resolves after only 2 seconds 
following p2's resolution: its timer has already been running.

*/

const api_url = "https://api.github.com/users/akshasaini";

async function handlegithub() {
  //try and catch is new way to handle error
  try {
    const data = await fetch(api_url);
    //To handle non-2xx responses, you need to explicitly check for the response status and throw an error
    // manually if needed

    if (!data.ok) {
      throw new Error(`i got HTTP error! status :${data.status}`);
    }
    const response = await data.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

//but the old method is use catch after function call
handlegithub();

/*
how fetch works?
when fetch resolve its give us response object.which a have a body of readable stream.to convert of
this readable stream to json we use .json() is again a promise and when this promise is resolve it 
give us the json value.fetch() call doesn't throw an error on HTTP response codes like 404 or 500.
 It only throws an error when there is a network failure, like if the user is offline

*/
