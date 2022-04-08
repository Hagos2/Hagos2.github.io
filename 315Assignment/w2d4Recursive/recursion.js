"use strict";

/*eslint-disable */
function sumTo(n) {
  if (n <= 0) {
    return 0;
  } else {
    return n + sumTo(n - 1);
  }
}
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
function fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function outputListLoop(list, printed = "") {
  while (list) {
    printed += list.value + " ";
    list = list.next;
  }
  return printed + "printed to console";
}
function outputList(list, printed = []) {
  if (list !== null) {
    printed.push(list.value);
    outputList(list.next, printed);
  }
  return printed.join(" ")  + " printed to console";
}

function reverseListLoop(list) {
  let arrP = [];
  let reversed = "";
  while (list !== null) {
    arrP.push(list.value);
    list = list.next;
  }
  for (let i = arrP.length - 1; i >= 0; i--) {
    reversed += arrP[i] + " ";
  }
  return reversed + "printed to console";
}
function reverseList(list, printed = []) {
  if (list !== null) {
    printed.unshift(list.value);
    reverseList(list.next, printed);
  }
  return printed.join(" ")  + " printed to console";
}