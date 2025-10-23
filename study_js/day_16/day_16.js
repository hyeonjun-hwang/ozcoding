// import { fileURLToPath } from "url";
// import path from "path";
// const __filename = fileURLToPath(import.meta.url);

// console.log(`************* ${path.basename(__filename)} running *************`);

// =====

function a() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("A");
      resolve();
    }, 1000);
  });
}

async function test() {
  const promise = await a();
  console.log("B");
}

// test();

// promise
console.log("======promise======");

// let isTrue = false;
let num1 = 1;

const promise2 = (isTrue) => {
  return new Promise((resolve, reject) => {
    if (isTrue) {
      setTimeout(() => {
        resolve("promise 성공해따리");
      }, 2000);
    } else {
      reject("리젝 됬다리");
    }
  });
};

// const promise = new Promiçse((resolve, reject) => {
//   if (isTrue) {
//     setTimeout(() => {
//       resolve("promise 성공해따리");
//     }, 2000);
//   } else {
//     reject("리젝 됬다리");
//   }
// });

// promise.then(console.log).catch(console.log);

promise2(true).then(console.log).catch(console.log);

console.log("promise 다음 함수");

// console.log(
//   promise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((result) => {
//       console.log("reject 됬다리");
//     })
// );

// console.log(promise);
// console.log(typeof promise);
