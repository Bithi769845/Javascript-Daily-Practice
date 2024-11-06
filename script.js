// Object Manipulation
const student = {
   name: "Mitu",
   age: 20,
   grades: [90, 60, 80, 70],
   averageGrades: function() {
      let sum = 0;
      for (let i = 0; i < this.grades.length; i++) {
         sum += this.grades[i];
      }
      console.log(sum / this.grades.length); // Dividing by the number of grades
   }
};

// Call the method to calculate and print the average grade
student.averageGrades();
