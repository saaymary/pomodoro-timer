let timer;
let isRunning = false;
let timeLeft = 25 * 60;

const timerDisplay = document.getElementById('pomodoro-time');
const startButton = document.getElementById('start');


function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = 'Stop';

        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();

            if (timeLeft <= 0) {
                clearInterval(timer);
                isRunning = false;
                startButton.textContent = 'Start';
                timeLeft = 25 * 60;
                updateTimerDisplay();
            }
        }, 1000);
    } else {
        stopTimer();
    }
}


function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startButton.textContent = 'Start';
}


startButton.addEventListener('click', startTimer);


updateTimerDisplay();