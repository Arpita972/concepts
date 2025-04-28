const fs = require("fs")

fs.readFile("a.txt","utf8",(err,data)=>{
if (err) {
    console.log(err)
} else {
    console.log(data)
}
})

fs.writeFile("a.txt","hi i am writing this",(err,data)=>{
if (err) {
    console.log(err)
}else{
    console.log("data inserted")
}
})

// Appending to the file
fs.appendFile("a.txt", "\nhi i am writing this", (err) => {
  if (err) {
    console.log("Error appending file:", err);
  } else {
    console.log("Data appended successfully");
  }
});