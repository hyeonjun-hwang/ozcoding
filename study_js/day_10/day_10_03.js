let a = "hello, world";

// console.log([...a]);

let uppercase = "";

let greetings = [..."hello, world"];

greetings.forEach(async (greetings, index) => {
  uppercase += greetings.toUpperCase();
  console.log(greetings, index);
});

console.log(uppercase);

// ---

let c = [1, 2, 3, 4];

c.forEach(async (value, index, array) => {
  console.log(array);
});
