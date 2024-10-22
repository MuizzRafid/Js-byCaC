"use strict";

//if we want to animate any element setInterval is important and there are also many usage. when we set
//the time of interval it calls again again after that time.to stop setInterval we use clearInterval()
var counter = 0;
var interval = setInterval(function () {
  console.log("hellow");
  counter += 1;

  if (counter >= 5) {
    clearInterval(interval);
  }
}, 1000);
/*
When building web applications, we often need to execute code at specific intervals or after a delay. JavaScript provides two powerful functions to handle such time-based operations: setTimeout and setInterval. Both are part of the browser's Web API and enable asynchronous execution of code.

1. setTimeout
setTimeout is used to execute a function once after a specified delay. It waits for the specified time (in milliseconds) and then runs the callback function.

Syntax:
javascript
Copy code
let timeoutID = setTimeout(function, delay, param1, param2, ...);
function: The function you want to execute after the delay.
delay: The time (in milliseconds) after which the function will be executed.
param1, param2, ...: Optional parameters you can pass to the function when it is executed.
Example 1: Basic setTimeout
javascript
Copy code
setTimeout(() => {
  console.log("This message will appear after 3 seconds");
}, 3000);  // 3000 milliseconds = 3 seconds
In this example, the message will appear in the console after 3 seconds.

Example 2: setTimeout with Parameters
You can also pass arguments to the function that will run after the delay.

javascript
Copy code
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "Alice");  // "Hello, Alice!" will appear after 2 seconds
Cancelling setTimeout
You can cancel a setTimeout before it triggers by using clearTimeout() and passing in the timeout ID.

javascript
Copy code
let timeoutID = setTimeout(() => {
  console.log("This will never be logged");
}, 5000);

clearTimeout(timeoutID);  // The setTimeout is cancelled before it executes
In this case, the message will not be logged because clearTimeout(timeoutID) cancels it.

2. setInterval
setInterval is used to execute a function repeatedly at specified time intervals. It keeps running the function until you stop it.

Syntax:
javascript
Copy code
let intervalID = setInterval(function, interval, param1, param2, ...);
function: The function to execute repeatedly.
interval: The time (in milliseconds) between each function call.
param1, param2, ...: Optional parameters passed to the function.
Example 1: Basic setInterval
javascript
Copy code
setInterval(() => {
  console.log("This will be logged every 2 seconds");
}, 2000);  // 2000 milliseconds = 2 seconds
In this example, the message will be logged every 2 seconds continuously.

Example 2: Using Parameters in setInterval
javascript
Copy code
function displayNumber(num) {
  console.log(`The number is ${num}`);
}

let number = 1;
setInterval(displayNumber, 1000, number);  // "The number is 1" every 1 second
You can also pass parameters just like in setTimeout. Here, displayNumber will print the same number repeatedly.

Stopping setInterval
setInterval runs continuously, but you can stop it by using clearInterval().

javascript
Copy code
let counter = 0;
let intervalID = setInterval(() => {
  console.log(`Count: ${counter}`);
  counter++;

  if (counter === 5) {
    clearInterval(intervalID);  // Stop the interval after 5 iterations
  }
}, 1000);  // Run every 1 second
In this example, the interval stops after printing 5 iterations of the counter.

3. Differences Between setTimeout and setInterval
Feature	setTimeout	setInterval
Execution	Runs once after a delay	Runs repeatedly at fixed intervals
Cancel	Can be cancelled with clearTimeout	Can be cancelled with clearInterval
Usage	Delaying tasks	Running tasks at regular intervals
4. Combining setTimeout and setInterval
There might be cases where you want to combine both for more flexible functionality. For example, you can use setTimeout inside setInterval to change the interval dynamically or to create a custom repeating behavior.

Example: Using setTimeout to Create a Custom Interval
javascript
Copy code
function customInterval() {
  console.log("Running task...");
  
  // Set another timeout dynamically with a delay of 2 seconds
  setTimeout(customInterval, 2000);
}

// Start the first timeout
setTimeout(customInterval, 2000);
In this example, the customInterval function keeps running after every 2 seconds, but we're using setTimeout to manually create the delay instead of setInterval.

5. Advanced Use Cases
Example: Countdown Timer using setInterval
javascript
Copy code
let countdown = 10;
let intervalID = setInterval(() => {
  console.log(`Time left: ${countdown}s`);
  countdown--;

  if (countdown < 0) {
    clearInterval(intervalID);  // Stop the countdown
    console.log("Countdown finished!");
  }
}, 1000);  // Run every 1 second
This is a simple countdown timer where the interval updates the time left every second and stops when it reaches zero.

Example: Delayed Action using setTimeout
javascript
Copy code
function delayedAction() {
  console.log("This action is delayed by 5 seconds");
}

// Delay the function execution by 5 seconds
setTimeout(delayedAction, 5000);
Here, the delayedAction function is delayed by 5 seconds.
*/