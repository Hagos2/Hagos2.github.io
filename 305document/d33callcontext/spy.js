"use strict";
/*eslint-disable*/
//module.exports = {spy ,delay};
function spy(func) {

    function wrapper(...args) {
      // using ...args instead of arguments to store "real" array in wrapper.calls
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
  
    wrapper.calls = [];
  
    return wrapper;
    
  }
  function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
    
  }
  
  let f1000 = delay(console, 1000);
  
  f1000("test"); // shows "test" after 1000ms
  (f1000("test"));
  
//   function spy(func) {
//     return function wrapper(...args) {
//       if (!wrapper.calls)  wrapper.calls = [];
//       wrapper.calls.push(args);
//       return func.call(this, ...args);
//     }
// }