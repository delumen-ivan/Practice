function higherOrder(callback) {
    let name = "myFunction";
    let myNumber = 22;
    callback(name, myNumber);
}

higherOrder((arg1, arg2) => {
    console.log(`arg1 is ${arg1}`);
    console.log(`arg2 is ${arg2}`);
});

higherOrder(function () {
    console.log(arguments);
});

