const quotes =[
{   quote: "백엔드 아직 늦지 않았다.",
    author: "JunHyung",
},
{   quote: "C,C++ 말고 Rust를 쓰자.",
    author: "Joe Biden",
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerHTML= randomQuote.quote;
author.innerHTML = randomQuote.author;
