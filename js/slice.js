let arr = ["start", "middle", "end"];

arr.splice(1, 1, "new middle");
// At index 1, remove 1 item ("middle"), and add "new middle"

console.log(arr);
// ["start", "new middle", "end"]



const fruits = ["apple", "banana", "cherry", "date"];

const newFruits = fruits.slice(1, 3); 
console.log(newFruits);  // ["banana", "cherry"]
console.log(fruits);     // ["apple", "banana", "cherry", "date"] (original not changed)

//start = where to begin (inclusive)
//end = where to stop (exclusive)





