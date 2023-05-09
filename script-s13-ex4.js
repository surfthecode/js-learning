/* -------------------------------------------- */
/*            cate vocale in cuvant?            */
/* -------------------------------------------- */
const str = prompt("Type a random word");
let sum = 0;

for (let i = 0; i <= str.length; i++) {
  str[i] === "a" ||
  str[i] === "e" ||
  str[i] === "i" ||
  str[i] === "o" ||
  str[i] === "u"
    ? sum++
    : "";
}

console.log("Your word was", "[", str, "]", "and it has", sum, "vowels");

console.log("----------------------------------------");
