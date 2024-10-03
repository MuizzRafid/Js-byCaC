"use strict";

var accountId = 1232;
var accountGmail = "muizzrafid1@gmail.com";
accountCity = "panchagarh"; //an undeclared variable become global also if it in scope

console.log(accountId);
console.table([accountId, accountGmail, accountCity]); // ** https://www.geeksforgeeks.org/javascript-variables/?ref=roadmap

/*
In JavaScript, var, let, and const are used to declare variables, but they have some
 key differences regarding scope, reassignability, and hoisting.

1. var:
Scope: Variables declared with var are function-scoped or globally scoped if declared outside of any function. They are not block-scoped (i.e., not confined within {} like loops or if-statements).
Reassignability: You can reassign and re-declare variables declared with var.
Hoisting: var declarations are hoisted to the top of their scope, meaning you can use them before declaring them. However, they will have an undefined value until the declaration line is reached in execution.
Example:
javascript
Copy code
console.log(a); // undefined (due to hoisting)
var a = 10;
console.log(a); // 10
2. let:
Scope: let is block-scoped, meaning it is only accessible within the block {} in which it is declared (like within loops, functions, or conditionals).
Reassignability: You can reassign variables declared with let, but you cannot re-declare them within the same scope.
Hoisting: let is hoisted but not initialized, so using a let variable before declaration results in a ReferenceError.
Example:
javascript
Copy code
{
  let b = 20;
  console.log(b); // 20
}
console.log(b); // ReferenceError: b is not defined
3. const:
Scope: Like let, const is block-scoped.
Reassignability: const is used for variables that should not be reassigned. Once assigned a value, it cannot be changed. However, if the const holds an object or array, its properties or elements can still be modified (but the variable cannot be reassigned).
Hoisting: const is also hoisted but not initialized, and using it before declaration will cause a ReferenceError.
Example:
javascript
Copy code
const c = 30;
console.log(c); // 30
c = 40; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // This works because we are not reassigning the variable
console.log(arr); // [1, 2, 3, 4]
Summary:
var: Function-scoped, can be redeclared/reassigned, hoisted (initialized to undefined).
let: Block-scoped, can be reassigned but not redeclared in the same scope, hoisted (but not initialized).
const: Block-scoped, cannot be reassigned/redeclared, hoisted (but not initialized).

                     //VAR NOT IN TDZ
var does not have a Temporal Dead Zone (TDZ), which is why it behaves differently from let and const. When you declare a variable using var, the declaration is hoisted to the top of its function or global scope, and it is immediately initialized to undefined, even if the assignment happens later in the code. This is 
why you can access a var variable before its declaration without getting a ReferenceError.
*/