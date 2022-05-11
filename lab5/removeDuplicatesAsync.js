Array.prototype.removeDuplicatesAsync=function(){
    new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(this.filter(
          (value, index, arr) => arr.indexOf(value) === index
          ))  
      }, 500)
      setTimeout(()=>{
        reject("error")
      }, 500)
       
    }).then(message => console.log(message))
    .catch(error=> console.error(error));
  }
  let arr = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
  console.log(`start`);
  arr.removeDuplicatesAsync();
  console.log(`end`);
//2
  Array.prototype.removeDuplicatesAsync=function(){
      let arr=this;
      new Promise(function(resolve,reject){
resolve([... new Set(arr)]);
      }).then(console.log);
  }

  //let arr = [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2];
  console.log(`start`);
  arr.removeDuplicatesAsync();
  console.log(`end`);
