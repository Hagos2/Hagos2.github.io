"use strict";
/*eslint-disable*/
/* 1. Do the 2 timeout exercises from the Advanced working with functions > Scheduling: setTimeout and setInterval section of the book:
a. Output every second
o setInterval version
o make the numbers print out after the “from” seconds, e.g., 5 will print after 5 seconds, then 6 in one more second, etc (this is optional – if you want extra coding practice)
o setTimeout version (this is optional ) b. What will setTimeout show?*/

/**
 * 
 * @param {number} from  is the time 
 * @param {number} to next time in number
 */
//Using setInterval:
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  printNumbers(5, 10);
  // usage:
  //Using nested setTimeout:
  
/**
 * 
 * @param {number} from  is the time 
 * @param {number} to next time in number
 */
  function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // usage:
//  The function to run immediately, then we can add an additional call on a separate line, like this:
/**
 * 
 * @param {number} from  is the time 
 * @param {number} to next time in number
 */
  printNumbers(5, 10);
  
  function printNumbers(from, to) {
    let current = from;
  
    function go() {
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }
  
    go();
    let timerId = setInterval(go, 1000);
  }
  
  printNumbers(5, 10);