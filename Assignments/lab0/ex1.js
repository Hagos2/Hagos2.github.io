
//let arr=[1,2,3,4,5,6,7,8]
Array.prototype.even =function(){
     let evenarr=new Array();
     this.forEach(item=>{
       if (item%2===0 ){
        evenarr.push(item);
       }
     })
     return evenarr;
}


console.log("even numbers: " + [1, 2, 3, 4, 5, 6, 7, 8].even());
//
// Array.prototype.even=function(){

//     return this.filter(n=> n%2==0); 
// }
// let e=arr.even();
// console.log(e);


// Array.prototype.even=function(){

//     return this.filter(n=> n%2!=0); 
// }

// let o=arr.odd();
// console.log(o);
