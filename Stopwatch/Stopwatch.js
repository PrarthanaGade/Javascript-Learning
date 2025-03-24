let timer;
let elapsedTime = 0;
let running = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const startPauseButton = document.getElementById("pause");

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

function startTimer() {
  if (!running) {
    running = true;
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 100);
  }
}

function stopTimer() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

 /*function startPauseTimer() {
    if (!running) {
      // Start or Resume the timer
      running = true;
      startPauseButton.textContent = "Pause";
      const startTime = Date.now() - elapsedTime;
      timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
      }, 100);
    } else {
      // Pause the timer   //it turn out to be of no use afterwards
      running = false;
      clearInterval(timer);
      startPauseButton.textContent = "Start";
    }
  } 
  */

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  updateDisplay();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

updateDisplay();
