const fetch = require('node-fetch');
const myPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('I WON!');
    }, 1000);
  } else {
    reject("I've Failed :(");
  }
});

myPromise
  .then((value) => console.log(value))
  .catch((rejectValue) => console.log(rejectValue));

const myAsyncAwait = async () => {
  const result = await fetch('https://swapi.dev/api/people');
  const response = await result.json();
  console.log(response[0]);
};

myAsyncAwait();
