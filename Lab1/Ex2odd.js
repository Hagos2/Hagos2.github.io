Array.prototype.odd = function () {

    let oddArr = new Array();
    this.forEach(item => {
        if (item % 2 === 1) {
            oddArr.push(item)
        }
    })
    return oddArr;

}

console.log("Odd numbers: " + [1, 2, 3, 4, 5, 6, 7, 8].odd());