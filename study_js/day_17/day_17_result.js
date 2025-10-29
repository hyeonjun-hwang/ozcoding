console.log("==== day_17 과제 ====");

// ### 1️⃣ JSON 실습
// 1. 아래 객체를 JSON 문자열로 바꾸고,
//     다시 객체로 복원해 콘솔에 출력하세요.
const user = { name: "hwang", age: 30 };

const userString = JSON.stringify(user);
// console.log("userString: ", userString);

const userObj = JSON.parse(userString);
// console.log("userObj: ", userObj);

// ---

// ### 2️⃣ Local Storage 실습
// 1. `user` 객체를 문자열(JSON 형태)로 변환해 Local Storage에 저장하세요.
// 2. 저장된 데이터를 다시 가져와 객체로 변환하고,
//     콘솔에 `name` 값을 출력하세요.
localStorage.setItem("user", userString);
const getUser = JSON.parse(localStorage.getItem("user"));

// console.log(getUser.name);

// ---

// ### 3️⃣ Session Storage 실습
// 1. `"tempMessage"`라는 키로 `"Hello Session!"`을 저장하세요.
// 2. 콘솔에서 데이터를 불러와 확인하고,
//     탭을 닫은 후 다시 열었을 때 사라지는지 확인하세요.
sessionStorage.setItem("tempMessage", "Hello Session!");
const tempMessage = sessionStorage.getItem("tempMessage");
// console.log(tempMessage);

// ---

// ### 4️⃣ (선택) 응용 과제
// - 사용자 이름을 입력받아 Local Storage에 저장하고,
//     페이지를 새로고침해도 이름이 화면에 그대로 표시되도록 만들어보세요.

// 요소 가져오기
const btn = document.querySelector(".btn");
const displayName = document.querySelector(".displayName");

// (확인용)
console.log(document.querySelector(".input"));
console.log(displayName);

// localStorage이 있는 이름을 화면에 보여주기
displayName.innerText = localStorage.getItem("name");

// 버튼 클릭 이벤트 리스너
btn.addEventListener("click", () => {
  // 버튼 클릭시점에 input에 입력된 값 추출
  const userName = document.querySelector(".input").value;

  // 추출된 값을 localStorage에 저장
  localStorage.setItem("name", userName);

  // 화면에 입력된 값 넣기
  displayName.innerText = userName;
});
