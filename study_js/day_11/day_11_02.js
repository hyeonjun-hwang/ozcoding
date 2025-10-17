// push(), pop()

let stack = [];

stack.push(1, 2, 3, 4);

console.log("statck", stack);
console.log("stack.pop()", stack.pop());
console.log("statck", stack);

stack.pop();

console.log("stack", stack);

// shift(), unshift()
console.log("========");

const queue = [];
queue.push(1, 2, 4);
console.log("queue.push(1,2,4)", queue);
queue.shift();
console.log("queue.shift()", queue);

queue.unshift(99);
console.log("queue,unshift(99)", queue);

const asd = [1, 3, 4];
asd.push(2, 3, 4);
console.log("asd", asd);

function hwanga(baby, name) {}

const koko = {
  name: "dasd",
  age: 33,
};

const hwang = new Map();
let hwang2 = new Promise();
const hwang3 = class name {
  constructor(i) {}
};

async (a, b) => {
  a + b;
};
