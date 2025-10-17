// --- 문제1 ---
// 다음 코드를 실행했을 때, 각 배열의 길이와 배열의 세 번째 요소([2])의 값을 예측하고 이유를 설명하세요.
let sparse1 = [1, , , 4];
let sparse2 = [, ,];

console.log("===== 문제 1 결과 예측 =====");

// 1. sparse1
console.log("1) sparse1의 길이: 4");
console.log("2) sparse1[2]의 값: undefined");
// 이유: 값에 1,4 그리고 empty 가 2개있으므로 length는 4이고
// index가 2인 값(세번째)은 empty 이니까 언디파인으로 나온다

// 2. sparse2
console.log("3) sparse2의 길이: 2");
console.log("4) sparse2[2]의 값: undefined");
// 이유: 값이 들어갈 공간은 3개 이지만 마지막 콤마(,)뒤가 비어있으면 세지 않으므로 2이고
// sparse2의 index 2(세번째)도 비어있으니 undefined가 나온다

// --- 문제2 ---
// Array() 생성자와 Array.of() 팩토리 메서드의 차이를 확인하는 문제입니다. 다음 코드의 실행 결과를 예측하고 그 이유를 설명하세요.
let result1 = new Array(3); // Array()에 숫자 인자 하나만 전달
let result2 = Array.of(3); // Array.of()에 숫자 인자 하나만 전달
let result3 = new Array("3"); // Array()에 문자열 인자 하나만 전달

console.log("===== 문제 2 결과 예측 =====");

console.log("1) result1: length가 3인 빈 배열 생성");
// 이유: new Array(a)에서 a에 숫자가 하나만 들어가는 경우는 배열의 길이를 지정한다

console.log("2) result2: 숫자 3이 값으로 들어있는 배열 생성");
// 이유: Array.of()는 new Array와 다르게 괄호 안에 숫자 하나만 넣어도 배열의 값이 된다

console.log("3) result3: 문자열 3이 담긴 배열 생성");
console.log(result3);
// 이유: "3"은 number가 아니라 string 이기 때문

// 문제3
// 다음 문자열을 `Array.from()` 메서드를 사용하여 변환하세요. 두 번째 인자로 매핑 함수를 전달하여, 새 배열의 각 요소가 **"문자열_인덱스"** 형태가 되도록 만드세요.
// **원본 문자열:** `"Array"`

let str = "Array";

// Array.from()을 사용하여 요구사항에 맞는 배열 arrResult를 생성하세요.
let arrResult = Array.from(str, (str, index) => {
  return `${str}_${index}`;
});

console.log("arrResult:", arrResult);
// 예측: [ 'A_0', 'r_1', 'r_2', 'a_3', 'y_4' ]
