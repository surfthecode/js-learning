// Prerequisites:
//    - Creați un buton cu id-ul "cta-primary" și un div cu id-ul "paragraph".
//    - La apăsarea butonului, utilizați Ajax pentru a încărca conținutul din fișierul "soda.json" (inițial poți folosi console.log()).

const btn = document.querySelector("#cta-primary");
const div = document.querySelector(".paragraph");
const randomDrinkBtn = document.querySelector("#cta-secondary");
const flavor = document.querySelector(".flavor");
const flavorDrinkBtn = document.querySelector("#cta-tertiary");
const ascendingPriceBtn = document.querySelector("#cta-quaternary");
const drinkSodaBtn = document.querySelector("#cta-quinary");

console.log("------------------AJAX------------------");
console.log("---------------Exercise 1---------------");
// 1. Exercițiul 1: Afișarea tuturor băuturilor
//    - Parcurge fiecare element din fișierul JSON și afișează numele brandului și aroma fiecărei băuturi în div-ul cu id-ul "paragraph".

// btn.addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "./JSON/soda.json", true);

//   xhr.onload = function () {
//     if (xhr.status !== 200) {
//       throw new Error("Error status..");
//     } else {
//       sodas = JSON.parse(this.response);

//       sodas.forEach((soda) => {
//         const brandName = soda.brand;
//         const flavor = soda.flavor;
//         const newDiv = document.createElement("div");

//         newDiv.innerHTML = `Drink ${soda.id}: ${brandName} - flavor: ${flavor}`;
//         newDiv.style.color = "antiquewhite";

//         div.appendChild(newDiv);
//       });
//     }
//   };

//   xhr.send();
// });

console.log("---------------Exercise 2---------------");
// 2. Exercițiul 2: Afișarea unei băuturi aleatoare
//    - Generează un număr aleator între 0 și lungimea array-ului din fișierul JSON.
//    - Afișează numele brandului și descrierea băuturii alese aleator în div-ul cu id-ul "paragraph".

// randomDrinkBtn.addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "./JSON/soda.json", true);

//   xhr.onload = function () {
//     if (xhr.status !== 200) {
//       throw new Error("Error status..");
//     } else {
//       sodas = JSON.parse(this.response);
//       let randomNum = Math.floor(Math.random() * sodas.length);

//       div.innerHTML = `${randomNum + 1}: ${sodas[randomNum].brand} is ${
//         sodas[randomNum].description
//       }.`;
//       div.style.color = "antiquewhite";
//     }
//   };

//   xhr.send();
// });

console.log("---------------Exercise 3---------------");
// 3. Exercițiul 3: Afișarea băuturilor cu un anumit gust
//    - Cere utilizatorului să introducă un gust specific într-un prompt.
//    - Parcurge fiecare băutură din fișierul JSON și afișează numele brandului și descrierea băuturilor care au gustul introdus de utilizator în div-ul cu id-ul "paragraph".

// const input = prompt(
//   "Choose a flavor from the list: Cola / Portocală / Lămâie"
// );
// flavor.innerHTML = input;

// flavorDrinkBtn.addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "./JSON/soda.json", true);

//   xhr.onload = function () {
//     if (xhr.status !== 200) {
//       throw new Error("Error status..");
//     } else {
//       sodas = JSON.parse(this.response);

//       sodas.forEach((soda) => {
//         if (input.toLowerCase() === soda.flavor.toLowerCase()) {
//           const brandName = soda.brand;
//           const description = soda.description;
//           const newDiv = document.createElement("div");

//           newDiv.innerHTML = `Drink ${soda.id}: ${brandName} - ${description}`;
//           newDiv.style.color = "antiquewhite";

//           div.appendChild(newDiv);
//         } else
//           console.log(
//             "We don't have any drinks with your preferred flavor. Please choose a flavor from the list.."
//           );
//       });
//     }
//   };

//   xhr.send();
// });

