"use strict";

//use the promHarshit html
//                                       ******* AJAX AND HTTP REQUEST
//what is ajax?
//Ans:is a set of "web dev technique" using many web technologies on the "clint-site" to asyanchronous web
//applications. With Ajax web app can sent and retive data from a server asynchrounously in the beacground without
//interfering with the display and behaviour of the existing page.we use now a days JSON.previously XML.
//we have 3 most conmmoon way st to create and send request to sever
//1)xmlHTTPRequest (old way of doing)
//2)fetch API(New way of doing)
//3)axies(this is third part liabary)
var url = "https://jsonplaceholder.typicode.com/posts"; //                                       ****xmlHTTPRequest

var xhr = new XMLHttpRequest(); // from xml object the import is status,response,readystate,onreadystatechange
// ** step 1:using Open()
// method which take two parameter 1)what type of request 2)the goal url

xhr.open("GET", url);
xhr.send(); //onload works when readyState is 4.And onreadyStatechange works when state chaged
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(typeof data);
//   }
// };
// ** step2
// xhr.onload = () => {
//   if (xhr.status >= 200 && xhr.status << 300) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   } else {
//     console.log("something went wrong");
//   }
// };
// you will show onerror works when disconnect wifi
//onerror= when someissue with network

xhr.onerror = function () {// console.log("network error");
};

xhr.onload = function () {
  var rpse = JSON.parse(xhr.response);
  var id = rpse[3].id;
  var nUrl = "".concat(url, "/").concat(id);
  var xhr2 = new XMLHttpRequest();
  xhr2.open("get", nUrl);
  xhr2.send();

  xhr2.onload = function () {//console.log(xhr2.response);
  };
}; //
//                              ****xml Request Using Promise


function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong"));
      }
    };

    xhr.onerror = function () {
      reject(new Error("wrong somewhere"));
    };

    xhr.send();
  });
}

sendRequest("get", url).then(function (r) {
  var d = JSON.parse(r);
  return d;
}).then(function (d) {
  var id = d[3].id;
  return id;
}).then(function (id) {
  return id;
}).then(function (id) {
  var url2 = "".concat(url, "/").concat(id);
  return sendRequest("get", url2);
}).then(function (dd) {
  console.log(JSON.parse(dd));
})["catch"](function (err) {
  console.log(err);
}); //
//                                     ****** fetch API
//
//fetch return a promise
//we use get to excess data

var whatisthis = fetch(url); //console.log(whatisthis);

whatisthis.then(function (response) {
  //response also a promise
  return response.json();
}).then(function (data) {
  console.log(data);
}); //we use POST to create data

var usingPost = fetch(url, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}).then(function (response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("something went wrong");
  }
}).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  console.log("show when my net is off");
  console.log(err);
});