// Buttons and links
var startBtn = document.getElementById('start-button');
var answerButton1 = document.getElementById('button-1');
var answerButton2 = document.getElementById('button-2');
var answerButton3 = document.getElementById('button-3');
var answerButton4 = document.getElementById('button-4');
var highScoreslink = document.getElementById('high-scores-link');


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
var highScoresListEl = document.getElementById('high-scores-list-element');

// Starting variables
var timeLeft = 10;
var questionNumber = 0;
var yourScore = 0;

// Check if local storage has high scores, if not create high scores
var highScore;

if (localStorage.getItem('high scores')) {
    highScore = JSON.parse(localStorage.getItem('high scores'));
} else {
    highScore = {
        'names': [],
        'scores': [],
    };
}


// Array containing all questions and answer choices
var quizQuestions = [
    {
        'question': 'Commonly used data types do NOT inlude:',
        'answers': ['Booleans', 'Numbers', 'Alerts', 'Strings'],
        'correct': 'Alerts'
    },
    {
        'question': 'The condition in an if/else statement is enclosed within _______.',
        'answers': ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        'correct': 'curly brackets',
    },
    {
        'question': 'Arrays in JavaScript can be used to store ________.',
        'answers': ['numbers and strings', 'other arrays','booleans','all of the above'],
        'correct': 'all of the above',
    },
    {
        'question': 'String values must be enclosed within _______ when being assigned to variables.',
        'answers': ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        'correct': 'quotess',
    },
    {
        'question': 'A very useful tool used during development and debugging for printing content to the debugger is:',
        'answers': ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        'correct': 'console.log',
    },
    

]

highScoreslink.addEventListener('click', function() {
    showHighScores();
})

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
//Starts the quiz
startBtn.addEventListener('click', function () {
    startQuiz();
});

function startQuiz() {
    // Hide start div, show question div
    startDiv.setAttribute('class', 'container hidden');
    questionDiv.setAttribute('class', 'container');

    questionDiv.addEventListener('click', function (event) {
        // WHEN I answer a question
        // THEN I am presented with another question
        // only apply listener to buttons
        if (event.target.matches('button')) {
            // if correct answer is chosen
            if (event.target.innerText == quizQuestions[questionNumber]['correct']) {
                // Score up 1, and avance the question
                yourScore++;
                questionNumber++;
            } else {
                // WHEN I answer a question incorrectly
                // THEN time is subtracted from the clock
                timeLeft--;
                questionNumber++;
            };
        };
    });

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft
        timeLeft--;

        // Render question and answer choices
        questionText.innerText = quizQuestions[questionNumber]['question'];

        answerButton1.innerText = quizQuestions[questionNumber]['answers'][0];
        answerButton2.innerText = quizQuestions[questionNumber]['answers'][1];
        answerButton3.innerText = quizQuestions[questionNumber]['answers'][2];
        answerButton4.innerText = quizQuestions[questionNumber]['answers'][3];

        // WHEN all questions are answered or the timer reaches 0
        // THEN the game is over
        //Display all done div and hide questions div
        if (timeLeft <= 0 || questionNumber === quizQuestions.length - 1) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            allDone();
        };

    }, 1000);

};

function displayQuestion(currentQuestion) {
    console.log(currentQuestion);
};

function allDone() {
    // Show allDoneDiv and hide questionDov
    questionDiv.setAttribute('class', 'hidden');
    allDoneDiv.setAttribute('class', 'container');

    // Display user's score
    yourScoreEl.innerText = yourScore;

    // Event listener 
    //     WHEN the game is over
    // THEN I can save my initials and score
    userHighScoreForm.addEventListener('click', function (event) {
        event.preventDefault();

        if (event.target.matches('button')) {
            var userName = userNameEl.value;

            highScore['names'].push(userName);
            highScore['scores'].push(yourScore);

            localStorage.setItem('high scores', JSON.stringify(highScore));

            showHighScores();
        };

    });

};

function showHighScores() {
    // Reset highScoresListEl if navigating from high scores page
    highScoresListEl.innerHTML = "";

    // Hide all divs except high scores
    questionDiv.setAttribute('class', 'hidden');
    startDiv.setAttribute('class', 'hidden');
    allDoneDiv.setAttribute('class', 'hidden');
    highScoresDiv.setAttribute('class', 'container');

    // Clear timer if navigating from 
    timerEl.textContent = ""

    // Get high scores from local storage


    // Iterate through high scores

    // Generate a list of high scores
    for (var i = 0; i < highScore.names.length; i++) {
        var li = document.createElement('li');
        li.innerText = "Name: " + highScore.names[i] + " | Score: " + highScore.scores[i];
        highScoresListEl.appendChild(li);
    };

    // if there's time: arrange all high scores by score and only select top 5 or 10
}