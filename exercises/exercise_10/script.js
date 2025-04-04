let count = 0;
let interValid;

function start() {
    count = 0
    interValid = setInterval(() => {;
        count = count + 1;
        document.getElementById("label").innerText = count;
    }, 1000);
}

function pause() {
    clearInterval(interValid);
}