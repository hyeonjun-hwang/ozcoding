// 과제1
const MY_NAME = "황현준";
const MY_BIRTH_DAY = 1990;
let age = 2025 - MY_BIRTH_DAY;

const myProfile = {
  name: MY_NAME,
  birthYear: MY_BIRTH_DAY,
  age: age,
};

console.log(myProfile);

// 과제2
let favoriteFoods = ["회", "칼국수", "고기"];
let favoriteThings = {
  hobby: "웨이트 트레이닝",
  foods: favoriteFoods,
  isStudent: false,
};

console.log(`안녕하세요!
제 취미는 ${favoriteThings.hobby}이고 좋아하는 음식은 ${favoriteThings.foods} 입니다
현재 학생 상태 : ${favoriteThings.isStudent}
`);
