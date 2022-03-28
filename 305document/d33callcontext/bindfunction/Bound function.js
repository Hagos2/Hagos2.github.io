"use strict";
/*eslint-disable*/

function f() {
    console.log( this ); // null
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();