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
  this.submit();
});
