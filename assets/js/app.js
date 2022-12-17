const questionNumber = document.querySelector(".question-number");
 const questionText = document.querySelector(".question-text");
 const optionContainer = document.querySelector(".option-container");
 const answersIndicatorContainer = document.querySelector(".answers-indicator");
 const homeBox = document.querySelector(".home-box");
 const quizBox = document.querySelector(".quiz-box");
 const resultBox = document.querySelector(".result-box");
 const questionLimit = 10; 
 let questionCounter = 0;
 let currentQuestion;
 let availableQuestions = [];
 let availableOptions = [];
 let correctAnswers = 0;
 let attempt = 0;

 // push questions to availableQuestions Array
 function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
    	availableQuestions.push(quiz[i]);
    }
 }

 