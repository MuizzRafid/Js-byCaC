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