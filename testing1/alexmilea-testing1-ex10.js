// Consider un obiect numit "person" care are proprietatile firstName, lastName si occupation si are o metoda care afiseaza numele complet al persoanei, cand este apelata
const person = {
  firstName: "Alex",
  lastName: "M",
  occupation: "FE Web Developer",
  getName: function () {
    return `The full name is: ${this.firstName} ${this.lastName}`;
  },
};

console.log(person.getName());
