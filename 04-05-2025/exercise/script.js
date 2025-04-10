let formField = document.getElementById("form_container");
let nameInput = document.getElementById("name");
let numberInput = document.getElementById("number");
let outputValue = document.getElementById("output_value");

let customerQueue = [];

let customer = {name: nameInput.value, priority: Number(numberInput.value)}
customer.push(customerQueue);

const sortedCustomer = customerQueue.sort((a, b) => {
    if(a.name > b.name) 1;
    if(a.name < b.name) -1;
});


//process and output 

