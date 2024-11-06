//Arithmetic Operation by Object


function Arithmetic_Operation_by_Object(X,Y)
{
    return {
     Sum : function()
     {
        return X + Y;
     },
     Sub : function()
     {
        return X-Y;
     },
     Mul : function()
     {
        return X*Y;
     }
    };
}
const ArithmeticOperation = Arithmetic_Operation_by_Object(50,10);
console.log(ArithmeticOperation.Sum());