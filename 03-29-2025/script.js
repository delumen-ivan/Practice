function Apply() {
    let input = document.getElementById("input");
    let backgroundColor = document.getElementById("background");
    let color = document.getElementById("color");
    let number = document.getElementById("number");
    let label = document.getElementById("label");

    label.innerHTML = input.value;
    label.style.background = backgroundColor.value;
    label.style.color = color.value;
    label.style.fontSize = number.value + "px";
}