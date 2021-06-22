var getContainer = document.querySelector('.container');
var getBooked = document.querySelector('.booked');
var getRemaining = document.querySelector('.remaining');

var noOfBookedSeats = 0;
var noOfRemainingSeats = 36;

function makeBlock() {
    var block = document.createElement("div");
    block.classList.add('lightblue');
    return block;
}

for (let i = 0; i < 36; i++){
    getContainer.appendChild(makeBlock());
}

getContainer.addEventListener('click', doTask);

function doTask(e) {
    var blockClass = e.target.className;

    if (blockClass === 'lightblue') {
        e.target.classList.remove('lightblue');
        e.target.classList.add('darkblue');
        noOfBookedSeats += 1;
        noOfRemainingSeats -= 1;
        getBooked.innerHTML = "Booked Seats: " + noOfBookedSeats;
        getRemaining.innerHTML = "Remaining Seats: " + noOfRemainingSeats;
    }
    else {
        e.target.classList.remove('darkblue');
        e.target.classList.add('lightblue');
        noOfBookedSeats -= 1;
        noOfRemainingSeats += 1;
        getBooked.innerHTML = "Booked Seats: " + noOfBookedSeats;
        getRemaining.innerHTML = "Remaining Seats: " + noOfRemainingSeats;
    }
}

