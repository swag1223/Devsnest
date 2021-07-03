const cards = document.querySelectorAll(".cards");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

cards.forEach(card => {
    card.addEventListener('click', doTask);

});

function doTask(e) {
    if (lockBoard) return;
    if (this === firstCard) return;
    // e.target.classList.toggle("flip"); yeh class img pe lg ri h but humein card vle div pe chahiye
    console.log('clicked');
    // console.log(e);
    console.log(this); //we get the cards vla div //iska mtlb is function ko cards vla div fire kr rha h..!!!
    // this.classList.toggle('flip'); 
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this; //this here refers to the cards div ...that is firing this function

    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;
    }
    //console.log(fristCard , secondCard);
    //now we have both the cards we just clicked , we need to check if those match

    isMatch();

}

function isMatch() {
     //element.dataset.namechosen
    // console.log(firstCard.dataset.travel);
    // console.log(secondCard.dataset.travel);
    // now that we can identify our cards we have to check if the dataset.travel from the firstcard and the secondcard are the same.
    //if they are we are going to remove the event listener from the cards to prevent them from being clicked again
    //if not we are going to flip back the cards to the original state.
    if (firstCard.dataset.travel === secondCard.dataset.travel) {
        //if match
        firstCard.removeEventListener('click' , doTask);
        secondCard.removeEventListener('click', doTask);
        resetBoard();
    }
    //console.log('Function is working');
    else {
        //not a match so unflip the cards
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 1000);

    }
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null
}

(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
}) ();