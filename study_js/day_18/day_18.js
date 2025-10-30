// - 기능 설계 -
// ✅ 1. 할 일 추가하기 (+ 버튼 클릭 시)
// ✅ 2. 할 일 조회하기
// ✅ 3. 할 일 갯수 체크
// ✅ 4. 체크박스 활성화 시, 할 일 완료 처리하기 (글자색 변경 및 가운데 줄 처리)
// ✅ 5. 체크박스 비활성화 시, 다시 해야할 일로 변경(원상 복구)
// ✅ 6. 할 일 삭제하기
// ✅ 7. 만약, 할 일이 하나도 추가되지 않으면 "문구" => UX
// => "조회 가능한 할 일이 없습니다.", "할 일을 추가하세요!" 등 => 최소 높이를 정해주면 좋을 것 같다?
// ✅ 8. 스크롤 처리
// ✅ 9. 공백으로 작성 후 할 일 추가할 시, 경고 문구 띄우기
// ✅ 10. #뒤에 있는 숫자가 우선순위를 의미한다라고 가정하고, 순차적으로 보여준다.

// 요소 추출
const inputField = document.querySelector(".input-group input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".task-list");
const todoItem = document.querySelector(".task-item");

// 로컬 스토리지에 있는 할 일 리스트
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// 로컬 스토리지 저장
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 버튼 클릭시 로컬에 데이터 추가
addBtn.addEventListener("click", () => {
  // 인풋 값 추출
  const inputValue = inputField.value;

  if (!inputValue) {
    alert("할 일이 입력되지 않았습니다");
    return;
  }
  // todos 배열에 입력한 값 추가
  todos.push({
    check: false,
    inputValue: inputValue,
  });

  // todos 배열을 로컬 스토리지에 저장
  saveTodos();

  // 등록 알럿 및 인풋 초기화
  alert("할 일이 등록되었습니다");
  inputField.value = "";

  renderTodos();
});

// 할 일 목록 화면에 뿌려주는 함수
function renderTodos() {
  todoList.innerHTML = "";

  // todos에 아무것도 없을때
  if (todos.length === 0) {
    const emptyMessage = document.createElement("p");

    emptyMessage.classList.add("task-list__empty");
    emptyMessage.innerText = `할 일을 추가해주세요~!`;

    todoList.append(emptyMessage);

    return;
  }

  // inputValue #n 추출용 함수
  function getSortNum(str) {
    const match = str.match(/#(\d+)/);
    if (!match) {
      return 0;
    } else {
      return parseInt(match[1], 10);
    }
  }

  // 배열을 #n 순서에 맞게 재배열 해서 반환 (내림차순)
  todos.sort((a, b) => {
    const numA = getSortNum(a.inputValue);
    const numB = getSortNum(b.inputValue);
    return numB - numA;
  });

  // 재배열된 todos 받아 순회하면서 화면 그리기
  todos.forEach((todo, index) => {
    // todo list 요소 생성 및 클래스 할당
    const todoItem = document.createElement("div");
    todoItem.classList.add("task-item");
    todoItem.setAttribute("data-index", index);

    // todo list 자식 요소 및 속성 할당
    const todoText = document.createElement("span"); // 텍스트 들어가는 영역
    todoText.innerText = todo.inputValue;

    const deletBtn = document.createElement("i"); // 삭제 버튼 아이콘
    deletBtn.classList.add("fas", "fa-times", "delete-btn");

    const checkBox = document.createElement("i"); // 체크박스

    if (!todo.check) {
      checkBox.classList.add("far", "fa-square", "checkbox");
      todoText.classList.remove("text-deco");
    } else {
      checkBox.classList.add("fas", "fa-check-square", "checkbox");
      todoText.classList.add("text-deco");
    }

    todoItem.append(checkBox, todoText, deletBtn); // todo list 자식에 요소 생성

    // todo list 삭제 이벤트 로직
    deletBtn.addEventListener("click", () => {
      const isConfirm = confirm("할 일을 삭제하시겠습니까?");
      if (isConfirm) {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
      }
    });

    // todo 컨테이너 자식에 todo list 생성
    todoList.append(todoItem);
  });

  renderFooter();
}

// 푸터 그리는 함수
function renderFooter() {
  // 푸터 컨테이너 추출 및 초기화
  const footerContainer = document.querySelector(".footer-info");
  footerContainer.innerHTML = "";

  // 체크 안된 데이터 추출 (남은 todo 개수 계산용)
  const notCheckedTodos = todos.filter((todo) => !todo.check);

  // 남은 todo 개수
  const displayRemainTodos = document.createElement("p");
  displayRemainTodos.innerText = `Your remaining todos: ${notCheckedTodos.length}`;
  displayRemainTodos.classList.add("remaining");

  // 인용문
  const createQuote = document.createElement("p");
  createQuote.innerText = `"Doing what you love is the cornerstone of having abundance in your life." - Wayne Dyer`;
  createQuote.classList.add("quote");

  // 푸터에 개수랑 인용 추가
  footerContainer.append(displayRemainTodos, createQuote);
}

renderTodos();

// 체크박스 클릭 이벤트 로직
todoList.addEventListener("click", (event) => {
  const isCheckBox = event.target.classList.contains("checkbox");
  if (isCheckBox) {
    const index = event.target.parentElement.getAttribute("data-index"); // todo-item 요소의 data-index 값 추출
    const todo = todos[index]; // todos에서 target 데이터 추출
    const todosText = event.target.parentElement.querySelector("span"); // 텍스트 추출

    // 체크 여부에 따라 이벤트 토글
    event.target.classList.toggle("fas");
    event.target.classList.toggle("far");
    event.target.classList.toggle("fa-square");
    event.target.classList.toggle("fa-check-square");
    todosText.classList.toggle("text-deco");

    todo.check = !todo.check; // check 여부 변경
    saveTodos(); // 변경 데이터 저장
    renderFooter(); // 푸터 랜더링
  }
});
