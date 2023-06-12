// Prerequisites:
//    - Creați un buton cu id-ul "cta-primary" și un div cu id-ul "paragraph".
//    - La apăsarea butonului, utilizați Ajax pentru a încărca conținutul din fișierul "soda.json" (inițial poți folosi console.log()).

console.log("---------------Exercise 1---------------");
// 1. Exercițiul 1: Afișarea tuturor băuturilor
//    - Parcurge fiecare element din fișierul JSON și afișează numele brandului și aroma fiecărei băuturi în div-ul cu id-ul "paragraph".
const btn = document.querySelector("#cta-primary");
const div = document.querySelector(".paragraph");

btn.addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "./JSON/soda.json", true);

  xhr.onload = function () {
    if (xhr.status !== 200) {
      throw new Error("Error status..");
    } else {
      let sodas = JSON.parse(this.response);

      sodas.forEach((soda) => {
        console.log(soda);
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
