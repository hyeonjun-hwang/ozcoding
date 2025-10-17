// 문제3 : 1부터 10까지 숫자 출력 (for 문)
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// 문제4 : 배열 요소 출력 (for-of 문)
let foods = ["떡볶이", "김밥", "치킨"];

for (const food of foods) {
  console.log(food);
}

// 문제5 : 객체 속성 탐색 (for-in 문)
let user = {
  name: "홍길동",
  age: 28,
  job: "개발자",
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
