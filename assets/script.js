const question = document.querySelector('#question');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const startQuizButton = document.querySelector('#start-quiz');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestion = [];

let questions = [
    {
        question: 'Who is the inventor of JavaScript?',
        choice1: 'James Gosling',
        choice2: 'Tim Berners-Lee',
        choice3: 'Google',
        choice4: 'Brandon Eich',
        answer: 4,
    },
    {
        question: 'Which data type is not a primitive one?',
        choice1: 'String',
        choice2: 'Array',
        choice3: 'Number',
        choice4: 'Object',
        answer: 4,
    },
    {
        question: 'What does DOM stand for?',
        choice1: 'Dimunated Orientation Module',
        choice2: 'Document Object Model',
        choice3: 'Dominant Overload Mitigator',
        choice4: 'Dollar Oats Meal',
        answer: 2,
    },
    {
        question: 'What JavaScript mechanism moves variables, classes, or function declarations to the top of their scop before code execution?',
        choice1: 'Lifting',
        choice2: 'Bubbling',
        choice3: 'Hoisting',
        choice4: 'Hurling',
        answer: 3,
    },
    {
        question: 'What types of web storage exist when working with a browser?',
        choice1: 'Local Storage',
        choice2: 'External Storage',
        choice3: 'Session Storage',
        choice4: 'Both A + C',
        answer: 4,
    },
    {
        question: 'What is IIFE?',
        choice1: 'Immediately Invoked Function Expression',
        choice2: 'Inner Integer Function Expression',
        choice3: 'Important Imminent Feature Exploit',
        choice4: 'Insanely Idiotic Female Entreprenuer',
        answer: 1,
    },
]

//timer functions/variables

var counter = 60
var countdown = function(){
    document.getElementById("timer-text").innerHTML = (counter);
    counter--;
    if (counter === -1) {
        clearInterval(startCountdown)
        window.location.replace("./end.html");
    }
};

var startCountdown = setInterval(countdown, 1000);
countdown(startCountdown);

