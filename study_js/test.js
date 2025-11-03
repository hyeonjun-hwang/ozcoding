// class Book {
//   this.name = name;
//   this.age = age;
// }

// const book1 = new Book("hwang", 22);

// console.log(book1);

const localDate = new Date().toLocaleString();
class Person {
  date = localDate;
  constructor(name = "hwang", age = 12) {
    this.name = name;
    this.age = age;
  }
  printName() {
    console.log(this.name);
  }
}

const person1 = new Person();
const person2 = new Person("ezzing", 3);

console.log(person1);
console.log(person2);

// --
const func = function () {
  console.log("Asd");
  return;
};

function func2() {
  console.log("Qwe");
}

console.log(func());
console.log(func2());
