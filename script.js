// ─────────────────────────────────────────────
//  QUESTION BANK
// ─────────────────────────────────────────────
const ALL_QUESTIONS = {
  science: [
    { q: "What is the powerhouse of the cell?", opts: ["Nucleus","Mitochondria","Ribosome","Vacuole"], ans: 1, exp: "Mitochondria produce ATP, the cell's energy currency." },
    { q: "What planet is known as the Red Planet?", opts: ["Venus","Jupiter","Mars","Saturn"], ans: 2, exp: "Mars gets its reddish color from iron oxide (rust) on its surface." },
    { q: "What is the chemical symbol for Gold?", opts: ["Go","Gd","Au","Ag"], ans: 2, exp: "Au comes from the Latin word 'Aurum'." },
    { q: "How many bones are in the adult human body?", opts: ["206","186","256","306"], ans: 0, exp: "Adults have 206 bones; babies are born with ~270." },
    { q: "What gas do plants absorb during photosynthesis?", opts: ["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"], ans: 2, exp: "Plants absorb CO₂ and release O₂ during photosynthesis." },
    { q: "What is the speed of light (approx)?", opts: ["300,000 km/s","150,000 km/s","500,000 km/s","100,000 km/s"], ans: 0, exp: "Light travels at ~299,792 km/s in a vacuum." },
    { q: "What element has the atomic number 1?", opts: ["Helium","Carbon","Hydrogen","Oxygen"], ans: 2, exp: "Hydrogen is the lightest and most abundant element." },
    { q: "What is the hardest natural substance on Earth?", opts: ["Iron","Diamond","Quartz","Obsidian"], ans: 1, exp: "Diamond rates 10 on the Mohs hardness scale." },
    { q: "Which organ produces insulin?", opts: ["Liver","Kidney","Pancreas","Spleen"], ans: 2, exp: "The pancreas produces insulin to regulate blood sugar." },
    { q: "What force keeps planets orbiting the Sun?", opts: ["Magnetism","Friction","Gravity","Inertia"], ans: 2, exp: "Gravity is the attractive force between masses." }
  ],
  history: [
    { q: "In which year did World War II end?", opts: ["1943","1944","1946","1945"], ans: 3, exp: "WWII ended in 1945 with Germany's surrender in May and Japan's in September." },
    { q: "Who was the first President of the United States?", opts: ["Abraham Lincoln","Thomas Jefferson","George Washington","John Adams"], ans: 2, exp: "George Washington served as the 1st U.S. President from 1789–1797." },
    { q: "The Great Wall of China was primarily built to protect against which group?", opts: ["Romans","Mongols","Persians","Huns"], ans: 1, exp: "The wall was built to defend against Mongol invasions from the north." },
    { q: "Which empire was ruled by Julius Caesar?", opts: ["Greek","Ottoman","Roman","Egyptian"], ans: 2, exp: "Julius Caesar was a Roman general and statesman." },
    { q: "Who invented the telephone?", opts: ["Nikola Tesla","Thomas Edison","Alexander Graham Bell","Guglielmo Marconi"], ans: 2, exp: "Alexander Graham Bell is credited with inventing the telephone in 1876." },
    { q: "The French Revolution began in which year?", opts: ["1789","1776","1804","1815"], ans: 0, exp: "The French Revolution started in 1789 with the storming of the Bastille." },
    { q: "Which country was the first to land on the Moon?", opts: ["USSR","China","USA","UK"], ans: 2, exp: "NASA's Apollo 11 landed Neil Armstrong on the Moon on July 20, 1969." },
    { q: "What ancient wonder was located in Alexandria?", opts: ["Colossus","Hanging Gardens","Great Lighthouse","Pyramids"], ans: 2, exp: "The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World." },
    { q: "The Renaissance began in which country?", opts: ["France","Spain","Germany","Italy"], ans: 3, exp: "The Renaissance originated in Italy in the 14th–17th centuries." },
    { q: "Which war ended with the Treaty of Versailles?", opts: ["WWII","Korean War","WWI","Vietnam War"], ans: 2, exp: "WWI officially ended with the Treaty of Versailles in 1919." }
  ],
  geography: [
    { q: "What is the longest river in the world?", opts: ["Amazon","Congo","Yangtze","Nile"], ans: 3, exp: "The Nile River in Africa stretches ~6,650 km." },
    { q: "Which country has the most natural lakes?", opts: ["USA","Russia","Finland","Canada"], ans: 3, exp: "Canada has over 2 million natural lakes, more than any other country." },
    { q: "Mount Everest is located in which mountain range?", opts: ["Andes","Alps","Himalayas","Rockies"], ans: 2, exp: "Mount Everest is in the Himalayas on the Nepal-Tibet border." },
    { q: "What is the smallest country in the world?", opts: ["Monaco","San Marino","Vatican City","Liechtenstein"], ans: 2, exp: "Vatican City at 0.44 km² is the world's smallest country." },
    { q: "The Amazon Rainforest is located primarily in which country?", opts: ["Colombia","Peru","Venezuela","Brazil"], ans: 3, exp: "About 60% of the Amazon Rainforest is in Brazil." },
    { q: "Which desert is the largest in the world?", opts: ["Gobi","Sahara","Antarctic","Arabian"], ans: 2, exp: "Antarctica is a cold desert — the largest at ~14.2 million km²." },
    { q: "What is the capital of Australia?", opts: ["Sydney","Melbourne","Canberra","Brisbane"], ans: 2, exp: "Canberra has been Australia's capital since 1913." },
    { q: "Which ocean is the largest?", opts: ["Atlantic","Indian","Arctic","Pacific"], ans: 3, exp: "The Pacific Ocean covers about 165 million km², over 30% of Earth's surface." },
    { q: "The Sahara Desert is located on which continent?", opts: ["Asia","South America","Australia","Africa"], ans: 3, exp: "The Sahara is the world's largest hot desert, spanning northern Africa." },
    { q: "Which country has the longest coastline?", opts: ["Australia","Russia","Norway","Canada"], ans: 3, exp: "Canada's coastline is ~202,080 km long — the world's longest." }
  ],
  tech: [
    { q: "What does 'CPU' stand for?", opts: ["Computer Processing Unit","Central Processing Unit","Control Power Unit","Core Program Unit"], ans: 1, exp: "CPU — Central Processing Unit — is the brain of a computer." },
    { q: "Who co-founded Apple Inc.?", opts: ["Bill Gates","Elon Musk","Steve Jobs","Mark Zuckerberg"], ans: 2, exp: "Steve Jobs co-founded Apple in 1976 with Steve Wozniak and Ronald Wayne." },
    { q: "What does 'HTML' stand for?", opts: ["Hyper Text Markup Language","High Text Making Language","Hyper Transfer Markup Logic","High Transfer Markup Language"], ans: 0, exp: "HTML defines the structure of web pages." },
    { q: "Which company created the Java programming language?", opts: ["Microsoft","IBM","Google","Sun Microsystems"], ans: 3, exp: "Java was created by Sun Microsystems (now owned by Oracle) in 1995." },
    { q: "What is the binary equivalent of decimal 10?", opts: ["1100","1001","1010","1011"], ans: 2, exp: "10 in binary: 8+2 = 1010." },
    { q: "What does 'URL' stand for?", opts: ["Uniform Resource Locator","Universal Resource Link","Unified Routing Language","Uniform Routing Locator"], ans: 0, exp: "URL stands for Uniform Resource Locator — a web address." },
    { q: "Which programming language is known as the 'language of the web'?", opts: ["Python","Java","C++","JavaScript"], ans: 3, exp: "JavaScript runs natively in browsers and powers web interactivity." },
    { q: "What is the latest version of the HTTP protocol in wide use?", opts: ["HTTP/1.1","HTTP/2","HTTP/3","HTTP/4"], ans: 2, exp: "HTTP/3 uses QUIC protocol for faster performance." },
    { q: "Which company developed the Android operating system?", opts: ["Apple","Microsoft","Google","Samsung"], ans: 2, exp: "Google acquired Android Inc. in 2005 and launched Android in 2008." },
    { q: "What does 'RAM' stand for?", opts: ["Random Access Memory","Read Access Memory","Rapid Array Module","Run-time Allotted Memory"], ans: 0, exp: "RAM provides fast, temporary storage for active programs." }
  ],
  math: [
    { q: "What is the value of π (pi) to 2 decimal places?", opts: ["3.12","3.41","3.14","3.16"], ans: 2, exp: "π ≈ 3.14159..." },
    { q: "What is 12 × 13?", opts: ["144","156","162","148"], ans: 1, exp: "12 × 13 = 12 × 10 + 12 × 3 = 120 + 36 = 156." },
    { q: "What is the square root of 144?", opts: ["11","13","14","12"], ans: 3, exp: "12 × 12 = 144, so √144 = 12." },
    { q: "How many sides does a heptagon have?", opts: ["5","6","8","7"], ans: 3, exp: "A heptagon has 7 sides. Hepta = 7 in Greek." },
    { q: "What is 20% of 250?", opts: ["40","50","45","55"], ans: 1, exp: "20% of 250 = 0.20 × 250 = 50." },
    { q: "What is the next prime number after 11?", opts: ["12","14","15","13"], ans: 3, exp: "13 is prime — only divisible by 1 and 13." },
    { q: "If a triangle has angles of 60° and 80°, what is the third angle?", opts: ["30°","40°","50°","60°"], ans: 1, exp: "180° − 60° − 80° = 40°. Angles in a triangle sum to 180°." },
    { q: "What is 2⁸?", opts: ["128","256","512","64"], ans: 1, exp: "2⁸ = 256. Memorize powers of 2: 1,2,4,8,16,32,64,128,256." },
    { q: "The Fibonacci sequence starts 0,1,1,2,3,5... What is the next number?", opts: ["7","9","8","6"], ans: 2, exp: "5 + 3 = 8. Each Fibonacci number is the sum of the two before it." },
    { q: "What is the area of a circle with radius 7? (Use π ≈ 3.14)", opts: ["153.86","43.98","49","21.98"], ans: 0, exp: "Area = π r² = 3.14 × 49 ≈ 153.86." }
  ]
};

