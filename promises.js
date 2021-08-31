// Javascript async event handling
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
