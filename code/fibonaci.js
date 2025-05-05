// JavaScript Program to Print the Fibonacci Sequence

let a=0
let b=1

for (let i = 1; i <=10; i++) {
  console.log(a); // print current number

  let next = a + b;
  a = b;
  b = next;
}
