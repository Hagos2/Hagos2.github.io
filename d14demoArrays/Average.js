"use strict";

const scores = [10, 20, 30, 40, 50];
/**
 * 
 * @returns{int} return average.
 */
function findAverage() {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }
    let average = sum / scores.length;
    return average;

}
console.log(findAverage(scores));

