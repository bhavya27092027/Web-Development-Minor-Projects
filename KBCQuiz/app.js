const questions = [
  { q: "Who was the first Prime Minister of India?", options: ["Narendra Modi", "Draupadi Murmu", "Arvind Kejriwal", "MallikaArjun Kharge"], answer: 0 },
  { q: "Which planet is called the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
  { q: "What is the national animal of India?", options: ["Lion", "Elephant", "Bengal Tiger", "Peacock"], answer: 2 },
  { q: "Which is the largest ocean in the world?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
  { q: "What is the currency of Japan?", options: ["Dollar", "Yen", "Rupee", "Won"], answer: 1 }
];

let current = 0, score = 0;
let gameQuestions = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next");
const startBtn = document.getElementById("start");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  const q = gameQuestions[current];
  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i, btn);
    optionsEl.appendChild(btn);
  });
  nextBtn.disabled = true;
}

function checkAnswer(selected, btn) {
  const correct = gameQuestions[current].answer;
  if (selected === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
  }
  Array.from(optionsEl.children).forEach((b, i) => {
    b.onclick = null;
    if (i === correct) b.classList.add("correct");
  });
  nextBtn.disabled = false;
}

function nextQuestion() {
  current++;
  if (current < gameQuestions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Game Over!";
    optionsEl.innerHTML = "";
    resultEl.textContent = `You answered ${score} out of ${gameQuestions.length} correctly.`;
    nextBtn.disabled = true;
    startBtn.disabled = false;
  }
}

startBtn.onclick = () => {
  current = 0;
  score = 0;
  resultEl.textContent = "";
  gameQuestions = shuffle([...questions]);
  loadQuestion();
  startBtn.disabled = true;
};

nextBtn.onclick = nextQuestion;