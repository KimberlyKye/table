promises = [];
numberOfPromises = 10;

function getRandomNumber(start, end) {
  return (parseInt(Math.random() * end) % (end - start)) + start;
}

function generatePromise() {
  return new Promise((resolve) => {
    let randomNumberOfSeconds = getRandomNumber(0, 10);
    setTimeout(() => {
      resolve({ randomNumberOfSeconds: randomNumberOfSeconds });
    }, randomNumberOfSeconds * 1000);
  });
}

for (i = 1; i <= numberOfPromises; i++) {
  promises.push(generatePromise());
}

promise = Promise.all(promises);
promise.then(() => console.log("Done!"));
