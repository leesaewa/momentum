const quotes = [
    {
        quote: "Light it up like dynamite",
        kor: "다이너마이트처럼 도시를 밝히자",
        author: "- Dynamite"
    },
    {
        quote: "We don't need permission to dance",
        kor: "우리가 춤추는데 허락은 필요없어.",
        author: "- Permission to dance"
    },
    {
        quote: "Even the scars that were formed from my mistakes are my very own constellations.",
        kor: "내 실수로 생긴 흉터까지 다 내 별자린데",
        author: "- Answer: Love Myself"
    },
    {
        quote: "Did I fall so that I could be hit by those countless stars?",
        kor: "저 수많은 별을 맞기 위해 난 떨어졌던가",
        author: "- Answer: Love Myself"
    },
    {
        quote: "I'm the only target to the thousand of those radiant arrows.",
        kor: "저 수천 개 찬란한 화살의 과녁은 나 하나",
        author: "- Answer: Love Myself"
    },
    {
        quote: "Even just loving myself, I needed someone else's approval.",
        kor: "그저 날 사랑하는 일조차 누구의 허락이 필요했던 거야.",
        author: "- Answer: Love Myself"
    },
    {
        quote: "A star embroidered with love that lights me up",
        kor: "나를 밝혀주는 건 너란 사람으로 수 놓아진 별",
        author: "- Answer: Love Myself"
    },
    {
        quote: "You will always shine bright like now, we will follow you and embroider this long night.",
        kor: "너는 언제까지나 지금처럼 밝게만 빛나줘. 우리는 너를 따라 이 긴 밤을 수놓을 거야",
        author: "- My Universe(with. Coldplay)"
    },
    {
        quote: "Stopped for now but don't hide in the shadow once again daylight will glow",
        kor: "멈춰있지만, 어둠에 숨지 마. 빛은 또 떠오르니깐",
        author: "- Life Goes On"
    },
    {
        quote: "Like an echo in the forest The day will come back around As if nothing happend.",
        kor: "숲의 메아리처럼 하루가 돌아오겠지 아무 일도 없단 듯이",
        author: "- Life Goes On"
    },
];

const quote = document.querySelector("#quotes span:first-child");
const kor = document.querySelector("#quotes .kor");
const author = document.querySelector("#quotes span:last-child");

//array불러오기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
kor.innerText = todaysQuote.kor;
author.innerText = todaysQuote.author;
