const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // JSON.stringify : json 객체를 string 객체로 변환.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//버튼 누르면 삭제되는 이벤트
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  // filter() : 특정 조건에 부합하는 배열의 '모든 값'을 배열 형태로 리턴
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
// 체크 버튼을 누르면 체크되는 이벤트
function checkToDo(event) {
  const checkList = event.target.parentElement;
  // JSON.parse : string 객체를 json 객체로 변환
  const check = JSON.parse(localStorage.getItem(TODOS_KEY));
  // find() : 배열에서 특정 값을 찾는 조건을 callback함수를 통해 전달하여, 조건에 맞는 값 중 '첫번째 값'을 리턴
  const checkId = check.find(({ id }) => id == parseInt(checkList.id));

  if (checkId.check === 1) {
    checkList.classList.remove("check");
    checkId.check = 0;
  } else {
    checkList.classList.add("check");
    checkId.check = 1;
  }
  toDos = check;
  saveToDos();
}

//todo를 그리는 역할
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  //삭제 버튼생성
  const button = document.createElement("button");
  button.innerText = "close";
  button.className = "delete-btn";
  button.addEventListener("click", deleteToDo);

  //체크 버튼생성
  const checkBtn = document.createElement("button");
  checkBtn.className = "check-btn";
  checkBtn.addEventListener("click", checkToDo);

  li.appendChild(checkBtn);
  li.appendChild(span); //li 안에 span 넣기
  li.appendChild(button);
  toDoList.appendChild(li); //ul 안에 li넣기

  if (newTodo.check === 1) {
    li.classList.add("check");
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    check: 0,
  };

  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos(); //값 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
