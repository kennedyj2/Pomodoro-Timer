const Start = document.getElementById("Start");
const Stop = document.getElementById("Stop");
const Reset = document.getElementById("Reset");
const Timer = document.getElementById("timer");


let timeLeft = 1500;
let interval;


const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    Timer.innerHTML = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
}


const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time is Up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000)
}

const stopTimer = () => clearInterval(interval);


const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


Start.addEventListener("click", startTimer);
Stop.addEventListener("click", stopTimer);
Reset.addEventListener("click", resetTimer);