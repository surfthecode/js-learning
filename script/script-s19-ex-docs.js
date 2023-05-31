console.log("---------------Exercise 1---------------");
// Creați un element HTML cu un anumit ID. Adăugați un eveniment de clic la acest element. În funcția de tratare a evenimentului de clic, schimbați culoarea de fundal a elementului.
const ex1Btn = document.getElementById("ex1");
ex1Btn.addEventListener("click", function () {
  ex1Btn.style.backgroundColor = "black";
});

console.log("---------------Exercise 2---------------");
// Creați un element HTML cu un anumit ID. Adăugați un eveniment de "mouseover" (trecerea cursorului peste element) la acest element. În funcția de tratare a evenimentului de "mouseover", adăugați o clasă CSS la element folosind classList.add. Adăugați și un eveniment de "mouseout" (ieșirea cursorului din element) la același element. În funcția de tratare a evenimentului de "mouseout", eliminați clasa CSS folosind classList.remove.
ex1Btn.addEventListener("mouseover", function () {
  ex1Btn.classList.add("mouseover");
});
ex1Btn.addEventListener("mouseout", function () {
  ex1Btn.classList.remove("mouseover");
});

console.log("---------------Exercise 3---------------");
// Creați un formular HTML cu un buton de submit. Adăugați un eveniment de "submit" la formular. În funcția de tratare a evenimentului de "submit", preveniți comportamentul implicit al formularului folosind event.preventDefault(). Accesați un element din DOM folosind getElementById. Schimbați textul acelui element folosind textContent.
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("title").textContent = "Form submitted!";
  // this.submit();
});

console.log("---------------Exercise 4---------------");
// Adăugați un eveniment de "keydown" (apăsarea unei taste) la document. În funcția de tratare a evenimentului de "keydown", verificați dacă tasta apăsată este Enter (cheia cu codul 13). Dacă este apăsată tasta Enter, creați un element nou folosind createElement. Adăugați noul element în DOM folosind appendChild.
const email = document.getElementById("email");
email.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const div = document.createElement("div");
    div.classList.add("appendedDiv");
    document.getElementById("parentDiv").appendChild(div);
  }
});

console.log("---------------Exercise 5---------------");
// Creați un element HTML cu un anumit ID. Adăugați un eveniment de "dblclick" (dublu clic) la acest element. În funcția de tratare a evenimentului de "dblclick", accesați elementul părinte folosind parentNode. Eliminați elementul din DOM folosind removeChild.
document.addEventListener("keydown", function () {
  const tempDivs = document.querySelectorAll(".appendedDiv");

  tempDivs.forEach((el) => {
    el.addEventListener("dblclick", function () {
      const elParent = el.closest("#parentDiv");
      elParent.removeChild(el);
    });
  });
});
