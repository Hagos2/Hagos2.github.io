Array.prototype.even = function () {

    let evenArr = new Array();
    this.forEach(item => {
        if (item % 2 === 0) {
            evenArr.push(item)
        }
    })
    return evenArr;
}

console.log("Even numbers: " + [1, 2, 3, 4, 5, 6, 7, 8].even());
