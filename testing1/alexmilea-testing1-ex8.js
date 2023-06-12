// Pentru a concatena 2 tipuri de date in JS, folosim operatorul "+"
// Cand concatenam un string cu un alt tip de data (ex. un numar sau o valoare booleana), JS converteste valorile non-string in string dupa care le alipeste
const word1 = "Hello";
const word2 = 5;
const wordCompus1 = word1 + word2;
console.log(wordCompus1); // Output: Hello5 -> type string

const word3 = "5";
const word4 = 5;
const wordCompus2 = word3 + word4;
console.log(wordCompus2); // Output: 55 -> type string

const word5 = 5 + "5";
console.log(word5); // Output: 55 -> type string

// In cazul array-urilor, se foloseste metoda concat(), care returneaza un array nou compus din elementele celor 2 array-uri contcatenate
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrCompus = arr1.concat(arr2);
console.log(arrCompus);

// Sidequest: Exista situatia in care folosim operatorul "-" care va interpreta scaderea dintre un numar si un string prin conversia string-ului in numar, iar rezultatul va fi de tip number, desi poate fi si NaN:
console.log("5" - 3); // Output: 2 -> type number
console.log("Alex" - 3); // Output: NaN -> type number
