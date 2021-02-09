//class creating 

class Person {
    constructor(firstName, lastName, ID) {
      this.name = `${firstName} ${lastName}`;
      this.ID = ID;

    }
  
    StudentInfo = () => console.log(`Student information:  
    Name: ${this.name} 
    ID: ${this.ID}`);
  }


class Student extends Person {
    constructor(firstName, lastName, ID, age, Email) {
      super(firstName, lastName, ID,age,Email);
      this.age = age;
      this.Email =firstName+ID+"@hotmail.com";
    }
  
    StudentInfo = () =>
      console.log(` Name: ${this.name}
       Email: ${this.Email}
       Age: ${this.age} years old!`);
  }

  class NextYear extends Student{
 constructor(firstName,lastName,age){
     super(firstName,lastName,age);
     this.NewAge=age+1;
 }
 StudentInfo =() =>
 console.log(`The student named: ${this.name} that is ${this.age} is going to be ${this.NewAge} next year`)
  
  }
//first class 
  const person = new Person("Taiba", 
  "Althunayan",
  "14891");

  person.StudentInfo(); 
  

  // second class
const student= new Student("Thunayan"
,"Althunayan",
"14833",
22);

student.StudentInfo();

// third class
const newAge= new NextYear("Shaykha","Althunayan",26);

newAge.StudentInfo();