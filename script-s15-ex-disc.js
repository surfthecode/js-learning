// Exercițiul 1: Calcularea sumei vârstelor
// Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
// Calculează suma vârstelor tuturor studenților și returnează rezultatul.

const studenti = {
  student1: { nume: "John", varsta: 20 },
  student2: { nume: "Alice", varsta: 22 },
  student3: { nume: "Mark", varsta: 19 },
  sumAge: function () {
    return console.log(
      ` Suma varstelor celor 3 studenti este: ${
        studenti.student1.varsta +
        studenti.student2.varsta +
        studenti.student3.varsta
      }`
    );
  },
};

studenti.sumAge();

console.log("------------------------------------------");

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

console.log("------------------------------------------");

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

console.log("------------------------------------------");

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

utilizatori.findEmail();

console.log("------------------------------------------");
