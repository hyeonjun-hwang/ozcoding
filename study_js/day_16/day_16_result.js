// 문제1
// ### 목표:
// 콜백(callback) 함수를 사용하여, A → B → C 순서대로 출력되도록 구현하세요.

// ### 요구사항:
// - `a`, `b`, `c` 함수는 각각 `setTimeout`으로 1초 후에 자신을 출력합니다.
// - 순서를 `콜백 함수`로 보장하세요.

// function a(callback) {
//   setTimeout(() => {
//     console.log("A");
//     callback();
//   }, 1000);
// }

// function b(callback) {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 1000);
// }

// function c() {
//   setTimeout(() => {
//     console.log("C");
//   }, 1000);
// }

// // a(b(c()));

// a(() => {
//   b(() => {
//     c();
//   });
// });

// 실행 예시: A -> B -> C -> 완료!

// 문제2
// ### 목표:
// Promise를 사용해서 A → B → C → D 순서대로 출력되도록 구현하세요.

// ### 요구사항:
// - `a`, `b`, `c`, `d` 함수는 각각 1초 후에 실행됩니다.
// - `Promise`를 리턴하도록 만들어야 합니다.
// - `.then()` 체인을 사용해 순서를 보장하세요.

// function a() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("A");
//       resolve();
//     }, 1000);
//   });
// }

// function b() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("B");
//       resolve();
//     }, 1000);
//   });
// }

// function c() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("C");
//       resolve();
//     }, 1000);
//   });
// }

// function d() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("D");
//       resolve();
//     }, 1000);
//   });
// }

// function test() {
//   a().then(b).then(c).then(d);
//   // A -> B -> C -> D -> 완료!
// }
// test();

//과재3
// ### 목표:
// async/await를 사용하여 순차적으로 비동기 함수를 실행하고, 예외가 발생했을 때 적절히 처리하세요.

// ### 요구사항:
// - 함수 `step(name, fail = false)`는 이름을 출력한 뒤 1초 후, `fail`이 true일 경우 `reject`합니다.
// - `try/catch/finally`를 활용하여 에러 발생 여부와 상관없이 "Done"을 출력하세요.

function step(name, fail = false) {
  return new Promise((resolve, reject) => {
    console.log(`이름은 ${name} 입니다`);
    setTimeout(() => {
      if (fail) {
        reject();
      } else {
        resolve();
      }
    }, 1000);
  });
}

const runStep = async () => {
  try {
    await step("hwang1");
    await step("hwang2", true);
    await step("hwang3");
  } catch {
    console.log("리젝 됬다리");
  } finally {
    console.log("Done!");
  }
};

runStep();
