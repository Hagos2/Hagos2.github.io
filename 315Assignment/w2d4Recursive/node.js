/*eslint-disable */

let node3 = {
  name: "p",
  value: "This is text in the a paragraph",
  children: null
};
let node4 = {
  name: "label",
  value: "Name",
  children: null
};
let node5 = {
  name: "input",
  value: "this was typed by a user",
  children: null
};
let node2 = {
  name: "div",
  value: null,
  children: [node4, node5]
};
let node1 = {
  name: "body",
  children: [node2, node3],
  value: null,
}

  1.
function printNames(node1) {
  console.log(node1.name + ":" + node1.value);
  if (node1.children && node1.children.length > 0) {
    node1.children.forEach(function (child) {
      printNames(child);
    })
  }
}
printNames(node1)

function printNamesWithLoop(node1) {
  console.log(node1.name + ":" + node1.value);
  if (node1.children && node1.children.length > 0) {
    node1.children.forEach(function (child) {
      console.log(child.name + ":" + child.value);
      if (child.children && child.children.length > 0) {
        child.children.forEach(function (grandChild) {
          console.log(grandChild.name + ":" + grandChild.value);
        });
      }
    })
  }
}
printNamesWithLoop(node1);

//  2. Array version

function arrayNameValue(node1) {
  let arr = [];
  arr.push(node1.name + ":" + node1.value);
  // console.log(node1.name + ":" + node1.value);
  if (node1.children && node1.children.length > 0) {
    node1.children.forEach(function (child) {
      arr.push(arrayNameValue(child));
    })
  }
  return arr;
}
console.log(arrayNameValue(node1));

function ArrayNameValueLoop(node1) {
  let arr = [];
  console.log(node1.name + ":" + node1.value);
  if (node1.children && node1.children.length > 0) {
    node1.children.forEach(function (child) {
      console.log(child.name + ":" + child.value);
      if (child.children && child.children.length > 0) {
        child.children.forEach(function (grandChild) {
          arr.push(grandChild.name + ":" + grandChild.value);
        });
      }
    })
  }
  return arr;
}
console.log(ArrayNameValueLoop(node1));


