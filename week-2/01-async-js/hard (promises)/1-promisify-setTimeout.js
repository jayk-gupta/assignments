/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


// .then method
function wait(n) {
       return new Promise(function (resolve, reject) {
         setTimeout(function () {
           resolve("promise is resolved");
         }, n);
       });
}

wait(4000).then((value) => console.log(value))

// async await
function wait2(n) {
 return new Promise(function (resolve, reject) {
   setTimeout(function () {
     resolve("promise is resolved");
   }, n);
 });
}

async function call() {
    const val = await wait2(1000)
    console.log(val);
}

call()