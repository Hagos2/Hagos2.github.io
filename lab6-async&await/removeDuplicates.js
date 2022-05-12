//1
Array.prototype.removeDuplicatesAsync = async function () {
    let arr = this;
    let result = await new Promise(function (resolve, reject) {
        resolve([...new Set(arr)]);
    });
    console.log(result);
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);

//2
async function removeDuplicates(arr){
    return arr.filter((value, index, arr) => arr.indexOf(value) === index)       
}
Array.prototype.removeDuplicatesAsync = async function(){
    let result = await removeDuplicates(this);
    console.log(result);
    
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);
