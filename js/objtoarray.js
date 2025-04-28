const person = {
  firstName: "John",
  lastName: "Doe",
};

//gives only key
// const propertyNames = Object.keys(person);
// console.log(propertyNames);//firstName,lastName

//gives only values
// const propertyNames = Object.values(person);
// console.log(propertyNames);//John,Doe

//gives only key values pair
const propertyNames = Object.entries(person);
console.log(propertyNames); //John,Doe
