"use strict";

//if we want to animate any element setInterval is important and there are also many usage. when we set
//the time of interval it calls again again after that time.to stop setInterval we use clearInterval()
var interval = setInterval(function () {
  console.log("hellow");
}, 1000);
setTimeout(function () {
  clearInterval(interval);
}, 5000);