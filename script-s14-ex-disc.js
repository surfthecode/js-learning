// 1. Scrie o funcție care primește un număr și returnează true dacă este par, altfel false.
// 2. Scrie o funcție care primește două numere și returnează suma lor inmultita cu 0.1
// 3. Scrie o functie care calculeaza procentajul dintr-un numar. Procentajul si numarul se introduc ca parametrii.
// 4. Scrie o funcție care primește trei numere și returnează cel mai mare dintre ele.
// 5. Scrie o funcție care primește un număr și returnează suma tuturor numerelor întregi de la 0 până la acel număr.
// 6. Scrie o funcție care primește un număr și returnează true dacă este prim, altfel false.
// 7. Scrie o funcție care primește ca parametru o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0. Funcția trebuie să returneze un mesaj diferit în fiecare caz.
// 8. Scrie o functie care afiseaza toate numerele pare dintre un min si maxim dat ca parametru
// 9. Scrie o functie care primeste 3 numere si afiseaza sir crescator cu acele numere.
// 10. Scrie o functie care primeste 3 numere si afiseaza sir descrescator cu acele numere.
// 11. Scrie o functie care primeste 1 numar si afiseaza tabla inmultirii pentru acel numar.
// 12. Scrie o functie care primeste 3 parametrii: nr persoane, locuri disponibile, mese. Aseaza numarul de persoane la mese astfel incat sa nu ramana nici o masa libera, iar la final afiseaza cate locuri libere au ramas (total).
// 13. Scrie o functie care primeste 1 singur parametru. Acest parametru defineste care dintre functiile de mai sus este apelata. Afiseaza parametru primit, numele functiei apelate precum si raspunsul acelei functii.
// 14. Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent.
// 15. Scrie o functie care calculeaza anii unui animal de companie dat ca parametru (caine sau pisica / daca alegi si altceva, go for it).

/* --------------------------------------------------------------------- */
/*                       1. nr. par? true sau false                      */
/* --------------------------------------------------------------------- */
const isEven = function (num1) {
  num1 = Number(prompt("Type a number:"));
  let result1;
  num1 % 2 === 0 ? (result1 = true) : (result1 = false);
  return console.log(`Your number ${num1} is even: ${result1}`);
};

// isEven();

/* --------------------------------------------------------------------- */
/*                  2. suma a 2 numere inmultita cu 0,1                  */
/* --------------------------------------------------------------------- */
const calcSum = function (num2, num3) {
  num2 = Number(prompt("Type a number:"));
  num3 = Number(prompt("Type another number:"));
  return console.log(
    `Calc: (${num2} + ${num3}) * 0.1 = ${(num2 + num3) * 0.1} `
  );
};

// calcSum();

/* --------------------------------------------------------------------- */
/*                   3. calcul procentaj dintr-un numar                  */
/* --------------------------------------------------------------------- */
const calcPercent = function (num4, percentage) {
  num4 = Number(prompt("Type a number:"));
  percentage = Number(prompt("Type the percentage you want to calculate:"));
  return console.log(
    `${percentage}% of ${num4} = ${(num4 * percentage) / 100}`
  );
};

// calcPercent();

/* --------------------------------------------------------------------- */
/*                        4. biggest of 3 numbers                        */
/* --------------------------------------------------------------------- */
const biggestOfThree = function (num5, num6, num7) {
  num5 = Number(prompt("Type the first number:"));
  num6 = Number(prompt("Type the second number:"));
  num7 = Number(prompt("Type the third number:"));

  return console.log(
    `${Math.max(
      num5,
      num6,
      num7
    )} is the largest out of ${num5}, ${num6}, ${num7}`
  );
};

// biggestOfThree();

/* --------------------------------------------------------------------- */
/*                      5. suma de la zero la numar                      */
/* --------------------------------------------------------------------- */
const sumFromZeroToNumber = function (num8) {
  num8 = Number(prompt("Type a number:"));
  let sumFromZero = 0;
  for (let i = 0; i <= num8; i++) {
    sumFromZero += i;
  }

  return console.log(
    `The sum of all numbers from ${0} to ${num8} is ${sumFromZero}`
  );
};

// sumFromZeroToNumber();

