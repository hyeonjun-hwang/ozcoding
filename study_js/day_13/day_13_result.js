// 과제1
console.log("======== 과제1 ========");
console.log(getResult(5)); // Q. 예상되는 결과는? (호출 위치 확인)

// const getResult = function (x) {
//   return x * 2;
// };

function getResult(x) {
  return x * 2;
}

// 과제2
console.log("======== 과제2 ========");
// 주어진 사용자 정보 객체를 처리하는 함수 `formatUserInfo`를 완성하세요.
// **요구 사항:**
// - 함수는 하나의 인자(객체)를 받으며, 이 객체에는 `name`과 `age` 속성이 포함되어 있습니다.
// - *구조 분해 할당(Destructuring Assignment)을 사용하여 매개변수에서 바로 `name`과 `age`를 추출해야 합니다.
// - `age`가 전달되지 않았을 경우 기본값(Default Value)으로 `20`을 사용해야 합니다.
// - `name`이 없거나 빈 문자열일 경우, 방어 코드(`if`)를 사용하여 `"이름을 알 수 없습니다."`라는 문자열을 **즉시 반환**하며 함수를 종료해야 합니다.
// - 모든 조건이 충족되면, `"[이름]님의 나이는 [나이]세 입니다."` 형식의 문자열을 반환합니다.

const user = {
  name: "hwanga",
  age: 35,
};

// const user = {
//   name: "asd",
// };

const { name, age } = user;

const formatUserInfo = ({ name, age = 20 }) => {
  if (!name) {
    console.log("이름을 알 수 없습니다");
    return;
  }
  console.log(`${name}님의 나이는 ${age}세 입니다`);
};

formatUserInfo(user);

// 과제3
console.log("======== 과제3 ========");
// 첫 번째 인자를 시작 값으로 사용하고, 나머지 모든 인자들을 더하여 최종 합계를 구하는 함수 `sumAll`을 완성하세요.
// **요구 사항:**
// - 함수는 첫 번째 숫자 `startNum`을 받습니다.
// - 그 외의 모든 인자들은 나머지 매개변수(`...`)를 사용하여 하나의 배열로 묶어야 합니다.
// - 묶인 배열과 `startNum`을 합쳐 최종 합계를 반환해야 합니다. (제공된 `.reduce()`를 활용하여 구현)

let numbers = [1, 2, 3, 4];

const sumAll = (startNum, ...rest) =>
  rest.reduce((acc, cur) => acc + cur, startNum);

console.log(sumAll(...numbers));

// 과제4
console.log("======== 과제4 ========");
// 비동기 함수 `asyncOperation`이 성공적으로 완료되었을 때, 그 결과를 콜백 함수를 통해 출력하도록 코드를 완성하세요.
// **요구 사항:**
// - `asyncOperation` 함수는 두 개의 인자: `data` (처리할 데이터)와 `callback` (처리 후 실행할 함수)을 받습니다.
// - 함수 내부에서는 `setTimeout`을 사용하여 2초 후에 비동기 작업이 완료된 것처럼 시뮬레이션합니다.
// - 작업이 완료되면, 성공 메시지와 함께 처리된 데이터(예: `"데이터 처리 완료: [data]"`)를 **`callback` 함수에 인자로 전달**하여 호출해야 합니다.

const asyncOperation = (data, callback) => {
  console.log("데이터 처리중...");
  setTimeout(() => {
    const resultMessage = `데이터 처리 완료: [${data}]`;
    callback(resultMessage);
  }, 2000);
};

const printMessage = (message) => {
  console.log(message);
};

asyncOperation(123, printMessage);

// 과제5
console.log("======== 과제5 ========");
// 숫자 n을 인자로 받아, n부터 1까지 순서대로 숫자를 출력한 후 "발사!"를 출력하는 `countDown` 함수를 재귀 함수로 완성하세요.
// **요구 사항:**
// - 함수 내부에서 자기 자신을 호출하는 **재귀 호출**을 사용합니다.
// - 종료 조건(Base Case)은 숫자가 0이 될 때이며, 0이 되면 `"발사!"`를 출력하고 함수를 종료합니다.
// - 숫자가 0보다 클 경우, 현재 숫자를 출력하고 **`n - 1`*을 인자로 다시 `countDown` 함수를 호출합니다.

function countDown(n) {
  if (n === 0) {
    console.log(0);
    console.log("발사!");
    return;
  } else if (n < 0) {
    console.log("양수를 입력하세요");
    return;
  }
  console.log(n);
  countDown(n - 1);
}

countDown(5);
