const TOTAL_TIME = 60;
let timeLeft = TOTAL_TIME;
let timerInterval = null;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const progressFill = document.getElementById("progressFill");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
  const percentage = (timeLeft / TOTAL_TIME) * 100;
  progressFill.style.width = `${percentage}%`;
}

startBtn.addEventListener("click", () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    startBtn.textContent = "Start";
  } else {
    if (timeLeft <= 0) return;

    startBtn.textContent = "Pause";
    timerInterval = setInterval(() => {
      timeLeft--;
      updateDisplay();

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.textContent = "Start";
      }
    }, 1000);
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = TOTAL_TIME;
  startBtn.textContent = "Start";
  updateDisplay();
});
