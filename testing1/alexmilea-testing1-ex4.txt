const countdown = function (seconds) {
  let counter = seconds;
  setTimeout(
    console.log(`The counter will start at: ${counter} seconds.`),
    1000
  );

  const interval = setInterval(function () {
    if (counter === 0) {
      clearInterval(interval);
      console.log("Countdown finished!");
    } else {
      counter--;
      console.log(counter);
    }
  }, 1000);
};

countdown(10);
