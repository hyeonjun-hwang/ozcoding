let dayOfWeek = prompt("요일을 입력해주세요", "");

switch (dayOfWeek) {
  case "monday":
    console.log("한주의 시작이에요!");
    break;
  case "firday":
    console.log("불금불금!");
    break;
  case "saturday":
    console.log("주말이 왔어요");
    break;
  case "sunday":
    console.log("푹 쉬세요");
    break;
  default:
    console.log("평일 이에요");
    break;
}
