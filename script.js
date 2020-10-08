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
var highScoresListEl = document.getElementById('high-scores-list-element');

// Starting variables
var timeLeft = 10;
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
    },
    'question-2': {
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
        if (timeLeft <= 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            allDone();
        };

    }, 1000);

};

function allDone() {
    // Show allDoneDiv and hide questionDov
    questionDiv.setAttribute('class', 'hidden');
    allDoneDiv.setAttribute('class', 'container');

    // Display user's score
    yourScoreEl.innerText = yourScore;

    // Event listener 
    userHighScoreForm.addEventListener('click', function (event) {
        
        if (event.target.matches('button')) {

            // Get user's anme from input field
            var userName = userNameEl.value;
            // Save user data to local storage
            localStorage.setItem(userName + " data", JSON.stringify({
                'name' : userName,
                'score' : yourScore,
            }));
        
            // Stop input element from redirecting 
            event.preventDefault();

            showHighScores();
        };

    });

};

function showHighScores() {
    // Hide all divs except high scores
    questionDiv.setAttribute('class', 'hidden');
    startDiv.setAttribute('class', 'hidden');
    allDoneDiv.setAttribute('class', 'hidden');
    highScoresDiv.setAttribute('class','container');

    // Get high scores from local storage
    
    // Iterate through high scores

    // Generate a list of high scores
    var li = document.createElement('li');
    li.innerText = "Hello";
    highScoresListEl.appendChild(li);

    // if there's time: arrange all high scores by score and only select top 5 or 10
}