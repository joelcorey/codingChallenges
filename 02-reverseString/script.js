// 2. Reverse a string
// a. Write a function that takes a string as input and returns the string reversed
// b. i.e. “Hello” will be returned as “olleH”

"use strict";

let word;
let reverse;

function reverseWord(wordToReverse) {
    let wordSplit;
    
    wordSplit = wordToReverse.split("");
    wordSplit.sort(function(a, b){
        return b.length - a.length;
    });
    //
    wordSplit = wordSplit.reverse();
    wordSplit = wordSplit.join("");
    return wordSplit;
}

word = 'Hello';
reverse = reverseWord(word);
console.log(reverse);