// 5. Palindrome
// a. A word, phrase, or sequence that reads the same backward as forward i.e. madam
// b. Write a function that takes a user input and checks to see if it is a Palindrome and reports the result

"use strict";

function checkPalindrom(word) {
    let splitWord = word.split("");
    let reverseWord = splitWord.reverse();
    let reverse = reverseWord.join("");

    console.log(word);
    console.log(reverse);

    if (word == reverse) {
        console.log("yes");
    } else {
        console.log("no");
    }
    

}

checkPalindrom("racecar");