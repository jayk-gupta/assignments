/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`promiseOne resolved in ${t} seconds`), t*1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`promiseTwo resolved in ${t} seconds`), t*1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`promiseThree resolved in ${t} seconds`), t*1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    .then((data) => {
    console.log(data);
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
      return elapsedTime;
  })

}

// async function ans() {
//   const time =await calculateTime(1, 2, 3);
//   console.log(time);
// }

// ans()

module.exports = calculateTime;
