console.log("========== running day_12 ==========");

const getObj = () => {
  return { value: "객체 데이터" };
};

const testObj = () => {
  value: "객체 데이터";
};

const testObj2 = () => ({
  value: "객체 데이터",
});

const getArr = () => {
  return [1, 2, 3];
};

const getArr2 = () => [1, 2, 3];

console.log("getObj() :", getObj());
console.log(testObj());
console.log(testObj2());
console.log(getArr());
console.log(getArr2());

function greet(name) {
  return `hello, ${name}~!`;
}

console.log(greet());

let fn = greet;
let name1 = "hwang";

console.log(fn());

let result = fn !== null && fn !== undefined ? fn(name1) : undefined;

console.log("result :", result);

// ---
console.log("==========");

function introduce(greeting, ...names) {
  for (let name of names) {
    console.log(`${greeting}, ${name}`);
  }
}

introduce("안녕하셔", "a", "b", "c", "d");

// argument 객체

function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(1, 2, 3, 4));

function test123() {
  console.log(arguments);
}

test123("hwang", { a: 2, b: 33 }, true);
