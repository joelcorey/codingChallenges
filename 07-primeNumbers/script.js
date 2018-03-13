// 7. Prime Numbers
// a. A prime number is a number that is only divisible by one and itself.
// b. Write a function that prints out all prime numbers between 1 and 100 
// Credit: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

"use strict";

function test_prime(n) {

  if(n===1) {
    return false;
  }
  else if(n === 2) {
    return true;
  }
  else {
    for(var x = 2; x < n; x++) {
      if(n % x === 0) {
        return false;
      }
    }
    return true;  
  }
}

for(let i = 0; i < 100; i++) {
    console.log(i + " " + test_prime(i));
}