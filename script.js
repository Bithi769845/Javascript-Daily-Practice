//  Advanced Object Manipulation and Methods

const calculator = {
  result: 0,
addition: function(a){
 this.result+=a;
 return this.result;
},
subtraction: function(a)
{
 this.result-=a;
 return this.result; 
},
multiplication: function(a)
{
  this.result*=a;
  return this.result;

},
division: function(a)
{
  if (a === 0) {
    return "Error: Division by zero is not allowed.";
}
if (this.result === 0) {
  this.result = a; 
} else {
  this.result /= a;
}
return this.result;
},
reset: function()
{
  this.result = 0;
  return this.result;
}
};

console.log(
  calculator.division(0)
)
console.log(
  calculator.addition(50)
)
console.log(
  calculator.subtraction(15)
)

console.log(
  calculator.multiplication(3)
)

console.log(
  calculator.division(5)
)

