// Buttons
var startBtn = document.getElementById('start-button');
var answerButton1 = document.getElementById('button-1');
var answerButton2 = document.getElementById('button-2');
var answerButton3 = document.getElementById('button-3');
var answerButton4 = document.getElementById('button-4');


// Divs
var startDiv = document.getElementById('start-div');
var questionDiv = document.getElementById('question-div');
var allDoneDiv = document.getElementById('allDone-div');
var highScoresDiv = document.getElementById('highscores-div');
var userHighScoreForm = document.getElementById('add-user-high-score');

// Elements
var timerEl = document.getElementById('timer');
var questionText = document.getElementById('question-text');
var userNameEl = document.getElementById('user-name-element');
var yourScoreEl = document.getElementById('your-score-element');

// Starting variables
var timeLeft = 5;
var questionNumber = 0;
var yourScore = 0;


// Object containing all questions and answer choices
var quizQuestions = {
    'question-0': {
        'question': 'Commonly used data types do NOT inlude:',
        'answers': ['Booleans', 'Numbers', 'Alerts', 'Strings'],
        'correct': 'Alerts'
    },
    'question-1': {
        'question': 'A question',
        'answers': ['flerp', 'derp', 'lerp', 'gerp'],
        'correct': 'derp',
    }
}

//Starts the quiz
startBtn.addEventListener('click', function () {
    startQuiz();
});

function startQuiz() {
    // Hide start div, show question div
    startDiv.setAttribute('class', 'container hidden');
    questionDiv.setAttribute('class', 'container');

    // // Start timer
    // var timeLeft = 5;
    // var questionNumber = 0;
    // var yourScore = 0;

    questionDiv.addEventListener('click', function (event) {
        // only apply listener to buttons
        if (event.target.matches('button')) {
            // if correct answer is chosen
            if (event.target.innerText == quizQuestions['question-' + questionNumber]['correct']) {
                yourScore++;
                questionNumber++;
            } else {
                timeLeft--;
                questionNumber++;
            };
        };
    });

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft
        timeLeft--;

        // Render question and answer choices
        questionText.innerText = quizQuestions['question-' + questionNumber]['question'];

        answerButton1.innerText = quizQuestions['question-' + questionNumber]['answers'][0];
        answerButton2.innerText = quizQuestions['question-' + questionNumber]['answers'][1];
        answerButton3.innerText = quizQuestions['question-' + questionNumber]['answers'][2];
        answerButton4.innerText = quizQuestions['question-' + questionNumber]['answers'][3];

        // when timer ends, get rid of time element //TO DO - OR if question number == 0
        // Display all done div and hide questions div
        if (timeLeft == 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            allDone();
        };

    }, 1000);

};

function allDone() {
    questionDiv.setAttribute('class', 'hidden');
    allDoneDiv.setAttribute('class', 'container');

    yourScoreEl.innerText = yourScore;

    // Event listener 
    userHighScoreForm.addEventListener('click', function (event) {
        if (event.target.matches('button')) {
            var userName = userNameEl.value;
            localStorage.setItem(userName + "'s score", yourScore);
            console.log(event);
            event.preventDefault();
        };

    });

};