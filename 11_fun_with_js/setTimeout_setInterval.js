//if we want to animate any element setInterval is important and there are also many usage. when we set
//the time of interval it calls again again after that time.to stop setInterval we use clearInterval()

var interval = setInterval(() => {
  console.log("hellow");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 5000);
