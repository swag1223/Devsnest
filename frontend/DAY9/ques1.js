let student = {
    name: 'Horizon',
    marks: 95,
    isQualified: function (remarks1, remarks2) {
        if (this.marks >= 33) console.log(this.name + "'s " + "result: PASS ");
        else console.log(this.name + "'s " + "result: FAIL ");
        console.log("Character: " + remarks1)
        console.log("Promoted: " + remarks2)
    }
}

let student2 = {
    name: 'Chommu',
    marks: 25,
}

// student.isQualified.call(student, 'Good', 'Yes');
// student.isQualified.call(student2, 'Silly', 'No');

// student.isQualified.apply(student, ['Good', 'Yes']);
// student.isQualified.apply(student2, ['Silly', 'No']);

let report = student.isQualified.bind(student, 'Good', 'Yes');
report();
console.log('\n');
let report2 = student.isQualified.bind(student2, 'Silly', 'No');
report2();
