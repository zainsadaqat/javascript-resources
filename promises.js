// Javascript async event handling
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I WON!');
  }, 1000);
});

myPromise.then((value) => console.log(value));
