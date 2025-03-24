let button = document.querySelector(".btn");

function appendSection() {
  let container = document.getElementById("container");
  let newSection = document.createElement("div");
  newSection.classList.add("section");
  container.append(newSection);
}

button.addEventListener("click", appendSection);
