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
