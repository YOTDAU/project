// console.log("Howdy, from game.js");

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
// console.log(choices)

const TEST_API = 'https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple'


let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0 
let availableQuestions = [];

const API_Questions = {
    getQuestions: () => fetch(TEST_API)
    .then(response => response.json())
    .then(questions => renderQuestions(questions)) 
}

const renderQuestions = questions => {
    questions.forEach(question => {
        getNewQuestion(question)
    });
};

let questions = [
    {
      question: "Best coder",
      choice1: " Simon",
      choice2: " Simon",
      choice3: " Simon",
      choice4: " George",
      answer: 1
    },
    {
      question:
        "Rick is...",
      choice1: " a bozo",
      choice2: " cute",
      choice3: " a div",
      choice4: " all the above",
      answer: 4
    },
    {
      question: " What is the capital of capital of France",
      choice1: " Smashing",
      choice2: " Paris",
      choice3: " lame",
      choice4: " hardcoding is always the best way tbh",
      answer: 2
    }
  ];

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    // if(availableQuestions.length === 0){ 
    //     // go to end page
    //     return window.location.assign('/end.html');
    // }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    // console.log(availableQuestions)
    acceptingAnswer = true; 
};

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        if (!acceptingAnswer) return;


        acceptingAnswer = false; 
        const selectedChoice = event.target
        const selecterAnswer = selectedChoice.dataset['number'];

        console.log(selecterAnswer == currentQuestion.answer);
        
        const classToApply = 'incorrect';
        if(selecterAnswer == currentQuestion.answer) {
            classToApply = 'correct';
        }

        getNewQuestion();
    });
})

startGame();