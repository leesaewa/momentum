# momentum

BTS Todo List made with VanillaJS

## <a href="https://leesaewa.github.io/momentum/">프로젝트 링크</a>

### Preview (update 2022.12)

#### PC

<img src="https://user-images.githubusercontent.com/97646713/209441059-366cad47-2cb8-44e3-8453-abe02ff6ac1c.jpg">

#### SP

<img src="https://user-images.githubusercontent.com/97646713/209439731-59be69e1-f254-47a3-ab1f-023c69659df8.JPG">

### nomad coder challenge

#### <a href="https://nomadcoders.co/community/thread/3057">우수 졸업생 졸업작품</a>

<img src="https://user-images.githubusercontent.com/97646713/209440051-6f86ef6b-1646-4bdb-8a91-04dbecd9ec09.jpg">

---

## Update log

#### 221219

- `css`=>`scss` 교체
- 모바일 레이아웃 변경

#### 221218

- `css`=>`scss` 교체
- `check button` 추가 -> 클릭하면 밑줄 그어짐

#### 220220

- 챌린지 끝. 졸업작품 제출 업로드

## 1. Tool

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/>

- only vanilla javascript
- scss, css, html

## 2. Function

- 모든 데이터는 자동으로 `localStorage`에 저장이 된다.

### User name

### to do list

- 추가, 삭제, todo 체크

## 3. Behind

### 프로젝트 기간

- Start : 2022.2.7
- End : 2022.2.21
- Update : 2022.12.18

## 4. 문제 및 해결

### :question: check 버튼의 정보를 `localStorage`에 저장하는 법?

#### 1) `check`버튼을 추가하기

- `todo`를 그려주는 열할을 하는 `paintToDo` 함수 안에 삭제 버튼을 추가했던 것처럼 체크 버튼도 추가할 것

```
//체크 버튼생성
const checkBtn = document.createElement("button");
checkBtn.className = "check-btn";
checkBtn.addEventListener("click", checkToDo);

//li 안에 .check-btn 클래스를 가진 button 출력
li.appendChild(checkBtn);
```

#### 2) `check` 버튼을 누르면 삭제와 마찬가지로 `localStorage`에 저장하기

- `delete`버튼을 클릭하면 `li(부모요소)`를 삭제하고 `localStorage`에도 저장을 하는 방법을 응용하기

1. `checkToDo` 함수를 만듦

```
function checkToDo() {
}
```

2. `check` 버튼을 누르면 해당 `todo li(부모 요소)`에 `check` 클래스 추가 제거되도록 함.

```
function checkToDo(event) {
  const checkList = event.target.parentElement;
  checkList.classList.toggle("check");
}
```

이렇게 작성하면 클릭할 때마다 li에 `check` 클래스가 추가 됐다가 삭제 됨.
그러나... `localStorage`에 저장을 안하고 그냥 보여질 때마다 체크 버튼을 누를거면 이 상태로도 상관없는데, `localStorage`에 저장하려면 `toggle`보다 `add`, `remove`가 더 적절하다고 생각함.

3. todo input 값을 저장하는 `newTodoObj(object)` 안에 `check: 0`를 넣어서 `1`이면 `check` 클래스를 `추가`하고 `0`이면 `check`를 `삭제`하도록 하기로 함.

```
function handleToDoSubmit(event) {
  .
  .
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    check: 0,  // 추가
  };
  .
  .
}
```

`localStorage`에 저장하기 위해 `getItem` 설정을 해서 `TODOS_KEY` 안에 있는 객체 중에 클릭한 `li의 id` 값을 찾아서 해당 값이 `1`인지 `0`인지 확인할 수 있도록 `if문`으로 조건을 나눔.

```
function checkToDo(event) {
  const checkList = event.target.parentElement;
  const check = JSON.parse(localStorage.getItem(TODOS_KEY));
  const checkId = check.find(({ id }) => id == parseInt(checkList.id));

  // check 버튼을 클릭했을 때 check:1(클릭되어 있다면) .check 클래스 삭제하고 check:0으로 변경
  if (checkId.check === 1) {
    checkList.classList.remove("check");
    checkId.check = 0;
  } else {
    checkList.classList.add("check");
    checkId.check = 1;
  }

  // 위에서 확인한 새로운 값을 저장
  toDos = check;
  saveToDos();
}
```

여기까지 끝냈을 때, 버튼을 클릭하고 새로고침 할 때마다 `check`가 `localStorage`의 `todos` 안에 정상적으로 등록되는 것을 확인했으나, 분명 `check:1`인데 `li`에 클래스 명이 들어가 있지 않고, css가 표시가 안 되는 걸 확인함.
무엇이 문제인가 고민했으나, todo 입력 값을 출력해주는 `paintToDo` 함수 안에 `checkToDo`처럼 `check:0`을 체크하는 게 없음. 설마해서 함수 안에 조건문으로 실험해봄.

```
function paintToDo(newTodo) {
  .
  .
  .
  if (newTodo.check === 1) {
    li.classList.add("check");
  }
}
```

`check:1`일 때(체크 버튼을 눌렀을 때) `li.classList.add("check");` 클래스 명을 추가하도록 했더니, `localStorage`에 저장된 대로 실행이 되었음.

## 5. 추가하고 싶은 기능

- todo 수정
- 달력을 넣어서 `day`를 클릭하면 해당 `day`에 등록할 todo를 저장하고 보여줌
- 작성한 todo 진행도
- 해시태그 넣기
- todo 작성시, 등록한 시간과 날짜가 출력
- `username` 삭제 및 수정