// Build mixed category from 2 questions of each topic
ALL_QUESTIONS.mixed = [];
['science','history','geography','tech','math'].forEach(cat => {
  const picked = ALL_QUESTIONS[cat].slice(0, 2);
  picked.forEach(item => ALL_QUESTIONS.mixed.push({ ...item, _cat: cat }));
});

// ─────────────────────────────────────────────
//  CONFIG
// ─────────────────────────────────────────────
const SCORE_MAP  = { easy: 8,  medium: 12, hard: 18 };
const TIMER_MAP  = { easy: 20, medium: 15, hard: 10 };
const CAT_LABELS = {
  science: '🔬 Science',
  history: '📜 History',
  geography: '🌍 Geography',
  tech: '💻 Tech',
  math: '🧮 Math',
  mixed: '🎯 Mixed'
};

// ─────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────
let selectedCat  = 'mixed';
let selectedDiff = 'easy';
let questions    = [];
let qIndex       = 0;
let score        = 0;
let streak       = 0;
let bestStreak   = 0;
let timerInterval = null;
let timeLeft     = 15;
let totalTime    = 15;
let timeTaken    = 0;
let lifelines    = { fifty: true, skip: true, time: true };
let answered     = false;
let results      = [];

// ─────────────────────────────────────────────
//  UTILITY
// ─────────────────────────────────────────────
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ─────────────────────────────────────────────
//  HOME SCREEN CONTROLS
// ─────────────────────────────────────────────
function selectCat(btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedCat = btn.dataset.cat;
}

