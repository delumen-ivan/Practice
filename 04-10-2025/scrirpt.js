// textContent
// document.getElementById("para").textContent = "Hey There";

// innerHTML
// document.getElementById("para").innerHTML = "Hello <strong> Pogi </strong>";

// setAttributes
// document.getElementById("catimage").setAttribute("src", "dog.jpg")

// getAttribute
// let imgSrc = document.getElementById("catimage").getAttribute("src");

//removeAttribute
// let imgSrc = document.getElementById("catimage").removeAttribute("src");

// classList.add() add class;
// classList.remove() remove class;
// classList.toggle add if not present, remove if present;

// const para = document.getElementById("para");
// // para.classList.remove("highliht");
// // para.classList.add("highliht");
// // para.classList.toggle("highliht");

// let newli = document.createElement("li");
// newli.textContent = "this is the new era";

// para.appendChild(newli);

const select = document.createElement("select");
select.id = "mySelect";

const optionList = ["Rei", "Hannah Lite", "Gian Cacharo"];

optionList.forEach(function(item) {
    let optionList = document.createElement("option");
    option.value = item.toLowerCase();
    option.textContent = optionList;
    select.appendChild(option);
});

document.getElementById("container").appendChild(select)