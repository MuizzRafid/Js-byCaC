"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//if we want to animate any element setInterval is important and there are also many usage. when we set
//the time of interval it calls again again after that time.to stop setInterval we use clearInterval()
var counter = 0;
var interval = setInterval(function () {
  console.log("hellow");
  counter += (_readOnlyError("counter"), 1);

  if (counter >= 5) {
    clearInterval(interval);
  }
}, 1000);