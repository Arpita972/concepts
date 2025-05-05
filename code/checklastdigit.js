function haveSameLastDigit(num1, num2) {
  if (num1 % 10 === num2 % 10) {
    console.log("The numbers have the same last digit.");
  } else {
    console.log("The numbers do not have the same last digit.");
  }
}

haveSameLastDigit(123, 43); // Output: The numbers have the same last digit.
haveSameLastDigit(123, 56); // Output: The numbers do not have the same last digit.