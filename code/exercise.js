
// Sum of every positive element
const input = [1, -4, 12, 0, -3, 29, -150];
let result = input.filter((n)=>n>0)
.reduce((acc,curr)=>acc+curr,0)
// console.log(result)//42



//Count elements in array of arrays
const input2 = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
let result2 = input2.flat().reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr]+=1
    }else{
        acc[curr]=1
    }
    return acc
},{})
// console.log(result2)




//High performing students
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] },
];

let avgsum = students.map((student)=>{
let sum = student.scores.reduce((acc,curr)=>acc+curr)
return{name:student.name,avgsco:sum/student.scores.length}
})
let higest = avgsum.filter((student) => student.avgsco>90);
console.log(avgsum)
console.log(higest)