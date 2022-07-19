


let db = [
    {id:1, fname: 'John', lname: 'Smith'},
    {id:2, fname: 'Lucy', lname: 'Jark'},
    {id:3, fname: 'Edward', lname: 'Capton'}
];
class Student {
    constructor(id, firstname, lastname){
        this.id = id;
        this.fname = firstname;
        this.lname = lastname;
    };
    save(){
        
        const stu=db.find(user=>user.id===this.id);
        if(stu){
throw new Error('student already exist with id' + this.id)
        }
        else{
            db.push(this);
        }
        console.log("SAVE: ", db, "\n") 
    };
    edit(){
        let obj= db.find(elem => elem.id==this.id)
        obj.fname= this.fname;
        obj.lname= this.lname;
    
    };
    getById(id){
        let student= db.find(stud => stud.id==id)
        return student;
    };
    getAll(){
        return db;
    };
    deleteById(id){
        // use splice
        let index= db.indexOf(db.find(stud => stud.id==id));
        db.splice(index,1);
        return index+1;
    };
};
new Student(4, 'gebre', 'hagos').save(); //save to db
new Student(4, 'Miss', 'Xing').edit() //edit studentId with id=4
let gebre= new Student();
console.log("Student ", gebre.deleteById(2), " removed! \n"); //remove studentId=4 from db
console.log("All students: ", gebre.getAll(), "\n"); //return db;
console.log("Student with ID 1: ", gebre.getById(1)); //return {id:1, fname: 'John', lname: 'Smith'}