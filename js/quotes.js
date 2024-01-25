const quotes =[
{   quote: "음식이 맛이 없는 이유는 소주가 1잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 2잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 3잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 4잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 5잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 6잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 7잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 8잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 9잔 부족하기 때문이다.",
    author: "김교수",
},
{   quote: "음식이 맛이 없는 이유는 소주가 좀 부족하기 때문이다.",
    author: "김교수",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML= randomQuote.quote;
author.innerHTML = randomQuote.author;