// Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
// Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 };


var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log("Before deletion: " , student);

//or delete student.rollno;
delete student["rollno"];

// Before deletion: person.age = 50, after deletion, person.age = undefined
console.log("After deletion:" ,student);