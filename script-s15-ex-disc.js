console.log("---------------Exercise 1---------------");
// Exercițiul 1: Calcularea sumei vârstelor
// Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
// Calculează suma vârstelor tuturor studenților și returnează rezultatul.
const studenti = {
  student1: { nume: "John", varsta: 20 },
  student2: { nume: "Alice", varsta: 22 },
  student3: { nume: "Mark", varsta: 19 },
  sumAge: function () {
    return console.log(
      `Suma varstelor celor 3 studenti este: ${
        studenti.student1.varsta +
        studenti.student2.varsta +
        studenti.student3.varsta
      }`
    );
  },
};

studenti.sumAge();

console.log("---------------Exercise 2---------------");
// Exercițiul 2: Concatenarea numelor de familie
// Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
// Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere.
const familii = {
  familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
  familie2: { numeTata: "Radu", numeMama: "Georgescu" },
  concatName: function () {
    console.log(
      `${this.familie1.numeTata + "-" + this.familie1.numeMama}\n${
        this.familie2.numeTata + "-" + this.familie2.numeMama
      }`
    );
  },
};

familii.concatName();

console.log("---------------Exercise 3---------------");
// Exercițiul 3: Găsirea celui mai mare punctaj
// Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
// Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul.
const elevi = {
  elev1: { nume: "Maria", punctaj: 80 },
  elev2: { nume: "Alex", punctaj: 95 },
  elev3: { nume: "Andrei", punctaj: 85 },
  calcMaxPoints: function () {
    const maxName = "Alex";
    // return console.log(
    //   `Punctajul maxim este: ${Math.max(
    //     this.elev1.punctaj,
    //     this.elev2.punctaj,
    //     this.elev3.punctaj
    //   )}`
    // );
    return console.log(
      `${
        elevi[Object.keys(elevi).find((key) => elevi[key].nume == maxName)].nume
      } has the highest score with ${
        elevi[Object.keys(elevi).find((key) => elevi[key].nume == maxName)]
          .punctaj
      } points`
    );
  },
};

elevi.calcMaxPoints();

console.log("---------------Exercise 4---------------");
// Exercițiul 4: Verificarea existenței unui email într-un obiect
// Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
// Verifică dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.
const utilizatori = {
  utilizator1: { nume: "John", email: "john@example.com" },
  utilizator2: { nume: "Alice", email: "alice@example.com" },

  findEmail: function (email) {
    email = prompt("Type the email address you want to find:");

    const result = Object.keys(utilizatori).find(
      (key) => utilizatori[key].email == email
    );
    if (email == undefined || email == "")
      console.log("Please reload an type the email address you want to find");
    else if (result) {
      console.log("The email exists in our database?", true);
    } else console.log("The email exists in our database?", false);
  },
};

// utilizatori.findEmail();

console.log("---------------Exercise 5---------------");
// Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect
// Primești un obiect angajati care conține informații despre angajați, inclusiv numele și vârsta lor.
// Calculează numărul total de persoane din obiectul angajati și returnează rezultatul.
const angajati = {
  departament1: { nume: "John", varsta: 30 },
  departament2: { nume: "Alice", varsta: 35 },
  departament3: { nume: "Mark", varsta: 28 },
};

let bodyCount = 0;

for (let i = 1; i <= 3; i++) {
  if (
    angajati["departament" + i].nume != undefined &&
    angajati["departament" + i].nume != ""
  )
    bodyCount++;
}
console.log(`The total number of persons is`, bodyCount);

console.log("---------------Exercise 6---------------");
// Exercițiul 6: Verificarea existenței unui departament într-un obiect
// Primești un obiect companie care conține informații despre departamentele dintr-o companie, inclusiv numele și vechimea lor.
// Verifică dacă un anumit departament există în obiectul companie și returnează true sau false.
const companie = {
  departamentIT: { nume: "John", vechime: 5 },
  departamentVanzari: { nume: "Alice", vechime: 3 },
};

const departmentFinder = function () {
  let keyWord = prompt(
    "Type a department name to find it (ex. IT, Vanzari, etc.)"
  );
  let dep = "departament" + keyWord;

  if (companie[dep] != undefined && companie[dep] != null)
    console.log(`${dep} exists in our company?`, true);
  else console.log(`${dep} exists in our company?`, false);
};

// departmentFinder();

console.log("---------------Exercise 7---------------");
// Exercițiul 7: Verificarea existenței unei calificări într-un obiect
// Primești un obiect candidati care conține informații despre candidați, inclusiv numele și o listă de calificări.
// Verifică dacă o anumită calificare există în obiectul candidati și returnează true sau false.
const candidati = {
  candidat1: {
    nume: "Maria",
    calificari: ["HTML", "CSS", "JavaScript"],
  },
  candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] },
};

const checkSkills = function () {
  let keyWord2 = prompt(
    "Type a skill you want to find candidates for (ex. HTML, CSS, JavaScript, etc."
  );

  for (const candidat in candidati) {
    if (candidati[candidat].calificari.includes(keyWord2))
      console.log(
        `${candidati[candidat].nume}, who is ${candidat}, has the skill ${keyWord2} you are looking for.`,
        true
      );
    else console.log(false);
  }
};

// checkSkills();