function selectDiff(btn) {
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedDiff = btn.dataset.diff;
}

// ─────────────────────────────────────────────
//  QUIZ FLOW
// ─────────────────────────────────────────────
function startQuiz() {
  questions  = shuffle(ALL_QUESTIONS[selectedCat]).slice(0, 10);
  qIndex     = 0;
  score      = 0;
  streak     = 0;
  bestStreak = 0;
  results    = [];
  timeTaken  = 0;
  lifelines  = { fifty: true, skip: true, time: true };

  document.getElementById('ll50').disabled   = false;
  document.getElementById('llSkip').disabled = false;
  document.getElementById('llTime').disabled = false;

  showScreen('quizScreen');
  loadQuestion();
}

function loadQuestion() {
  if (qIndex >= questions.length) { showResults(); return; }

  const q  = questions[qIndex];
  answered = false;

  document.getElementById('qNum').textContent      = qIndex + 1;
  document.getElementById('qTotal').textContent    = questions.length;
  document.getElementById('scoreLive').textContent = score;

  const catKey = q._cat || selectedCat;
  document.getElementById('qCatTag').textContent    = CAT_LABELS[catKey] || catKey;
  document.getElementById('questionText').textContent = q.q;

  // Build option buttons
  const grid   = document.getElementById('optionsGrid');
  const labels = ['A', 'B', 'C', 'D'];
  grid.innerHTML = '';

  q.opts.forEach((opt, i) => {
    const btn       = document.createElement('button');
    btn.className   = 'option-btn';
    btn.innerHTML   = `<span class="opt-label">${labels[i]}</span>${opt}`;
    btn.onclick     = () => selectAnswer(i, btn);
    grid.appendChild(btn);
  });

  startTimer();
}

