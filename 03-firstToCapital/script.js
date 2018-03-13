// 3. Capitalize letter
// a. Write a function that takes the string parameter being passed and capitalize 
// the first letter of each word. Words will be separated by only one space. i.e. “hello world” 
// should be outputted as “Hello World”

"use strict";

function capitalize(sen) {
    let splitAll = sen.split("");
    let previousChar;

    for (let x = 0; x < splitAll.length; x++) {
        if(previousChar == " ") {
            splitAll[x] = splitAll[x].toUpperCase();
        }
        previousChar = splitAll[x];    
    }
    splitAll = splitAll.join("");
    return splitAll;
}