// 문제1
// 다음 배열 data에 대해 두 가지 연산을 수행합니다. 두 코드의 실행 결과와, 특히 forEach()가 새 배열을 반환하지 않고 원본 배열을 수정하는 경우를 설명하세요.
console.log("=========== 문제 1 ===========");

let data = [10, 20, 30];
let mapResult = [];
let forEachResult = [];

// A. map() 사용
mapResult = data.map((item) => item * 2);

// B. forEach()를 사용하여 '새 배열'을 생성하려 시도
data.forEach((item) => {
  forEachResult.push(item * 2);
});

console.log("===== 문제 1 결과 예측 =====");

console.log("1) mapResult 예측: [20, 40, 60]");
console.log("mapResult 실제: ", mapResult);

console.log("2) forEachResult 예측: [20, 40, 60]");
console.log("forEachResult 실제: ", forEachResult);

// 3) map()과 forEach()의 주요 차이점은 무엇인가요? (반환값, 원본 배열 수정 여부)

// 답변:
// map()은 배열을 새로 만들어서 반환하고 forEach()는 그냥 반복을 돌기만 한다
// 그래서 map()은 원본을 건드리지 않지만 forEach()는 원본을 수정할 수도 있다

// 문제2
// 다음 배열에서 조건(x > 10)을 만족하는 요소를 찾을 때, filter()와 find()가 반환하는 값의 차이를 설명하세요.
console.log("=========== 문제 2 ===========");

let nums = [5, 12, 8, 15, 20];

let filtered = nums.filter((x) => x > 10);
let found = nums.find((x) => x > 10);

console.log("===== 문제 2 결과 예측 =====");

console.log("1) filtered: [12, 15, 20]");
// 이유: filter는 10보다 큰 값들만 추려내서 반환하기 때문

console.log("2) found: 12");
// 이유: find는 왼쪽부터 10이 넘는 값 찾다가 찾으면 그 값을 반환해서

// 3) find()가 filter()와 달리 '순회를 멈추는 시점'은 언제인가요?
// 답변: index 1번 지점이다 왜냐하면 처음 10을 넘는 숫자 12가 index 1번 지점에 있기 때문

// 문제3
// 다음 성긴 배열을 순회할 때, forEach(), every(), some()의 동작을 비교하고 결과를 예측하세요.
console.log("=========== 문제 3 ===========");

let sparseArray = [1, , 3]; // 인덱스 1은 빈 슬롯 (empty slot)

let forEachCount = 0;
sparseArray.forEach((item) => {
  forEachCount++;
});

console.log("sparseArray[1] :", sparseArray[1]);
// console.log(sparseArray);
// console.log(forEachCount);

let everyResult = sparseArray.every((item) => item !== undefined);
// every()는 모든 요소가 undefined가 아닐 때만 true를 반환?

let someResult = sparseArray.some((item) => item === undefined);
// some()은 undefined인 요소가 하나라도 있으면 true를 반환?

console.log("===== 문제 3 결과 예측 =====");

console.log("1) forEachCount: 2");
// 이유: forEach() 속 콜백함수 인자에 1, empty, 3이 들어가고 두번째가 비어있어서 ++가 2번 발생하기 때문에 0+1+1=2

console.log("2) everyResult: true");
// 이유: 비어있는 인덱스는 순회하지 않고 건너 뛰기 때문에 1,3만 봐서 undefined는 하나도 없으니 모두 참이되서 true 반환

console.log("3) someResult: false");
// 이유: 마찬가지로 비어있는 곳은 건너뛰기 때문에 undefined는 하나도 없으니 모두 거짓이되서 false 반환
