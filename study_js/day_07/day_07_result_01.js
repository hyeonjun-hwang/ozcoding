let score = prompt("점수를 입력해주세요", "");

if (score >= 90) {
  console.log(`${score}점 : A학점 입니다`);
} else if (score >= 80) {
  console.log(`${score}점 : B학점 입니다`);
} else if (score >= 70) {
  console.log(`${score}점 : C학점 입니다`);
} else if (score >= 60) {
  console.log(`${score}점 : D학점 입니다`);
} else {
  console.log(`${score}점 : F학점 입니다`);
}
