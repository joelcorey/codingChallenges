// 6. Happy Numbers
// a. https://en.wikipedia.org/wiki/Happy_number

"use strict";

function splitNumber(toSplit) {
    let numberToString = ("" + toSplit).split("");
    parseInt(numberToString);
    return numberToString;
}

function square(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

function add(a, b) {
    return Number(a) + Number(b);
}

function splitSquareSum(number, limit) {
    let original = number;
    let sum;
    let split;

    if(limit < 0) {
        console.log("Not happy. :'(")
        return;
    } 
    else {
        split = square(splitNumber(number));
        sum = split.reduce(add, 0);

        if(split == 1) {
            console.log("Happy!");
            return;
        }
        splitSquareSum(sum, limit - 1);
    }
}

function happyNumber(number){
    splitSquareSum(number, 100);
}

let findThisHappyNumber = 20;
happyNumber(findThisHappyNumber);
