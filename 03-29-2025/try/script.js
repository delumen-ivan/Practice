let input = document.getElementById("input");
let button = document.getElementById("button");
let container = document.getElementById("container");

button.onclick = () => { 
let newLabel = document.createElement("label"); 
        newLabel.innerHTML = input.value;
        newLabel.style.color = "red";
        container.append(newLabel)
}