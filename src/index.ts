console.log("\n==== 여기는 index.ts 이다 ====");

// import { testMakePerson } from "./utils/makePerson.js";
// testMakePerson();

// import { type IPerson, makePerson } from "./person/Person.js";
import * as P from "./person/Person.js";
import Chance from "chance";
import * as R from "ramda";

const testMakePerson = (): void => {
  let jane: P.IPerson = P.makePerson("hwanga");
  let jack: P.IPerson = P.makePerson("Jack");
  console.log(jane, jack);
};
testMakePerson();

const chance = new Chance();

let persons: P.IPerson[] = R.range(0, 2).map(
  (n: number) => new P.Person(chance.name(), chance.age())
);
console.log(persons);

let a = true;

let o: object = { name: "hwang", age: 20 };
console.log(o);
o = { first: 1, second: 2 };
console.log(o);

// class
class Add {
  constructor(public a: number, temp: number = 0) {
    this.a = a + temp;
  }
}

const add1 = new Add(1, 2);
const add2 = new Add(1);

console.log(add1);
console.log(add2);

class Person3 {
  constructor(public name: string, public age?: number) {}
}

// implements

interface IPerson4 {
  name: string;
  age?: number | undefined;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

// let hwang4: IPerson4 = new Person4("hwang", 30);
// console.log(hwang4);

// let person3 = new Person3("hwang");
// console.log(person3);

let address: any = {
  country: "Korea",
  city: "Seoul",
  address1: "Gangnam-gu",
  address2: "Sinsa-dong 123-456",
  address3: "789 street, 2 Floor ABC building",
};

const { address1, address2, ...detail } = address;

console.log(detail);

// --

import type { INameable } from "./utils/INameable.js";

let person: INameable = {
  name: "hwang",
};

console.log(person.name);

// --
const makeObject = (key: string, value: number) => ({ [key]: value });

console.log(makeObject("num", 2));

// --
type keyValueType = {
  [key: string]: string;
};

// --
type funcType = (key: string, value: number) => { [key: string]: number };

const makeObject2: funcType = (key, value) => ({ [key]: value, koko: 23 });

console.log(makeObject2("dd", 2));

// class 메서드와 this
class AAA {
  value: number = 1;
  func(): void {
    console.log(`값은 ${this.value}!!`);
  }
}

const aaa = new AAA();
aaa.func();

// --
let url = "www.naver";
