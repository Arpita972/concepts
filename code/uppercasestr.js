// JavaScript Program to Convert the First Letter of a String into UpperCase

// function uppercase(str){
// let newstr = str.charAt(0).toUpperCase()+str.slice(1)
// return newstr
// }
// console.log(uppercase("arpita"));


// JavaScript Program to Convert the alternate Letter of a String into UpperCase
function alternative(str){
    let result = ""
for (let i = 0; i < str.length; i++) {
    if (i%2===0) {
        result += str.charAt(i).toUpperCase()
    } else {
      result += str.charAt(i).toLowerCase(); // Odd index → lowercase
    }
}
return result
}
console.log(alternative("arpita"));