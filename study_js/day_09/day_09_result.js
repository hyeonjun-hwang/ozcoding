let user = {
  이름: "Alice",
  나이: 25,
  이메일: "alice@example.com",
  주소: {
    도시: "Seoul",
    우편번호: "12345",
  },
};

// console.log(user);

// Object.assign
let userCopy = Object.assign({}, user);

userCopy.이름 = "Bob";

// console.log(user);
// console.log(userCopy);

// 스프레드 연산자
let update = { 이름: "Bob" };
let userCopy2 = { ...user, ...update };

// console.log(user);
// console.log(userCopy2);

// 문자열로 전환 후 다시 객체로 전환
let str = JSON.stringify(user);
let par = JSON.parse(str);

console.log(str);
console.log(par);
