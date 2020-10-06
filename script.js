// Buttons
var startBtn = document.getElementById('start-button');
var answerButton1 = document.getElementById('button-1');
var answerButton2 = document.getElementById('button-2');
var answerButton3 = document.getElementById('button-3');
var answerButton4 = document.getElementById('button-4');

// Divs
var startDiv = document.getElementById('start-div');
var questionDiv = document.getElementById('question-div');

// Object containing all questions and answer choices
var quizQuestions = {
    'question-0' : {
        'question': 'Commonly used data types do NOT inlude:',
        'answers' : ['Booleans', 'Numbers','Alerts','Strings'],
        'correct' : 'Alerts'
    },
    'question-1' : {
        'question': 'A question',
        'answers' : ['flerp','derp','lerp','gerp'],
        'correct' : 'derp',
    }
}

startBtn.addEventListener('click', function() {
    startQuiz();
});

function startQuiz() {
    // Hide start div, show question div
    startDiv.setAttribute('class', 'container hidden');
    questionDiv.setAttribute('class','container');

    var questionText = document.getElementById('question-text');

    // Get questions and answer choices from quizQuestions object
    for (var i=0; i< Object.values(quizQuestions).length;) {
        questionText.innerText = quizQuestions['question-'+i]['question'];

        answerButton1.innerText = quizQuestions['question-'+i]['answers'][0];
        answerButton2.innerText = quizQuestions['question-'+i]['answers'][1];
        answerButton3.innerText = quizQuestions['question-'+i]['answers'][2];
        answerButton4.innerText = quizQuestions['question-'+i]['answers'][3];

        answerButton1.addEventListener('click', function(i) {
            return i++
        })
    };

};