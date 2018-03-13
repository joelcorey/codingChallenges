// 4. Compress a string of characters
// a. For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

"use strict";

function findRepeats(sen) {
    let newSen = "";
    let toJoin = [];
    let joined;
    let previousCharacter;
    let count = 0;

    for (let x = 0; x < sen.length; x++) {
        
        if(sen[x] !== previousCharacter) {
            count = 0;
            toJoin.push(newSen);
        } 
        else if(sen[x] === previousCharacter) {
            count += 1;
            newSen = (count + parseFloat(1))  + sen[x];
        }
        previousCharacter = sen[x];
    }
    joined = toJoin.join("");
    return joined;
}

let sentence;

sentence = 'aaabbbbbccccaacccbbbaaabbbaaa';
sentence = findRepeats(sentence);
console.log(sentence);