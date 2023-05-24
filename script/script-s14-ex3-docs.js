/* --------------------------------------------------------------------- */
/*                         suma de la 0 la numar                         */
/* --------------------------------------------------------------------- */

let num = Number(prompt("Type your number:"));
let sum = 0;

const sumCalc = function (num) {
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return console.log(
    `Your number is ${num}. The sum of all numbers from 0 to your number is: ${sum}`
  );
};

sumCalc(num);
