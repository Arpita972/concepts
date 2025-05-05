function checkprime(num){
if(num<=1) return false
let sqrt = Math.sqrt(num)
for (let i = 2; i <= sqrt; i++) {
    if(num%i==0){
        return false
    }
}
return true
}

function printPrimesInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}
printPrimesInRange(10, 50);
