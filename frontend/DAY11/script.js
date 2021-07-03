const playButton = document.querySelector('.play');
const questionBox = document.querySelector('.question-box');
const ques = document.querySelector('.ques');
const optionsbtn = document.querySelectorAll('.btn');
const nextButton = document.querySelector('.next');

console.log(optionsbtn);



let shuffleQues, currentQuesIndex;

playButton.addEventListener('click', play);
// nextButton.addEventListener('click', () => {
//     currentQuesIndex++;
//     nextQues();
// })

const questionsList = [
    {
        ques: "Some months have 30 days, some have 31, how many months have 28 days ?" ,
        option1: "One",
        option2: "Four",
        option3: "Six",
        option4: "Twelve",

        correctAns: "Twelve"

    },
    {
        ques: "A plane crashes on the border of India-Pakistan . Where do the survivors get buried ?" ,
        option1: "In hell",
        option2: "In the graveyard",
        option3: "In heaven",
        option4: "They dont get buried lol",

        correctAns: "They dont get buried lol"
    },
    {
        ques: "If You Overtake the 3rd Person in a Race, What Would be Your Position?" ,
        option1: "First",
        option2: "Second",
        option3: "Third",
        option4: "Last",

        correctAns: "Third"
    },
    {
        ques: "A single storey house has 3 rooms , all the furniture is yellow. What's the colour of the stairs?" ,
        option1: "Yellow",
        option2: "No staircase",
        option3: "Green",
        option4: "Pink",

        correctAns: "No staircase"
    },

    {
        ques: "There's a family with a mother, father , 3 daughters and each daughter has one brother. How many family members are there in total ?" ,
        option1: "Six",
        option2: "Eight",
        option3: "Ten",
        option4: "Five",

        correctAns: "Six"

    },
    {
        ques: "Ali's fatherhas 5 children , the first 4 are named 1, 2, 3, 4. What is the name of the fifth child ?" ,
        option1: "Raj",
        option2: "5",
        option3: "Ali",
        option4: "Kabir",

        correctAns: "Ali"

    }
]

function play() {
    console.log('yeah im working');
    playButton.classList.add('hide');

    shuffleQues = questionsList.sort(() => Math.random() - .5);
    currentQuesIndex = 0;
    questionBox.classList.remove('hide');
    nextQues();

}

function nextQues() {
    displayQues(shuffleQues[currentQuesIndex]);
    console.log(currentQuesIndex);
    currentQuesIndex++;

}

function displayQues(question) {
    ques.innerText = question.ques;
    optionsbtn[0].innerText = question.option1;
    optionsbtn[1].innerText = question.option2;
    optionsbtn[2].innerText = question.option3;
    optionsbtn[3].innerText = question.option4;

    // optionsbtn.forEach(btn => {
    //     btn.addEventListener('click', selectAnswer);
    // });
    for (let i = 0; i < 4; i++) {
        optionsbtn[i].addEventListener('click', selectAnswer);
    }

    function selectAnswer(e) {
        const selectedButton = e.target; //gets us the button that fired the click event
        if (selectedButton.innerText === question.correctAns) {
            e.target.classList.add('correct');
        }
        else {
            e.target.classList.add('incorrect');
        }
        setTimeout(() => {
            resetClass(selectedButton);
        }, 1500);
        // resetClass(selectedButton);
        //not on last ques
        if (currentQuesIndex != shuffleQues.length-1) {
            // nextButton.classList.remove('hide');
    
            // 
            setTimeout(() => {
                nextQues();
            }, 1500);
          } //else {
        //    playButton.innerText = 'Restart';
        //     playButton.classList.remove('hide');
        // //     // nextButton.classList.add('hide');
        //  } 
        
    
    }

}
function resetClass(e) {
        e.classList.remove('correct');
        e.classList.remove('incorrect');
    }
