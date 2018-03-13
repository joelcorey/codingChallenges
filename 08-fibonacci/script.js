// 8. Fibonacci
// a. A series of numbers in which each number (Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
// b. Write a function that does the Fibonacci sequence starting at 1
// c. HARDER VERSION: Write a function that does the Fibonacci sequence starting at a number that a user inputs
// Credit: https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      console.log(a);
      b = temp;
      num--;
    }
  
    return b;
  }

fibonacci(20);