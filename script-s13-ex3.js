/* -------------------------------------------- */
/*        afiseaza numere intre 2 numere        */
/* -------------------------------------------- */
let num1 = prompt("Your first number:");
let num2 = prompt("Your second number:");

for (let i = num1; i < num2 - 1; i++) {
  console.log(Number(i) + 1);
}

console.log("----------------------------------------");
