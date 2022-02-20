const clockForm = document.querySelector("#clock");
const clockHours = document.querySelector("#clock h2");
const clockAmPm = document.querySelector("#clock span");
const today = document.querySelector("#clock p");

function getTodayLabel() {
  var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
  var today = new Date().getDay();
  var todayLabel = week[today];
  return todayLabel;
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //"number"에는 padStart를 쓸 수 없음. string이 아니라서.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    const todayYear = date.getFullYear();
    const todayMonth = String(date.getMonth() + 1).padStart(2, "0");
    const todayDate = String(date.getDate()).padStart(2, "0");
    const week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');

    clockAmPm.innerText = `${ampm}`;
    clockHours.innerText = `${hours}:${minutes}:${seconds}`;
    today.innerText = `${todayYear}.${todayMonth}.${todayDate}.${week[date.getDay()]}`;
}

getClock();
setInterval(getClock, 1000);
