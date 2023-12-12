/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise resolved"), seconds);
  });
}
console.log('hi');
sleep(4000).then(res => console.log(res))