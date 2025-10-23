// import { fileURLToPath } from "url";
// import path from "path";
// const __filename = fileURLToPath(import.meta.url);

// import { Json } from "sequelize/lib/utils";

// console.log(`************* ${path.basename(__filename)} running *************`);

// =====

// let obj = {
//   name: "hwang",
// };

// localStorage.setItem("name", obj.name);

// const name = localStorage.getItem("userName");

// console.log(name);

let user = {
  name: "hwanga",
  age: 30,
  email: "asd@asd.com",
};

// 데이터 넣기
localStorage.setItem("user", JSON.stringify(user));

// 데이터 꺼내기
const localStorageUser = localStorage.getItem("user");
const data = JSON.parse(localStorageUser);
console.log(data);
console.log(data.name);
console.log(data.age);

// 데이터 삭제
localStorage.removeItem("name");

const nums = [1, 2, 3, 4];

const a = nums.toString();
console.log("a: ", a);

const b = JSON.stringify(nums);
console.log("b: ", b);

const b_1 = JSON.parse(b);
console.log("b_1 :", b_1);

localStorage.setItem("nums", JSON.stringify(nums));

//세션스토리지

// sessionStorage.setItem("tempData", "hwang");

console.log(sessionStorage.getItem("tempData"));
