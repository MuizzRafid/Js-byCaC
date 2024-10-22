//if we want to animate any element setInterval is important and there are also many usage. when we set
//the time of interval it calls again again after that time.to stop setInterval we use clearInterval()

const counter = 0;
var interval = setInterval(() => {
  console.log("hellow");
  counter += 1;
  if (counter >= 5) {
    clearInterval(interval);
  }
}, 1000);
