/*eslint-disable*/

class Student{
constructor(id,firstname,lastname){
    this.id=id;
    this.fname=firstname;
    this.lname=lastname;
}
toString(){
    return 'Hi 2'
}
[symbol.toPrimitive](){
    return 'Hi 1';
}
valueOf(){
    return 'Hi 3';
}
}
let stu=new Student(4,'Tina','xing');
console.log(`{stu}`);