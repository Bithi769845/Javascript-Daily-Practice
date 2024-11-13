function isPalindrome(num) {
   // Initialize reverse based on the type of num
   let reverse = typeof num === 'bigint' ? BigInt(0) : 0;
   let temp = num;

   while (temp > 0) {
      // If num is BigInt, we use BigInt(10); otherwise, just 10 for Number
      const base = typeof num === 'bigint' ? BigInt(10) : 10;
      const rem = temp % base;
      reverse = reverse * base + rem;
      temp = temp / base;

      // For regular numbers, use Math.floor to handle integer division
      if (typeof num !== 'bigint') temp = Math.floor(temp);
   }

   if (num === reverse) {
      console.log("It is a palindrome number");
   } else {
      console.log("It is not a palindrome");
   }
}

// Testing the function with both Numbers and BigInt
isPalindrome(121);               
isPalindrome(123);              
isPalindrome(BigInt(12321));      
isPalindrome(BigInt(123456));     
