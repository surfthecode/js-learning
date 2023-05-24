/* -------------------------------------------- */
/*        afiseaza numere intre 2 numere        */
/* -------------------------------------------- */
let num1 = prompt("Your first number:");
let num2 = prompt("Your second number:");

for (let i = num1; i < num2; i++) {
  if (i > num1) console.log(Number(i));
}

console.log("----------------------------------------");
