import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);

console.log(`************* ${path.basename(__filename)} running *************`);
// =====

const timer1 = {
  name: "hwang",
  timeout: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

const timer2 = {
  name: "hwang",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

// console.log("timer1.timeout(): ", timer1.timeout());
// console.log("timer2.timeout(): ", timer2.timeout());

// ====비동기 =====
console.log("========비동기=======");

function b() {
  console.log("B");
}

// 🚀 [수정] a() 함수가 Promise를 반환하도록 변경
function a() {
  return new Promise((resolve) => {
    // Promise를 반환!
    setTimeout(() => {
      console.log("A");
      resolve(); // Promise를 이행(resolve)하여 대기 상태를 해제
    }, 2000);
  });
}

async function test() {
  //   console.log("test 시작: A를 기다림...");
  await a(); // 👈 이제 Promise를 기다리므로 2초 동안 멈춤!
  b();
}

test();

console.log("다음꺼 실행");

// === promise ===
console.log("========promise========");

const wow = (isTrue) => {
  return new Promise((resolve, reject) => {
    if (isTrue) {
      resolve("promise 실행댐");
    } else {
      reject("promise 실행 안댐X");
    }
  });
};

// wow(false)
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));

// // 비동기 테스트
// console.log("======비동기 테스트=======");

// function c() {
//   console.log("c");
// }

// function d() {
//   console.log("d");
// }

// async function test2() {
//   await c();
//   d();
// }

// test2();

// console.log("test2 다음");
