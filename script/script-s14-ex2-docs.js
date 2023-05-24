/* --------------------------------------------------------------------- */
/*                            este numar prim?                           */
/* --------------------------------------------------------------------- */
const num = Number(prompt("Type your number:"));

function isPrime(num) {
  let flag = true;

  if (num < 1) {
    return `${num} is not a prime number.`;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return `${num} is a prime number`;
    } else {
      return `${num} is not a prime number`;
    }
  }
}

console.log(isPrime(num));
