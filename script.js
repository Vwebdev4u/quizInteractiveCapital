const questions = [
    {
      question: "Which is the capital of Brazil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Which is the capital of Argentina?",
      choices: ["Buenos Aires", "Brasília", "Lisbon", "Paris"],
      answer: "Buenos Aires",
    },
    {
      question: "Which is the capital of France?",
      choices: ["Rome", "Madrid", "Paris", "London"],
      answer: "Paris",
    },
    {
      question: "Which is the capital of Spain?",
      choices: ["Lisboa", "Madrid", "Barcelona", "Valencia"],
      answer: "Madrid",
    },
    {
      question: "Which is the capital of Italy?",
      choices: ["Venice", "Milan", "Rome", "Naples"],
      answer: "Rome",
    },
    {
      question: "Which is the capital of Canada?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Which is the capital of United States?",
      choices: ["New York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Which is the capital of United Kingdom?",
      choices: ["Liverpool", "Manchester", "York", "London"],
      answer: "London",
    },
    {
      question: "Which is the capital of Australia?",
      choices: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
      answer: "Canberra",
    },
    {
      question: "Which is the capital of New Zealand?",
      choices: ["Auckland", "Queenstown", "Wellington", "Dunedin"],
      answer: "Wellington",
    },
    {
      question: "Which is the capital of Japan?",
      choices: ["Atsuta", "Tokyo", "Inazawa", "Komaki"],
      answer: "Tokyo",
    },
    {
      question: "Which is the capital of China?",
      choices: ["Chengdu", "Xi an", "Beijing", "Wuhan"],
      answer: "Beijing",
    },
    {
      question: "Which is the capital of India?",
      choices: ["Mumbai", "New Delhi", "Kanpur", "Varanasi"],
      answer: "New Delhi",
    },
    {
      question: "Which is the capital of Russia?",
      choices: ["Saint Peterburg", "Vladivostok", "Samara", "Moscow"],
      answer: "Moscow",
    },
    {
      question: "Which is the capital of Germany?",
      choices: ["Munich", "Berlin", "Nuremberg", "Stuttgart"],
      answer: "Berlin",
    },
    {
      question: "Which is the capital of Austria?",
      choices: ["Vienna", "Bregenz", "Salsburg", "Graz"],
      answer: "Vienna",
    },
    {
      question: "Which is the capital of Swiss?",
      choices: ["Lucerne", "Zurich", "Basel", "Bern"],
      answer: "Bern",
    },
    {
      question: "Which is the capital of Netherlands?",
      choices: ["Amersfoort", "Rotterdam", "Amsterdam", "Utrecht"],
      answer: "Amsterdam",
    },
    {
      question: "Which is the capital of Egypt?",
      choices: ["Alexandria", "Cairo", "Asyut", "Mansoura"],
      answer: "Cairo",
    },
    {
      question: "Which is the capital of Saudi Arabia?",
      choices: ["Riyadh", "Madinah", "Tabuk", "Jeddah"],
      answer: "Riyadh",
    },
    {
      question: "Which is the capital of Thailand?",
      choices: ["Pattaya City", "Khon Kaen", "Saraburi", "Bangkok"],
      answer: "Bangkok",
    },
  ];
  
  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false;
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
  }
  
  function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
  
    if (e.target.innerText === questions[currentQuestion].answer) {
      score++;
      scoreElement.innerText = "Corrects: " + score;
      alert("Correct!");
    } else {
      wrong++;
      wrongElement.innerText = "Mistakes: " + wrong;
      alert("Keep trying! ");
    }
  }
  
  choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Corrects: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Please! Choose an answer before proceeding.");
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(
        "End of the Quiz! You " +
          score +
          " de " +
          questions.length +
          " perguntas."
      );
      restartQuiz();
    }
  });
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  loadQuestion();