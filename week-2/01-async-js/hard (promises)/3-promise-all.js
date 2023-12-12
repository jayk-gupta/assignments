/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promiseOne resolved in 1 seconds"), 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promiseTwo resolved in 2 seconds"), 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promiseThree resolved in 3 seconds"), 3000);
  });
}

function calculateTime() {
  return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]);
}

const start = performance.now();
console.log(`time: ${start}`);
calculateTime().then((data) => {
  const endTime = performance.now();
  console.log(`time: ${endTime}`);
  const elapsedTime =  endTime-start ;
  console.log(elapsedTime);
  console.log(data);
});
