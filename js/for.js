//For in
const person = { name: "Alice", age: 25 };

for (let key in person) {
  console.log(key); // prints "name" and "age"
  console.log(person[key]); // prints "Alice" and "25"
}


// For of
const numbers = [10, 20, 30];

for (let value of numbers) {
  console.log(value); // prints 10, 20, 30
}


//Object.keys → only keys.

//Object.entries → keys and values together.