// ─────────────────────────────────────────────
//  TIMER
// ─────────────────────────────────────────────
function startTimer() {
  clearInterval(timerInterval);
  timeLeft  = TIMER_MAP[selectedDiff];
  totalTime = timeLeft;
  updateTimerUI();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeExpired();
    }
  }, 1000);
}

function updateTimerUI() {
  const pct = (timeLeft / totalTime) * 100;
  const bar = document.getElementById('timerBar');
  const num = document.getElementById('timerNum');

  bar.style.width      = pct + '%';
  bar.style.background = timeLeft <= 5 ? '#ff6b6b' : timeLeft <= 8 ? '#ffd166' : '#7c6dff';
  num.textContent      = timeLeft;
  num.classList.toggle('warning', timeLeft <= 5);
}

function timeExpired() {
  if (answered) return;
  answered = true;
  streak   = 0;

  const q    = questions[qIndex];
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);
  btns[q.ans].classList.add('correct');

  results.push({ q: q.q, correct: false, ans: q.opts[q.ans], chosen: '⏰ Time up' });
  showToast("⏰ Time's up!", 'wrong');
  setTimeout(() => { qIndex++; loadQuestion(); }, 1800);
}

// ─────────────────────────────────────────────
//  ANSWER SELECTION
// ─────────────────────────────────────────────
function selectAnswer(idx, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  timeTaken += (TIMER_MAP[selectedDiff] - timeLeft);

  const q    = questions[qIndex];
  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  if (idx === q.ans) {
    btn.classList.add('correct');
    const pts = SCORE_MAP[selectedDiff] + Math.max(0, Math.floor(timeLeft * 0.5));
    score += pts;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    showToast(`✅ +${pts} pts · ${q.exp}`, 'correct');
    results.push({ q: q.q, correct: true,  ans: q.opts[q.ans], chosen: q.opts[idx] });
  } else {
    btn.classList.add('wrong');
    btns[q.ans].classList.add('correct');
    streak = 0;
    showToast(`❌ Correct: ${q.opts[q.ans]}`, 'wrong');
    results.push({ q: q.q, correct: false, ans: q.opts[q.ans], chosen: q.opts[idx] });
  }

  document.getElementById('scoreLive').textContent = score;
  setTimeout(() => { qIndex++; loadQuestion(); }, 2000);
}

