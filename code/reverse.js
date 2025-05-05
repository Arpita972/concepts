// JavaScript Program to Reverse a String


// function reverse(str){
//     let newstr = str.split("").reverse().join("")
//     return newstr
// }
// console.log(reverse("arpita"))


function reverse(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse("arpita"));  // Output: atipra
