const A = [1, 2];
const B = [2, 3];


//union (+)
const union = [...new Set([...A,...B])]
// console.log(union)

//Intersection(common)
const Intersection = A.filter(value=>B.includes(value))
// console.log(Intersection)

//difference(-)
const difference = A.filter(value=>!B.includes(value))
console.log(difference)