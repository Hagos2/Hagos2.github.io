"use strict";
/*eslint-disable*/
    let group = {
      title: "Our Group",
      students: ["John", "Pete", "Alice"],
    
      showList:  function() {
        this.students.forEach(
          //function(student){console.log(this.title + ': ' + student);}  //error – ‘this’ is undefined (or window)
          student => console.log(this.title + ': ' + student)    //works as expected – ‘this’ comes from lexical environment, showList method
        ).bind(this);
      }
    };
    group.showList();
  
    