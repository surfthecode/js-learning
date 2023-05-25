console.log("---------------Exercise 1---------------");
// Scrie un program care primește de la utilizator două cuvinte și le concatenează într-un singur șir de caractere. Apoi, determină lungimea șirului rezultat și afișează în consolă.
const concatFunc = function (word1, word2) {
  word1 = prompt("Type your first word:");
  word2 = prompt("Type your second word:");
  const concatWords = word1 + word2;
  console.log(
    `Your 2 words concatenated results in the string: ${concatWords}, with a length of ${concatWords.length}`
  );
};

// concatFunc();

console.log("---------------Exercise 2---------------");
// Scrie o funcție care primește un șir de caractere și returnează un array conținând fiecare caracter al șirului ca element separat. Apoi, apelează funcția cu un șir introdus de utilizator și afișează array-ul rezultat în consolă.
const splitFunc = function (chars) {
  chars = prompt("Type whatever you want:");
  console.log(
    "Here's your input, in an array of individual characters:",
    chars.split("")
  );
};

// splitFunc();

console.log("---------------Exercise 3---------------");
// Scrie un program care primește un șir de caractere de la utilizator și afișează fiecare caracter al șirului în ordine inversă, folosind un loop.
const reverseFunc = function (chars) {
  chars = prompt("Type whatever you want:");
  //   let reverseArr = [];
  //   for (let i = 0; i < chars.length; i++) {
  //     reverseArr.unshift(chars[i]);
  //   }
  //   console.log(
  //     "Here's your input in an array of individual characters, in reverse order: ",
  //     reverseArr
  //   );
  // };
  let reverseArr = chars.split("").reverse();
  console.log(reverseArr);
};

// reverseFunc();

console.log("---------------Exercise 4---------------");
// Creează un obiect care reprezintă o persoană, având proprietăți precum nume, vârstă și hobburi (reprezentate printr-un array de șiruri de caractere). Apoi, afișează un mesaj în consolă care să conțină informații despre persoană, folosind proprietățile obiectului.
const person = {
  name: "John Doe",
  age: 38,
  occupation: "web developer",
  hobbies: ["travelling", "swimming"],
};

console.log(
  `${person.name}, age ${person.age}, is a ${
    person.occupation
  }. His hobbies are: ${person.hobbies.join(" and ")}`
);

console.log("---------------Exercise 5---------------");
// Scrie un program care primește un șir de cuvinte separate prin spații de la utilizator. Folosind un loop, afișează fiecare cuvânt în consolă, împreună cu numărul de caractere pe care îl conține.
const wordLengthFunc = function (chars) {
  chars = prompt("Type a sentence:");
  charsArr = chars.split(" ");
  for (let i = 0; i < charsArr.length; i++) {
    console.log(`${charsArr[i]} - ${charsArr[i].length}`);
  }
};

// wordLengthFunc();
