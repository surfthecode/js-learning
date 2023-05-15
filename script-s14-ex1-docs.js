/* --------------------------------------------------------------------- */
/*                  numar mai mare sau mai mic decat 10                  */
/* --------------------------------------------------------------------- */
const num = Number(prompt("Type a number:"));

const numCompare = function (num) {
  let result = "";
  if (num < 10) {
    result = `Your number, ${num}, is less than 10.`;
  } else if (num === 10) {
    result = `Your number, ${num}, is equal to 10.`;
  } else result = `Your number, ${num}, is greater than 10.`;

  return console.log(result);
};

numCompare(num);
