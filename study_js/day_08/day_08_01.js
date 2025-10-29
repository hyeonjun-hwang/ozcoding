// for (initialize; test; increment) {
//     statement;
// }

// for 문
// for (let i = 0; i < 10; i++) {
//   console.log(`현재 count 값: ${i}`);
// }

// 4. for of 문 -> 배열(array)을 위한 for 문
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (i of data) {
//   console.log(`element : ${i}`);
//   //   sum = sum + i;
//   sum += i;
// }

// console.log(`sum : ${sum}`);

// 객체의 프로퍼티를 배열로 바꾸기
// Object.keys(객체) -> 객체의 키(key)를 배열로 반환
let obj = { x: 1, y: 2, z: 3 };

console.log(`Object.keys(obj) : ${Object.keys(obj)}`); // ['x', 'y', 'z']

let total = 0;

// for (e of Object.keys(obj)) {
//   console.log(obj[e]);
//   total += obj[e];
// }

// console.log(`total : ${total}`);

// Object.values(객체) -> 객체의 값(value)를 배열로 반환
for (e of Object.values(obj)) {
  // Object.values(obj) = [1,2,3]
  total += e;
}

console.log(total);

// 객체의 프로퍼티 key와 value 가 모두 배열 속 배열 만들고자 한다면 Object.entries() 사용

// for (let [key, value] of Object.entries(obj)) {
// }
let temp1 = Object.entries(obj);

console.log(temp1); // [['x', 1], ['y', 2], ['z', 3]]
console.log(temp1[0]);

// 5. for in -> 객체(object)를 위한 for 문으로 key값만 가져올 수 있음

// for (variable in object) {
//  statement;
// }

let obj2 = {
  user1: "kim",
  user2: "hwanga",
  user3: "park",
};

for (key in obj2) {
  console.log(`${key} : ${obj2[key]}`);
}
