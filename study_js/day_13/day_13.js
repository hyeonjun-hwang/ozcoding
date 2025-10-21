import { fileURLToPath } from "url";
import path from "path";
import { type } from "os";
const __filename = fileURLToPath(import.meta.url);

console.log(
  `================ ${path.basename(__filename)} running ===============`
);

//---

function plusOne(num) {
  if (typeof num !== "number") {
    console.log("NaN 이다~");
    return `입력된 값 : ${num}`;
  }
  return num + 1;
}

console.log(plusOne("dd"));

// 기본값
function total(x = 0, y = 0) {
  return x + y;
}

console.log("total(10, 20): ", total(10, 20));
console.log("total(1) :", total(1));

// 구조분해할당
console.log("=====구조분해할당=====");

const fruits = ["apple", "banana", "cherry"];

function getSecondItem([a, , c]) {
  //   console.log(b);
  return a;
}

console.log(getSecondItem(fruits));

// 나머지 매개변수(rest parameter)

function add(firstNum, ...rest) {
  console.log(rest);
  return rest.reduce((acc, cur) => acc + cur, firstNum);
}

console.log(add(1, 2, 3, 4));

// ---
// ---

// 콜백함수
console.log("=====콜백함수=====");

const sum = (x, y) => {
  setTimeout((callback) => {
    // return a + b;
  }, 1000);
};

sum(1, 2);

// temp
