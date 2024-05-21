 // Definindo as perguntas e respostas
 const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: ["Rio de Janeiro", "Brasília", "São Paulo", "Belo Horizonte", "Salvador"],
        correctAnswer: 1 // Brasília
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: ["Terra", "Júpiter", "Saturno", "Marte", "Vênus"],
        correctAnswer: 1 // Júpiter
    },
    // Adicione mais perguntas aqui
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultsElement = document.getElementById('results');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer');
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
        answersElement.appendChild(document.createElement('br'));
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        alert('Resposta correta!');
        correctAnswers++;
    } else {
        alert('Resposta incorreta!');
        incorrectAnswers++;
    }
    // Avança para a próxima pergunta
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('fundo').style.display = 'none';
    resultsElement.style.display = 'block';
    document.getElementById('correct').textContent = correctAnswers;
    document.getElementById('incorrect').textContent = incorrectAnswers;
}

// Iniciar com a primeira pergunta
showQuestion();