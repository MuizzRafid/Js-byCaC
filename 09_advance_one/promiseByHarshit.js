/*
1.intro to promises
2.microtask Queue
3.function that returns promise
4.Promise and settimeout
5.Promise,resolve and more about then method
6.convert nested callbacks to flat code using promises
7.intro to Ajax,http request
8.xhr requests
9.Error handling in xhr requests
10.xhr request chaining
11.promisifying xhr requests and chaining using then method
12.Fetch API
13.Error handling in Fetch API
14.consume promises with async and Await


*/

//****create Promises

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    //i can sent any thing in using inside resolve and reject's parenthesis
    //like array object string anything
    resolve({ value: "Fried Rice" });
  } else {
    // creating error object
    reject(new Error("something missing from bucket"));
  }
});

//consume Promises by browser

//then can take two callbacks one for resolve another for reject
friedRicePromise.then(
  //when promise relove works
  (myFriedRice) => {
    //console.log(myFriedRice);
  },
  //when promise reject it works
  (error) => {
    // console.log(error);
  }
);

// Important: setTimeout stays in callback queue and promise stays in microtaks queue.microtaks queue works
//before callback queue so.we get the output first from promise then settimeout.

setTimeout(() => {
  console.log("I am setTime out");
}, 0);

//we also can do the same thing using caining

friedRicePromise
  .then((f) => {
    //console.log(f);
  })
  .catch((err) => {
    //console.log(err);
  });

//                               ******   Function  returning promise

function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (bucket.includes("salt")) {
      resolve({ v: "Fried rice " });
    } else {
      reject("solt is not here");
    }
  });
}

ricePromise()
  .then((fr) => {
    console.log("let eat ", fr);
  })
  .catch((e) => {
    console.log(e);
  });

//                              ********       Promise and SetTimeout

function promise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve("value is true");
      } else {
        reject("value is false");
      }
    }, 1000);
  });
}

promise().then((t) => {
  console.log(t);
});

//                             ***************  Promise resolve and Promise chaining

//then method always return promise

const myP = Promise.resolve(5);
Promise.resolve(5)
  .then((value) => {
    console.log(value);
    //internally return return's a promise like
    //return Promise.resolve(value);
    return value + 4;
  })
  .then((v) => {
    console.log(v);
    //always then return a promise  if i don't define its undefined
  })
  .then((g) => {
    console.log(g);
  });

function changeText(e, t, c, tm, cb, fc) {
  setTimeout(() => {
    if (e) {
      e.textContent = t;
      e.style.color = c;
      if (cb) {
        cb();
      }
    } else {
      if (fc) {
        fc();
      }
    }
  }, tm);
}
//              ******  convert nested callbacks to flat code using promises

var heading1 = document.querySelector(".heading1");
var heading2 = document.querySelector(".heading2");
var heading3 = document.querySelector(".heading3");
var heading4 = document.querySelector(".heading4");
var heading5 = document.querySelector(".heading5");
var heading6 = document.querySelector(".heading6");

changeText(
  heading1,
  "one1",
  "violet",
  1000,
  () => {
    changeText(
      heading2,
      "two2",
      "purple",
      2000,
      () => {
        changeText(
          heading3,
          "three3",
          "red",
          1000,
          () => {},
          () => {
            console.log("h3 not");
          }
        );
      },
      () => {
        console.log("h2 not");
      }
    );
  },
  () => {
    console.log("h1 not");
  }
);

function changeUsingPromise(e, t, c, tm) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (e) {
        e.textContent = t;
        e.style.color = c;
        resolve();
      } else {
        reject();
      }
    }, tm);
  });
}

changeUsingPromise(heading4, "four4", "yellow", 2000)
  .then(() => {
    //if i only use the function call the return is undefined and it's resolve imedeatly
    //
    return changeUsingPromise(heading5, "five5", "cyan", 1000);
  })
  .then(() => changeUsingPromise(heading6, "six6", "blue", 1000));
