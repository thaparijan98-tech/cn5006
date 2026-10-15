function EmployeeInfo(name, Salary) 
{ 
console.log("Welcome " + name + " Your monthly Salary is " + Salary); 
} 

const currentDateTime = new Date(); 
console.log("This is my first program"); 
console.log("Programe run on : " +  currentDateTime.toLocaleString()); 
 
 var EmpName = "rijan"; 
 var EmpSalary = 550000; 
function EmployeeInfo(name, Salary) 
{ 
console.log("Welcome " + name + " Your monthly Salary is " + Salary); 
} 
console.log("This is my first program"); 
console.log("Programe run on : " +  currentDateTime.toLocaleString()); 
  
var EmpName = "rijan"; 
var EmpSalary = 550000; 
  
// Calling the function 
EmployeeInfo(EmpName, EmpSalary); 
// Add this for Second Exercise 
const EmpSkills= (skills,Name,LabGrp)=> { 
  console.log(" Student ID"+ Name+ "Expert in "+ skills);
  console.log("Lab Group Name",LabGrp);
} 
EmpSkills("java","3200781","19");

// code for third Exercise 
const student= require('./StudentInfo')  
const person = require('./Person')  
// because getName is the function so we use ()  
console.log("Student Name:" +student.getName())   
console.log(student.Location())  
console.log(student.dob)  
// because dob is a variable so we do nt use ()  
console.log(student.Studentgrade())  
console.log("grade is "+student.Studentgrade(55) ) 
person1= new person("rijan","uk","thaparijan98@gmail.com")  
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended") 

