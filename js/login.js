const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

/******form을 숨기고 h1을 보여줌******/
const greeting = document.querySelector("#greeting");

/******로그인 값을 제출 했을 때******/
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASSNAME);//로그인 값을 제출 했을 때
    const username = loginInput.value;
    
    localStorage.setItem(USERNAME_KEY, username);//제출된 value값을 저장하기
    paintGreetings();
}

/******새로고침하면 h1만 표시되게 하기******/

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);//local storage에 있는 username을 찾도록 함.
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);
//만약 유저 정보가 local storage에 없다면 local storage는 null값을 반환함.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);//local storage에 유저정보가 없다면 form의 submit을 기다림
} else {
    //show the greetings
    paintGreetings();
}
