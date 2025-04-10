// 1. Basic Operators
function showOperators() {
    let a = 10;
    let b = 5;

    let result = `
        Addition: ${a + b} <br>
        Subtraction: ${a - b} <br>
        Multiplication: ${a * b} <br>
        Division: ${a / b} <br>
        Greater than: ${a > b} <br>
        Logical AND (a > 5 && b < 10): ${a > 5 && b < 10}
    `;

    document.getElementById("operatorsResult").innerHTML = result;
}

function fixDebugCode() {
    let person = { name: "Alice", age: 25 };
    document.getElementById(
        "debugResult"
    ).innerText = `Person Age: ${person.age}`;
}

function calculateTotal() {
    let cart = [
        { name: "Laptop", price: 1000 },
        { name: "Mouse", price: 50 },
        { name: "Keyboard", price: 80 },
    ];

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("cartResult").innerText = `Total Cost: $${total}`;
}

function showGrades() {
    let students = [
        { name: "John", grades: [80, 90, 85] },
        { name: "Sara", grades: [88, 92, 79] },
    ];

    let output = "";
    students.forEach((student) => {
        let average =
            student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
        output += `${student.name} Average Grade: ${average} <br>`;
    });

    document.getElementById("gradesResult").innerHTML = output;
}

let tasks = ["Buy groceries", "Clean room", "Study JavaScript"];

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        taskList.innerHTML += `<li>${index + 1}. ${task}</li>`;
    });
}

function addTask() {
    let newTask = document.getElementById("newTask").value;
    if (newTask.trim()) {
        tasks.push(newTask);
        document.getElementById("newTask").value = "";
        renderTasks();
    }
}

document.addEventListener("DOMContentLoaded", renderTasks);