/* --------------------------------------------------------------------- */
/*                     6. numar prim? true sau false                     */
/* --------------------------------------------------------------------- */
function isPrime(num9) {
  num9 = Number(prompt("Type your number:"));
  let flag = true;

  if (num9 < 2) {
    return `${num9} is not a prime number.`;
  } else {
    for (let j = 2; j < num9; j++) {
      if (num9 % j == 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return `${num9} is a prime number`;
    } else {
      return `${num9} is not a prime number`;
    }
  }
}

// console.log(isPrime());

/* --------------------------------------------------------------------- */
/*                    7. mai mare sau mai mic decat 0                    */
/* --------------------------------------------------------------------- */
const compareToZero = function (num10) {
  num10 = Number(prompt("Type your number:"));
  let result10 = "";
  num10 > 0
    ? (result10 = `${num10} is greater than zero`)
    : (result10 = `${num10} is less than zero`);

  return console.log(`${result10}`);
};

// compareToZero();

/* --------------------------------------------------------------------- */
/*               8. numere pare dintre 2 numere min si max               */
/* --------------------------------------------------------------------- */
const displayEven = function (x, y) {
  x = Number(prompt("Type your first number:"));
  y = Number(prompt("Type your second number:"));
  let nr = 0;

  const min = Math.min(x, y);
  const max = Math.max(x, y);

  for (let k = min + 1; k < max; k++) {
    if (k % 2 === 0) {
      nr = k;
      console.log(nr);
    } else continue;
  }
};

// displayEven();

/* --------------------------------------------------------------------- */
/*                     9. sir crescator din 3 numere                     */
/* --------------------------------------------------------------------- */
const displayOrdered = function (num11, num12, num13) {
  num11 = Number(prompt("Type the first number:"));
  num12 = Number(prompt("Type the second number:"));
  num13 = Number(prompt("Type the third number:"));

  if (num11 > num12) {
    if (num12 > num13) {
      console.log(num13, num12, num11);
    } else if (num11 > num13) {
      console.log(num12, num13, num11);
    } else {
      console.log(num12, num11, num13);
    }
  } else {
    if (num11 > num13) {
      console.log(num13, num11, num12);
    } else if (num12 > num13) {
      console.log(num11, num13, um12);
    } else {
      console.log(num11, num12, num13);
    }
  }
};

// displayOrdered();

/* --------------------------------------------------------------------- */
/*                   10. sir descrescator din 3 numere                   */
/* --------------------------------------------------------------------- */
const displayReverseOrdered = function (num14, num15, num16) {
  num14 = Number(prompt("Type the first number:"));
  num15 = Number(prompt("Type the second number:"));
  num16 = Number(prompt("Type the third number:"));

  if (num14 > num15) {
    if (num15 > num16) {
      console.log(num14, num15, num16);
    } else if (num14 > num16) {
      console.log(num14, num16, num15);
    } else {
      console.log(num16, num14, num15);
    }
  } else {
    if (num14 > num16) {
      console.log(num15, num14, num16);
    } else if (num15 > num16) {
      console.log(num12, num16, um14);
    } else {
      console.log(num16, num15, num14);
    }
  }
};

// displayReverseOrdered();

/* ---------------------------------------------------------------------- */
/*                  11. tabla inmultirii pentru un numar                  */
/* ---------------------------------------------------------------------- */
const displayMultiplicationTable = function (num17) {
  num17 = Number(prompt("Type a number:"));
  for (let l = 1; l <= 10; l++) {
    console.log(`${num17} * ${l} = ${num17 * l}`);
  }
};

// displayMultiplicationTable();

/* ---------------------------------------------------------------------- */
/*                     12. cate locuri libere la masa                     */
/* ---------------------------------------------------------------------- */
// Explanation needed
// nr locuri la o masa
// nr pers
// nr mese
//
//
//
//
//
//

/* --------------------------------------------------------------------- */
/*                         14. calc anul nasterii                        */
/* --------------------------------------------------------------------- */
const calcBirthYear = function (birthYear) {
  birthYear = Number(prompt("Type your birthyear"));
  const currentYear = new Date().getFullYear();
  return console.log(
    `Your birthyear is ${birthYear}. Your age is: ${currentYear - birthYear}`
  );
};

// calcBirthYear();

/* --------------------------------------------------------------------- */
/*                           15. calcul ani pet                          */
/* --------------------------------------------------------------------- */
// Explanation needed
//
//
//
//
//
//
//
//
//

/* --------------------------------------------------------------------- */
/*           13. functie care apeleaza toate celelalte functii           */
/* --------------------------------------------------------------------- */
const funcSelector = function (selector) {
  selector = Number(
    prompt(`Chose an option from below: \n
  1 - odd number? true or false\n
  2 - calculate sum of 2 numbers multiplied by 0.1\n
  3 - calculate the percentage of a number\n
  4 - biggest of 3 numbers\n
  5 - sum from 0 to a number\n
  6 - prime number? true or false\n
  7 - less or greater than 0\n
  8 - even numbers between 2 numbers\n
  9 - numbers in ascending order\n
  10 - numbers in descending order\n
  11 - multiplication table for a number\n
  12 - how many free seats remaining at a table?\n
  14 - age calculator\n
  15 - pet age calculator`)
  );
  switch (selector) {
    case 1:
      console.log("function name: isEven");
      isEven();
      break;
    case 2:
      console.log("function name: calcSum");
      calcSum();
      break;
    case 3:
      console.log("function name: calcPercent");
      calcPercent();
      break;
    case 4:
      console.log("function name: biggestOfThree");
      biggestOfThree();
      break;
    case 5:
      console.log("function name: sumFromZeroToNumber");
      sumFromZeroToNumber();
      break;
    case 6:
      console.log("function name: isPrime");
      console.log(isPrime());
      break;
    case 7:
      console.log("function name: compareToZero");
      compareToZero();
      break;
    case 8:
      console.log("function name: displayEven");
      displayEven();
      break;
    case 9:
      console.log("function name: displayOrdered");
      displayOrdered();
      break;
    case 10:
      console.log("function name: displayReverseOrdered");
      displayReverseOrdered();
      break;
    case 11:
      console.log("function name: displayMultiplicationTable");
      displayMultiplicationTable();
      break;
    case 12:
      console.log("function name: ");
      console.log(`Further explanantion needed`);
      break;
    case 14:
      console.log("function name: calcBirthYear");
      calcBirthYear();
      break;
    case 15:
      console.log("function name: ");
      console.log(`Further explanantion needed`);
      break;
  }
};

funcSelector();
