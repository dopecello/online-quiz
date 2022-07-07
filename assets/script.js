const questionText = document.querySelector('#question');
const questionNumber = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const choiceOne = document.querySelector('#choice-one'); 
const choiceTwo = document.querySelector('#choice-two');
const choiceThree = document.querySelector('#choice-three');
const choiceFour = document.querySelector('#choice-four');

let currentQuestion = 0
let score = 0

const questions = [
    {
        id: 0,
        question: 'Who is the inventor of JavaScript?',
        a: 'James Gosling',
        b: 'Tim Berners-Lee',
        c: 'Google',
        d: 'Brandon Eich',
        correct: 'Brandon Eich',
    },
    {
        id: 1,
        question: 'Which data type is not a primitive one?',
        a: 'String',
        b: 'Array',
        c: 'Number',
        d: 'Object',
        correct: 'd',
    },
    {
        id: 2,
        question: 'What does DOM stand for?',
        a: 'Dimunated Orientation Module',
        b: 'Document Object Model',
        c: 'Dominant Overload Mitigator',
        d: 'Dollar Order Meal',
        correct: 'b',
    },
    {
        id: 3,
        question: 'What JavaScript mechanism moves variables, classes, or function declarations to the top of their scope before code execution?',
        a: 'Lifting',
        b: 'Bubbling',
        c: 'Hoisting',
        d: 'Hurling',
        correct: 'c',
    },
    {
        id: 4,
        question: 'What types of web storage exist when working with a browser?',
        a: 'Local Storage',
        b: 'External Storage',
        c: 'Session Storage',
        d: 'Both A + C',
        correct: 'd',
    },
    {
        id: 5,
        question: 'What is IIFE?',
        a: 'Immediately Invoked Function Expression',
        b: 'Inner Integer Function Expression',
        c: 'Important Imminent Feature Exploit',
        d: 'Insanely Idiotic Female Entreprenuer',
        correct: 'a'
    }
];

function loadQuiz () {
    let qAndA = questions[currentQuestion]
    questionText.textContent = qAndA.question
    choiceOne.textContent = qAndA.a
    choiceTwo.textContent = qAndA.b
    choiceThree.textContent = qAndA.c
    choiceFour.textContent = qAndA.d
}

loadQuiz();

function changeQuestion (event) {
    var correct = questions[currentQuestion].correct
    if (correct !== event.target.textContent) {
        counter = counter - 5;
    }
    currentQuestion++
    loadQuiz();
}

let questionTrigger = document.querySelectorAll(".choice-container")
questionTrigger.forEach(function(answerEl){
    answerEl.addEventListener('click', changeQuestion)
})

//timer function
let counter = 120
var countdown = function () {
    document.getElementById("timer-text").innerHTML = (counter);
    counter--;
    if (counter === -1) {
        clearInterval(startCountdown)
        window.location.replace("./end.html");
    }
    else if (currentQuestion === questions.length) {
        localStorage.setItem("score", counter)
        window.location.replace("./end.html")
    }
};
var startCountdown = setInterval(countdown, 1000);







