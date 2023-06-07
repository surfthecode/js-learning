console.log("---------------Exercise 1---------------");
// JSON
// Definește un obiect JSON care reprezintă un produs cu următoarele proprietăți: nume, preț și disponibilitate. Convertește obiectul JSON într-un șir de caractere JSON apoi parcurge obiectul JSON și afișează proprietățile și valorile sale în consolă.
const text =
  '{"name" : "Product 1", "price" : 250, "availability": "in stock"}';

const product = JSON.parse(text);
console.log(
  `This is ${product.name}, it costs ${product.price} and is ${product.availability}.`
);

console.log("---------------Exercise 2---------------");
// AJAX
// Utilizează AJAX pentru a solicita un fișier text / JSON de la server / API și afișează conținutul acestuia într-un element HTML.
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://my-json-server.typicode.com/typicode/demo/posts",
  false
);
console.log("With AJAX:");
xhr.onload = function () {
  if (xhr.status !== 200)
    console.log("Attention required: status not 200, check response status!");
  else {
    const id = JSON.parse(this.response);
    id.forEach((element) => {
      //   const newDiv = document.createElement("div");
      //   newDiv.textContent = `${element.id} - ${element.title}`;
      //   document.getElementById("parentDiv2").appendChild(newDiv);
      console.log(`${element.id} - ${element.title}`);
    });
  }
};

xhr.send();

console.log("---------------Exercise 3---------------");
// Fetch API
// Utilizează Fetch API pentru a solicita un fișier JSON de la un server și afișează datele acestuia în consolă.
console.log("With fetch:");
fetch("https://my-json-server.typicode.com/typicode/demo/posts")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((element) => {
      console.log(`${element.id} - ${element.title}`);
    })
  );

console.log("---------------Exercise 4---------------");
//   setInterval și setTimeout:
// Folosind setInterval, afișează în consolă un mesaj care se repetă la fiecare 2 secunde. Apoi, folosind setTimeout, afișează în consolă un mesaj după o întârziere de 3 secunde.

const interval = setInterval(function () {
  console.log(
    "This message repeats every 2 seconds and stops after the 3rd loop.."
  );
}, 2000);

setTimeout(function () {
  clearInterval(interval);
}, 6000);

console.log("---------------Exercise 5---------------");
// Window
// Afișează în consolă lățimea și înălțimea ferestrei browserului utilizând obiectul window. Utilizează metoda prompt pentru a solicita utilizatorului un nume și afișează un mesaj de salut personalizat într-un element HTML.
console.log(
  `Your browser window's dimensions (w x H) are: ${window.innerWidth} x ${window.innerHeight} px.`
);

const userName = window.prompt("Type your name here:");
const anotherDiv = document.createElement("div");
anotherDiv.textContent = userName;
document.getElementById(
  "parentDiv2"
).textContent = `Hello and welcome, ${userName}!`;
