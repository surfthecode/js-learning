console.log("---------------Exercise 1---------------");
// Scrie un program care primește de la utilizator trei numere și le adaugă într-un array. Apoi, calculează suma numerelor din array și o afișează în consolă.
let numArr = [];
const addInArr = function (num) {
  for (let i = 0; i < 3; i++) {
    num = Number(prompt("Type in your number:"));
    numArr.push(num);
  }
  return console.log(`Here's an array with your choices: `, numArr);
};

// addInArr();

console.log("---------------Exercise 2---------------");
// Scrie un program care primește un array de la utilizator și verifică dacă există vreun element negativ în array. Dacă da, afișează un mesaj corespunzător. Altfel, calculează media numerelor din array și o afișează în consolă.
const arrAverage = function (userInput) {
  userInput = prompt("Type in a series of numbers, separated by comma  ','");
  const userInputArr = userInput.split(",").map(Number);
  let arrSum = 0;
  let hasNegative = false;

  for (let i = 0; i < userInputArr.length; i++) {
    if (userInputArr[i] < 0) {
      console.log(
        `Your array has negative values inside: ${userInputArr[i]} at index ${i} => please only type in positive numbers.`
      );
      hasNegative = true;
      break;
    }
    arrSum += userInputArr[i];
  }

  if (!hasNegative)
    console.log(
      `Your array is `,
      userInputArr,
      ` and the average of the numbers in the array is: `,
      arrSum / userInputArr.length
    );
};

// arrAverage();

console.log("---------------Exercise 3---------------");
// Scrie un program care primește un cod de țară de la utilizator și afișează numele țării respective, împreună cu o listă de capitale asociate. Folosește un obiect pentru a mapa codurile de țară la numele țărilor și la array-uri cu capitalele corespunzătoare.
const countries = {
  RO: {
    name: "Romania",
    capital: "Bucharest",
  },
  ES: {
    name: "Spain",
    capital: "Madrid",
  },
  UK: {
    name: "The United Kingdom",
    capital: "London",
  },
  DE: {
    name: "Germany",
    capital: "Berlin",
  },
};

const countryDetails = function (userInput) {
  userInput = prompt(
    "Type in a coutry code (ex. RO, ES, UK, DE)"
  ).toUpperCase();

  console.log(
    `The country is ${countries[userInput].name} and its capital city is ${countries[userInput].capital}.`
  );
};

// countryDetails();

console.log("---------------Exercise 4---------------");
// Scrie un program care primește de la utilizator un array de obiecte, fiecare obiect reprezentând un produs (cu proprietăți precum nume, preț, cantitate). Calculează valoarea totală a produselor (preț x cantitate) și o afișează în consolă.
const pcComponents = [
  { name: "CPU", price: 400, qty: 1 },
  { name: "Motherboard", price: 300, qty: 1 },
  { name: "DRAM", price: 100, qty: 4 },
  { name: "GPU", price: 1000, qty: 1 },
  { name: "PSU", price: 200, qty: 1 },
  { name: "SSD", price: 200, qty: 2 },
  { name: "AIO", price: 250, qty: 1 },
  { name: "SysFans", price: 20, qty: 4 },
  { name: "Case", price: 200, qty: 1 },
];

const pcCost = function () {
  let costArr = [];
  for (let i = 0; i < pcComponents.length; i++) {
    costArr.push(pcComponents[i].price * pcComponents[i].qty);
  }

  console.log(`${costArr.reduce((acc, cur) => acc + cur)}`);
};

pcCost();
