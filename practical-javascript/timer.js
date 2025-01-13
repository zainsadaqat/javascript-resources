/*
Display Timer 00:02:00 (hours:minutes:seconds)

Note: you will need to convert the seconds into hours, minutes, and seconds during each countdown and format it appropriately.
*/

const timer = document.querySelector("#timer");
timer.innerHTML = "";

let givenTimeInSeconds = 5;
let timerId = null;

const startButton = document.querySelector("#startTimer");
const resetButton = document.querySelector("#resetTimer");

startButton.addEventListener("click", () => {
  timerId = setInterval(() => {
    if (givenTimeInSeconds >= 0) {
      let hours = Math.floor(givenTimeInSeconds / 3600);
      let minutes = Math.floor(givenTimeInSeconds / 60) % 60;
      let remainingMinutes = givenTimeInSeconds % 60;

      timer.innerHTML = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}`;

      givenTimeInSeconds--;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
});

resetButton.addEventListener("click", () => {
  clearInterval(timerId);
  timer.innerHTML = "";
  givenTimeInSeconds = 10;
});
