console.log("---------------Exercise 1---------------");
// Creați o constructor function "Masina" care să aibă proprietăți precum "marca", "model" și "anFabricatie".Adăugați o metodă "afiseazaDetalii" la prototipul constructorului care să afișeze toate detaliile mașinii. Extindeți constructorul adăugând o proprietate statică "numarMasini" care să țină evidența numărului total de mașini create. Apoi, creați două instanțe ale clasei și afișați detaliile și numărul total de mașini create.
function Masina(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  Masina.counter++;
}

Masina.counter = 0;

Masina.prototype.displayDetails = function () {
  console.log(
    `Instance #${Masina.counter}\nCar details:\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`
  );
};

const masina1 = new Masina("BMW", "iX3", "2023");
console.log(masina1.displayDetails());

const masina2 = new Masina("BMW", "iX", "2023");
console.log(masina2.displayDetails());

console.log("---------------Exercise 2---------------");
// Extindeți prototipul Array pentru a adăuga o metodă numită "filtrareNrPare" care să returneze un nou array conținând doar numerele pare din array-ul original. Utilizați keyword-ul "this" în implementarea metodei pentru a accesa array-ul curent.
Array.prototype.filterEven = function () {
  return this.filter((el) => el % 2 === 0);
};

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newArr.filterEven());

console.log("---------------Exercise 3---------------");
// Creați o clasă "FormaGeometrica" care să aibă o metodă statică "descriere" care afișează o descriere generală a formei geometrice. Extindeți clasa pentru a crea subclase pentru forme geometrice specifice, cum ar fi "Cerc" și "Patrat". În fiecare subclasă, adăugați metode specifice pentru calculul ariei și a perimetrului și utilizați keyword-ul "super" pentru a accesa metodele și proprietățile clasei părinte.
class geometricShape {
  static description() {
    console.log(`This is a geometric shape...`);
  }
}

class Circle extends geometricShape {
  constructor(r) {
    super();
    this.r = r;
  }

  calcArea() {
    return Math.PI * Math.pow(this.r, 2);
  }

  calcPerimeter() {
    return 2 * Math.PI * this.r;
  }
}

class Square extends geometricShape {
  constructor(l) {
    super();
    this.l = l;
  }

  calcArea() {
    return Math.pow(this.l, 2);
  }

  calcPerimeter() {
    return 4 * this.l;
  }
}

const newCircle = new Circle(5);
console.log(
  `The area of your circle is ${Math.floor(
    newCircle.calcArea()
  )}\nThe periemter of your circle is ${Math.floor(newCircle.calcPerimeter())}`
);

const newSquare = new Square(5);
console.log(
  `The area of your Square is ${Math.floor(
    newSquare.calcArea()
  )}\nThe periemter of your Square is ${Math.floor(newSquare.calcPerimeter())}`
);
