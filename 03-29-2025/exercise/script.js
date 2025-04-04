let buttonStart = document.getElementById("start_button");
let buttonPause = document.getElementById("pause_button");
let buttonResume = document.getElementById("resume_button");
let buttonStop = document.getElementById("stop_button");
let label = document.getElementById("label");
let counter;

buttonStart.addEventListener('click', startCounter);

function startCounting() {
    label.textContent = inputText.value;
}
function startCounter() {
    counter = setTimeout(startCounting,1000);
}

function pauseButton() {
    counter = setInterval(0);
}
