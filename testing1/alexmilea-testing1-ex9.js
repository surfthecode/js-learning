const input = prompt("Type some numbers, separated by  ','");

let arr = input.split(",").map(Number);
console.log(`Your input was: ${arr}`);

if (arr.some(isNaN)) {
  throw new Error(
    "Invalid input. Please enter only numnbers, separated by comma."
  );
}

arr.sort((a, b) => a - b);
console.log("Your input in ascending order:", arr);
