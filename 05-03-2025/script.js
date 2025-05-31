// function run() {
//     const promise = new Promise((resolve, reject) => {
//         const num = Math.random();
//         if (num >= 0.5) {
//             resolve(`(${num}).Promise is fulfilled!`);
//         } else {
//             reject(`(${num})Promise failed!`);
//         }
//     });

//     promise.then(
//         (value) => console.log(value),
//         (error) => console.error(error)
//     );
// }

function run() {
    new Promise((resolve, reject) => {
        const num = Math.random();
        setTimeout(() =>{
             if (num >= 0.5) {
                 resolve(`(${num}).Promise is fulfilled!`);
             } else {
                 reject(`(${num})Promise failed!`);
             }
        },2000);
    }).then(
        (value) => console.log(value),
        (error) => console.error(error)
    );
}
