// JavaScript Program to Count the Number of Vowels in a String

function countvowels(str){
let count = 0
let vowels = "aeiou"
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
        count ++
    } 
}
return count
}
console.log(countvowels("ArpiTa"));
