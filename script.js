//  Array Iteration and Search

const employees = [
   { name: "Rubab", position: "Developer", salary: 15000 },
   { name: "Hafsa", position: "Data Analyst", salary: 20000 },
   { name: "Ali", position: "Project Manager", salary: 25000 },
   { name: "Sara", position: "UI/UX Designer", salary: 18000 },
   { name: "Khan", position: "DevOps Engineer", salary: 22000 },
   { name: "Maya", position: "HR Manager", salary: 17000 },
   { name: "Zahid", position: "QA Engineer", salary: 16000 },
   { name: "Tariq", position: "Data Scientist", salary: 30000 },
   { name: "Nida", position: "Marketing Specialist", salary: 19000 },
   { name: "Fahad", position: "Product Owner", salary: 24000 }
 ];
 
 const result = employees.filter(employee => employee.salary < 20000)
 .map(employee=>({name:employee.name,position:employee.position}));
 console.log(result);