// ─────────────────────────────────────────────
//  LIFELINES
// ─────────────────────────────────────────────
function useFiftyFifty() {
  if (!lifelines.fifty || answered) return;
  lifelines.fifty = false;
  document.getElementById('ll50').disabled = true;

  const q    = questions[qIndex];
  const btns = document.querySelectorAll('.option-btn');
  let removed = 0;

  for (let i = 0; i < btns.length && removed < 2; i++) {
    if (i !== q.ans) {
      btns[i].style.opacity = '0.2';
      btns[i].disabled      = true;
      removed++;
    }
  }
  showToast('✂️ Two wrong answers removed!', 'correct');
}

function useSkip() {
  if (!lifelines.skip || answered) return;
  lifelines.skip = false;
  document.getElementById('llSkip').disabled = true;

  answered = true;
  clearInterval(timerInterval);
  results.push({ q: questions[qIndex].q, correct: false, ans: questions[qIndex].opts[questions[qIndex].ans], chosen: '⏭️ Skipped' });
  showToast('⏭️ Question skipped!', 'correct');
  setTimeout(() => { qIndex++; loadQuestion(); }, 1200);
}

function useExtraTime() {
  if (!lifelines.time || answered) return;
  lifelines.time = false;
  document.getElementById('llTime').disabled = true;

  timeLeft  = Math.min(timeLeft + 10, totalTime + 10);
  totalTime = Math.max(totalTime, timeLeft);
  updateTimerUI();
  showToast('⏳ +10 seconds added!', 'correct');
}

// ─────────────────────────────────────────────
//  TOAST NOTIFICATION
// ─────────────────────────────────────────────
let toastTimeout;
function showToast(msg, type) {
  const t = document.getElementById('toast');
  clearTimeout(toastTimeout);
  t.textContent = msg.length > 60 ? msg.slice(0, 57) + '...' : msg;
  t.className   = `feedback-toast ${type} show`;
  toastTimeout  = setTimeout(() => { t.classList.remove('show'); }, 2200);
}

// ─────────────────────────────────────────────
//  RESULTS SCREEN
// ─────────────────────────────────────────────
function showResults() {
  const correct = results.filter(r => r.correct).length;
  const pct     = Math.round((correct / results.length) * 100);
  const avgT    = results.length ? Math.round(timeTaken / results.length) : 0;

  let emoji = '🎯', title = 'Keep Practicing!';
  if (pct >= 90)      { emoji = '🏆'; title = 'Brilliant!'; }
  else if (pct >= 70) { emoji = '🌟'; title = 'Great Job!'; }
  else if (pct >= 50) { emoji = '👍'; title = 'Not Bad!'; }

  document.getElementById('trophyEmoji').textContent  = emoji;
  document.getElementById('resultTitle').textContent  = title;
  document.getElementById('resultTagline').textContent = `You scored ${score} points · ${pct}% correct`;
  document.getElementById('rScore').textContent   = score;
  document.getElementById('rCorrect').textContent = `${correct}/${results.length}`;
  document.getElementById('rStreak').textContent  = bestStreak;
  document.getElementById('rTime').textContent    = avgT + 's';

  const list = document.getElementById('answersList');
  list.innerHTML = '';

  results.forEach((r, i) => {
    const el       = document.createElement('div');
    el.className   = `answer-item ${r.correct ? 'ok' : 'bad'}`;
    el.style.animationDelay = (i * 0.05) + 's';
    el.innerHTML   = `
      <div class="ai-dot"></div>
      <div>
        <div class="ai-q">${r.q}</div>
        <div class="ai-a">
          ${r.correct ? '✅' : '❌'} Your answer: ${r.chosen}
          ${!r.correct ? ' · Correct: ' + r.ans : ''}
        </div>
      </div>`;
    list.appendChild(el);
  });

  showScreen('resultScreen');
}

// ─────────────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────────────
function goHome()      { showScreen('homeScreen'); }
function restartQuiz() { startQuiz(); }