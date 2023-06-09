class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set firstName(name) {
    if (typeof name === "string") {
      this._firstName = name;
    } else {
      console.log(`Your input: '${name}', is not a string.`);
    }
  }

  set lastName(name) {
    if (typeof name === "string") {
      this._lastName = name;
    } else {
      console.log(`Your input: '${name}', is not a string.`);
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
}

const newPerson = new Person("Alex", "M");
console.log(newPerson.firstName);
console.log(newPerson.lastName);

const newPerson2 = new Person(2, "M");
// Output: Your input: '2', is not a string.
