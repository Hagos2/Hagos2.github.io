"use strict";
//Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
//JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.

    
  
  let user2 = JSON.parse(JSON.stringify(user));
  
  // cloning objects
  const cloneUser2 = JSON.parse(JSON.stringify(user));