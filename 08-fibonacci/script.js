// 8. Fibonacci
// a. A series of numbers in which each number (Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// b. Write a function that does the Fibonacci sequence starting at 1
// c. HARDER VERSION: Write a function that does the Fibonacci sequence starting at a number that a user inputs
// Credit: https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

//OLD:
// function fibonacci(num){
//     var a = 1, b = 0, temp;
  
//     while (num >= 0){
//       temp = a;
//       a = a + b;
//       console.log(a);
//       b = temp;
//       num--;
//     }
//     return b;
//   }
// fibonacci(20);

//New:
"use strict";

function fib(n) {
	//if (n<2) { return n; } else { return fib(n-1)+fib(n-2); }
	return (n<2 ? n : fib(n-1)+fib(n-2));
}


for (let i = 0; i < 10; i++) {
	console.log(fib(i));
}