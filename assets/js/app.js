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

 // set question number, question and options
 function getNewQuestion(){
    // set question number 
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;

    // set question text
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // get the position of 'questionIndex' from the availableQuestion Array
    const index1= availableQuestions.indexOf(questionIndex);
    // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
    availableQuestions.splice(index1,1);
    if(currentQuestion.hasOwnProperty("img")){
       const img = document.createElement("img");
       img.src = currentQuestion.img;
       questionText.appendChild(img);
    }

    // set options
    const optionLen = currentQuestion.options.length;
    // push options into availableOptions Array
    for(let i=0; i<optionLen; i++){
       availableOptions.push(i);
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.10;
    // create options in html
    for(let i=0; i<optionLen; i++){
       // random option
       const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
       // get the position of 'optonIndex' from the availableOptions Array
       const index2 =  availableOptions.indexOf(optonIndex);
       // remove the  'optonIndex' from the availableOptions Array , so that the option does not repeat
       availableOptions.splice(index2,1);
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optonIndex];
       option.id = optonIndex;
       option.style.animationDelay =animationDelay + 's';
       animationDelay = animationDelay + 0.20;
       option.className = "option";
       optionContainer.appendChild(option);
       option.setAttribute("onclick","getResult(this)");
    }
   console.log(availableQuestions);
   console.log(availableOptions);
    questionCounter++;
 }

 