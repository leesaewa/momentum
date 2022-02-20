/*getCurrentPosition()
 위치를 받는 함수
 아규먼트가 2개 필요함.
 1. 모든 게 잘 됐을 떄 실행 될 함수.
 2. 에러가 발생했을 때 실행 될 함수.
*/

const API_KEY = "10b814d2c68b4280ad8991b985e33ea5";

function onGeoOk(position) {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //&units=metric 화씨를 섭씨로 바꿔줌
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("can't find you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);