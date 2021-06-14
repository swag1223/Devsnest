// Write a JavaScript program to get the length of a JavaScript object.
// Sample object: var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

function lenOfObj(obj) {
    console.log('length of object is: ' , Object.keys(obj).length);
    return;
}

lenOfObj(student);

// function lenOfObj(object) {
//     var keyArr = Object.keys(object);
    
//      var count = 0;
//      for (let i = 0; i < keyArr.length; i++) {
//          count +=1;
//      }
//      console.log(count);
//      return;
// }
// lenOfObj(student);


