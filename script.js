var startBtn = document.getElementById("start-button");
var titleText = document.getElementById("title-text");
var paragraphText = document.getElementById('paragraph-text');
var documentMain = document.querySelector('main');
var startDiv = document.getElementById('start-div');

var answerBtn1 = document.createElement('button');
var answerBtn2 = document.createElement('button');
var answerBtn3 = document.createElement('button');
var answerBtn4 = document.createElement('button');

var quizQuestions = {
    'question-1' : {
        'question': 'Commonly used data types do NOT inlude:',
        'answer-1': 'booleans',
        'answer-2': 'strings',
        'answer-3': 'alerts',
        'answer-4': 'numbers',
    },
    'question-2' : {
        'question': 'A question',
        'answer-1': 'Lerp',
        'answer-2': 'Derp',
        'answer-3': 'Perp',
        'answer-4': 'flerp',
    }
}

startBtn.addEventListener('click', function() {
    // Get question from quizQuestion object
    titleText.innerText = quizQuestions['question-1']['question'];

    // Assign answer options to buttons
    answerBtn1.innerText = quizQuestions['question-1']['answer-1'];
    answerBtn2.innerText = quizQuestions['question-1']['answer-2'];
    answerBtn3.innerText = quizQuestions['question-1']['answer-3'];
    answerBtn4.innerText = quizQuestions['question-1']['answer-4'];

    // Hide unwanted elements from DOM
    startDiv.setAttribute('class', 'container hidden');

})