console.log("---------------Exercise 4---------------");
// 4. Exercițiul 4: Afișarea băuturilor în ordine descrescătoare după preț
//    - Sortează array-ul de băuturi în funcție de preț în ordine descrescătoare.
//    - Afișează numele brandului și prețul fiecărei băuturi în div-ul cu id-ul "paragraph".

// ascendingPriceBtn.addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "./JSON/soda.json", true);

//   xhr.onload = function () {
//     if (xhr.status !== 200) {
//       throw new Error("Error status..");
//     } else {
//       sodas = JSON.parse(this.response);

//       sodas.sort((a, b) => a.price - b.price);

//       sodas.forEach((soda) => {
//         const brandName = soda.brand;
//         const price = soda.price;
//         const newDiv = document.createElement("div");

//         newDiv.innerHTML = `${brandName} - price: ${price}`;
//         newDiv.style.color = "antiquewhite";

//         div.appendChild(newDiv);
//       });
//     }
//   };

//   xhr.send();
// });

console.log("---------------Exercise 5---------------");
// 5. Exercițiul 5: Actualizarea cantității unei băuturi
//    - Cere utilizatorului să introducă un ID de băutură într-un prompt.
//    - Găsește băutura corespunzătoare în fișierul JSON și scade valoarea 10 din cantitatea disponibilă.
//    - Afișează un mesaj în div-ul cu id-ul "paragraph" care să confirme actualizarea cantității.
// const input2 = Number(
//   prompt(
//     "Choose a soda to drink:\n1 - Cola\n2 - Pepsi\n3 - Fanta\n4 - Sprite\nType the number to proceed.."
//   )
// );

// drinkSodaBtn.addEventListener("click", function () {
//   let xhr = new XMLHttpRequest();

//   xhr.open("GET", "./JSON/soda.json", true);

//   xhr.onload = function () {
//     if (xhr.status !== 200) {
//       throw new Error("Error status..");
//     } else {
//       sodas = JSON.parse(this.response);

//       sodas.forEach((soda) => {
//         if (input2 === soda.id) {
//           soda.quantity -= 10;
//           div.innerHTML = `You drank a ${soda.brand} and the remaining qty. of soda is ${soda.quantity}`;
//           div.style.color = "antiquewhite";
//         }
//       });
//     }
//   };

//   // NOT updating the JSON file
//   // xhr.send(JSON.stringify(sodas));

//   xhr.send();
// });

console.log("----------------Fetch API---------------");
console.log("---------------Exercise 1---------------");
// 1. Exercițiul 1: Afișarea tuturor băuturilor
//    - Utilizează Fetch API pentru a face o cerere GET către fișierul "soda.json".
//    - Manipulează răspunsul și afișează numele brandului și aroma fiecărei băuturi în div-ul cu id-ul "paragraph".

btn.addEventListener("click", function () {
  fetch("./JSON/soda.json")
    .then((response) => response.json())
    .then((result) => {
      result.forEach((soda) => {
        const brandName = soda.brand;
        const flavor = soda.flavor;
        const newDiv = document.createElement("div");

        newDiv.innerHTML = `Drink ${soda.id}: ${brandName} - flavor: ${flavor}`;
        newDiv.style.color = "antiquewhite";

        div.appendChild(newDiv);
      });
    })
    .catch((err) => console.log(err));
});

console.log("---------------Exercise 2---------------");
// 2. Exercițiul 2: Afișarea unei băuturi aleatoare
//    - Utilizează Fetch API pentru a face o cerere GET către fișierul "soda.json".
//    - Manipulează răspunsul și afișează numele brandului și descrierea unei băuturi aleatoare în div-ul cu id-ul "paragraph".
randomDrinkBtn.addEventListener("click", function () {
  fetch("./JSON/soda.json")
    .then((response) => response.json())
    .then((result) => {
      result.forEach((soda) => {
        const brandName = soda.brand;
        const description = soda.description;
        const newDiv = document.createElement("div");

        newDiv.innerHTML = `${brandName}: ${description}`;
        newDiv.style.color = "antiquewhite";

        div.appendChild(newDiv);
      });
    });
});
