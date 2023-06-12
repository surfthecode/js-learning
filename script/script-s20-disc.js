// Prerequisites:
//    - Creați un buton cu id-ul "cta-primary" și un div cu id-ul "paragraph".
//    - La apăsarea butonului, utilizați Ajax pentru a încărca conținutul din fișierul "soda.json" (inițial poți folosi console.log()).

const btn = document.querySelector("#cta-primary");
const div = document.querySelector(".paragraph");
const randomDrinkBtn = document.querySelector("#cta-secondary");

console.log("---------------Exercise 1---------------");
// 1. Exercițiul 1: Afișarea tuturor băuturilor
//    - Parcurge fiecare element din fișierul JSON și afișează numele brandului și aroma fiecărei băuturi în div-ul cu id-ul "paragraph".
btn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./JSON/soda.json", true);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      throw new Error("Error status..");
    } else {
      sodas = JSON.parse(this.response);

      sodas.forEach((soda) => {
        const brandName = soda.brand;
        const flavor = soda.flavor;
        const newDiv = document.createElement("div");

        newDiv.innerHTML = `Drink ${soda.id}: ${brandName} - flavor: ${flavor}`;
        newDiv.style.color = "antiquewhite";

        div.appendChild(newDiv);
      });
    }
  };

  xhr.send();
});

console.log("---------------Exercise 2---------------");
// 2. Exercițiul 2: Afișarea unei băuturi aleatoare
//    - Generează un număr aleator între 0 și lungimea array-ului din fișierul JSON.
//    - Afișează numele brandului și descrierea băuturii alese aleator în div-ul cu id-ul "paragraph".
randomDrinkBtn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./JSON/soda.json", true);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      throw new Error("Error status..");
    } else {
      sodas = JSON.parse(this.response);
      let randomNum = Math.floor(Math.random() * sodas.length);

      div.innerHTML = `${randomNum + 1}: ${sodas[randomNum].brand} is ${
        sodas[randomNum].description
      }.`;
      div.style.color = "antiquewhite";
    }
  };

  xhr.send();
});

console.log("---------------Exercise 3---------------");
// 3. Exercițiul 3: Afișarea băuturilor cu un anumit gust
//    - Cere utilizatorului să introducă un gust specific într-un prompt.
//    - Parcurge fiecare băutură din fișierul JSON și afișează numele brandului și descrierea băuturilor care au gustul introdus de utilizator în div-ul cu id-ul "paragraph".
const input = prompt("Chose a flavor from the list: Cola / Portocală / Lămâie");
