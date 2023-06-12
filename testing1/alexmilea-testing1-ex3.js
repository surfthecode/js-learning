// Putem filtra valorile dintr-un array in JS prin utilizarea metodei predefinite filter()
// Filter() returneaza un array nou cu valorile care corespund cerintelor functiei primita de metoda filter()
// Functia se poate defini si in afara metodei

// Mai jos am creat un array de cifre. Voi scrie un cod care imi va returna si printa in consola doar acele numere din array-ul initial care sunt > 3

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = numbers.filter((num) => num > 3);
console.log(filteredNumbers);

var num = 5;
var bool = true;
var result = num + Number(bool);
console.log(result);
