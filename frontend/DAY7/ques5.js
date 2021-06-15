// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder: V = πr2h where r is the radius and h is the height of the cylinder.
// Try To Attempt: Difficult Level Increased


var cylinder = {
    radius : 3,
    height : 6
}

function volOfCyl(obj) {
    var vol = Math.PI * obj.radius * obj.radius * obj.height;
    console.log("Volume of Cylinder is: " , vol.toFixed(4) );
    return;
}

volOfCyl(cylinder);