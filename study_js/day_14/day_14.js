import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);

console.log(
  `================ ${path.basename(__filename)} running ===============`
);

//Class
const animalPrototype = {
  name: "hwang",
  //   eat: function () {
  //     console.log("냠냠");
  //   },
  eat() {
    console.log("냠냠");
  },
};

animalPrototype.eat();

const dog = Object.create(animalPrototype);

dog.bark = function () {
  console.log("멍멍");
};

console.log(animalPrototype);
console.log(dog);

// 프로토타입 만들기
console.log("===== 프로토타입 만들기 ======");
const carPrototype = {
  start() {
    console.log("engine start");
  },
  stop() {
    console.log("engine stop");
  },
};

const myCar = Object.create(carPrototype);

myCar.brand = "TESLA";
myCar.drive = function () {
  console.log(`${myCar.brand}가 달리고 있다`);
};

myCar.start();
myCar.stop();
myCar.drive();

console.log(myCar);

//
console.log("===========");

let user = {
  firstName: "hyeon-jun",
  lastName: "hwang",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());

// let user2 = user;
// user2 = null;

// console.log(user2.getFullName());

let user3 = {
  firstName: "hyeon-jun2",
  lastName: "hwang",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user3.getFullName());

// 생성자 함수
