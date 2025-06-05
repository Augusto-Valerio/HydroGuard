const questions = [
  {
    question: "Qual é um dos principais problemas enfrentados por milhares de pessoas todo ano, segundo a página?",
    answers: [
      {id: 1, text:"A) Falta de energia elétrica", correct: false},
      {id: 2, text:"B) Enchentes", correct: true},
      {id: 3, text:"C) Falta de comida", correct: false},
      {id: 4, text:"D) Seca prolongada", correct: false},
    ]
  },

  {
    question: "Qual é o objetivo do projeto apresentado na página?",
    answers: [
      {id: 1, text:"A) Criar alertas de promoções em supermercados", correct: false},
      {id: 2, text:"B) Desenvolver jogos educativos sobre meio ambiente", correct: false},
      {id: 3, text:"C) Auxiliar na fuga e segurança de pessoas em enchentes", correct: true},
      {id: 4, text:"D) Monitorar o consumo de energia nas casas", correct: false},
    ]
  },

  {
    question: "O que poderia ser evitado com a ajuda da tecnologia do projeto?",
    answers: [
      {id: 1, text:"A) Aumento da temperatura", correct: false},
      {id: 2, text:"B) Acidentes de trânsito", correct: false},
      {id: 3, text:"C) Falta de conexão com a internet", correct: false},
      {id: 4, text:"D) Dificuldade de escapar das enchentes", correct: true},
    ]
  },

  {
    question: "Qual fator torna urgente a criação de soluções como o HydroGuard?",
    answers: [
      {id: 1, text:"A) O aumento de eventos esportivos ao ar livre", correct: false},
      {id: 2, text:"B) O grande número de pessoas afetadas por enchentes anualmente", correct: true},
      {id: 3, text:"C) A falta de sinal de celular nas cidades", correct: false},
      {id: 4, text:"D) O crescimento do número de carros elétricos", correct: false},
    ]
  },

  {
    question: "Para quais grupos de pessoas o projeto HydroGuard foi especialmente pensado?",
    answers: [
      {id: 1, text:"A) Apenas para equipes de resgate e bombeiros", correct: false},
      {id: 2, text:"B) Para turistas e motoristas de aplicativo", correct: false},
      {id: 3, text:"C) Para idosos, cadeirantes, pessoas com animais e em situações de risco", correct: true},
      {id: 4, text:"D) Somente para estudantes e professores de escolas públicas", correct: false},
    ]
  },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questaoInicial = 0;
let score = 0; //variavel para ver quantas questoes foram acertadas

function startQuiz() {
  questaoInicial = 0;
  score = 0;
  nextButton.innerHTML = "Próxima pergunta";
  
  showQuestion(); //Função para mostrar a primeira pergunta
}

function resetState() {
  nextButton.style.display = "none"; //Esconde o botão de próxima pergunta
  while (answerButtons.firstChild) { //Remove todos os botões de resposta
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion(){
  resetState(); //Reseta o estado dos botões e da pergunta
  let currentQuestion = questions[questaoInicial]; //Pega a pergunta atual
  let questionNo = questaoInicial + 1; //Número da pergunta atual
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //Mostra a pergunta atual

  currentQuestion.answers.forEach((answer) => { 
    const button = document.createElement("button"); //Cria um botão para cada resposta
    button.innerHTML = answer.text; //Define o texto do botão
    button.dataset.id = answer.id; //Serve para Armazenar o ID da resposta
    button.classList.add("btn"); //Adiciona a classe btn ao botão
    button.addEventListener("click", selectAnswer); //Adiciona um evento de clique ao botão
    answerButtons.appendChild(button); //Adiciona o botão ao container de respostas
  })
}

function selectAnswer(event) {
  answers = questions[questaoInicial].answers; //Pega as respostas da pergunta atual
  const coorectAnswer = answers.filter((answer) => answer.correct == true)[0]; //Filtra as respostas corretas
  const selectedBtn = event.target; //Botão que foi clicado
  const isCorrect = selectedBtn.dataset.id == coorectAnswer.id; //Verifica se a resposta selecionada é correta
  if (isCorrect) {
    selectedBtn.classList.add("correct"); //Adiciona a classe correct ao botão selecionado que tem no css para deixar verde
    score++; //Incrementa a pontuação se a resposta estiver correta
  } else {
    selectedBtn.classList.add("incorrect"); //Adiciona a classe incorrect ao botão selecionado que tem no css para deixar vermelho
  }
  Array.from(answerButtons.children).forEach((button) => { // Desabilita todos os botões de resposta apos a resposta ser selecionaad
    button.disabled = true;
  });
  nextButton.style.display = "block"; //Mostra o botão de próxima pergunta
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`; //Mostra a pontuação final
  nextButton.innerHTML = "Reiniciar Quiz"; //Muda o texto do botão para Reiniciar Quiz
  nextButton.style.display = "block"; //Mostra o botão de reiniciar quiz
}

function handleNextButton() {
  questaoInicial++; //Incrementa o índice da pergunta atual
  if (questaoInicial < questions.length) { //Verifica se ainda há perguntas
    showQuestion(); //Mostra a próxima pergunta
  } else {
    showScore(); //Se não houver mais perguntas, mostra a pontuação final
  }
}

nextButton.addEventListener("click", () => {
  if (questaoInicial < questions.length) { 
    handleNextButton(); 
  } else {
    startQuiz(); //Reinicia o quiz se todas as perguntas foram respondidas
  }
});

startQuiz(); //Inicia o quiz