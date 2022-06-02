const quizData = [
    {
        question: 'Using an attribute selector, how would you select an <a> element with a "title" attribute?',
        a: 'a[title]{...}',
        b: 'a >title {...}',
        c: 'a.title {...}',
        d: 'a=title {...}',
        correct: 'a'
    },{
        question: 'Three of these choices are true about class selectors. Which is NOT true?',
        a: 'Multiple classes can be used within the same element',
        b: 'The same class can be used multiple times per page',
        c: ' Class selectors with a leading period',
        d: 'Classes can be used multiple times per page but not within the same element',
        correct: 'd'
    },{
        question: 'What is the line-height property primarily used for?',
        a: 'to control the height of the space between two lines of contents',
        b: 'to control the height of the space between handing elements',
        c: 'to control the height of the character size',
        d: 'to control the width of the space between characters',
        correct: 'a'
    },{
        question: 'When using position: fixed, what will the element always be positioned relative to?',
        a: 'the closet element with position:relative',
        b: 'the viewpoint',
        c: 'the parent element',
        d: 'the wrapper element',
        correct: 'b'
    },{
        question: 'When using the Flexbox method, what property and value is used to display flex items in a column?',
        a: 'flex-flow:column; or flex-direction:column',
        b: 'flex-flow: column',
        c: 'flex-column: auto',
        d: 'flex-direction: column',
        correct: 'b'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll (".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0 ;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers () {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer

    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    if (answer) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz ();
        } else {
         quiz.innerHTML = `
         <h2> Your Score for this quiz is ${score} out of ${quizData.length}.</h2> 
         
         <button onclick="location.reload()">Reload</button>
         `;
        }
    }

});