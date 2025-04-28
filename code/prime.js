function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // If the number is divisible by any number other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisors are found, the number is prime
}

// Test the function
console.log(isPrime(5)); // true (5 is prime)
console.log(isPrime(10)); // false (10 is not prime)
console.log(isPrime(2)); // true (2 is prime)
console.log(isPrime(13)); // true (13 is prime)
