function hello(name) {
  console.log(`${name}님 안녕하세여`);
}

hello("황가");

// map(), filter()

let number = [1, 2, 3, 4];

let number2 = number.map((number) => {
  return number * 2;
});

console.log(number2);

let highNumber = number.filter((number) => {
  return number >= 2.5;
});

console.log(highNumber);

// find(), findIndex()
let num4 = [10, 20, 30, 40, 50];

let res1 = num4.findIndex((num4) => {
  return num4 === 21;
});

console.log(res1);

// every(), some()
let num5 = [1, 2, 3, 4];

let res2 = num5.every((num5) => {
  return num5 < 5;
});
let res3 = num5.every((num5) => {
  return num5 <= 3;
});

console.log("res2", res2);
console.log("res3", res3);

let res4 = num5.some((num5) => {
  return num5 <= 1;
});
let res5 = num5.some((num5) => {
  return num5 < 0;
});

console.log("res4", res4);
console.log("res5", res5);

// Map

let bag = new Map();
bag.set("color", "red");
console.log("bag", bag);

let my = new Map([
  ["name", "hwnag"],
  ["age", 20],
]);

console.log(my);
