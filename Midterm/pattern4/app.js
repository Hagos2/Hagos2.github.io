/* eslint-disable*/
const Person = require('./patternn4'); 
// person=class(person)
const personObj1 = new Person();//create object person ={name:Josh Edward}
 personObj1.getName() // Josh Edward
 personObj1.name = 'Emma Smith'; //{name:Emma Smith}
 personObj1.getName(); //Emma Smith


 const Person2 = require('./patternn4');
const personObj2 = new Person2();//{name:Josh Edward}
//personObj1.getName() // Josh Edward
personObj2.getName();
