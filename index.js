const fineButton = document.querySelector(".second-btn");
const happyImage = document.querySelector('#first-column img');
const happyButton = document.querySelector(".first-btn");
const notGoodButton = document.querySelector('.third-btn');
const randomNumberGen = document.getElementById("lucky-number");
// const mascotImage =document.getElementById("#cartoon img")

//SECTION - buttons
happyButton.addEventListener('click',()=>{
    happyImage.src = "images/happy.jpg"
})

fineButton.addEventListener('click',()=>{
    happyImage.src = "images/fine.jpg";
})

notGoodButton.addEventListener('click',()=>{
    happyImage.src = "images/sad.jpg"
})

//SECTION - lucky number
randomNum = Math.floor(Math.random()*500)

randomNumberGen.textContent = `Your lucky number today is ${randomNum}`;

//!SECTION -random mascot
const mascot = document.getElementById("cartoon");
let mascotsList = [
    {name:"Quandale Dingle", img: "https://media.pinatafarm.com/protected/328C475E-F05A-44AB-8608-52799BB902D5/d3ebdeaf-d897-4d15-889f-e75185bdb7dc-1661635592122.webp"},
    {name: "Snoopy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQEBnpE_-54q2QNeMM7VP8Dm6bU-sViS-Kg&usqp=CAU"},
    {name: "BallingCat43", img: "https://i.kym-cdn.com/entries/icons/original/000/046/153/ballincat43.jpeg"}
];


let randomIndex = Math.floor(Math.random()*mascotsList.length)

let randomMascot = mascotsList[randomIndex];
mascot.children[0].textContent = randomMascot.name;
mascot.children[1].src = randomMascot.img;
mascot.children[1].classList.add('cartoon');


//!SECTION - motivational quote

const quote = document.getElementById('quote');
const motivationalQuotes = [
    "Procrastinate now, don't put it off.",
    "I didn't fail the test. I just found 100 ways to do it wrong.",
    "The road to success is dotted with many tempting parking spaces.",
    "If at first you don't succeed, then skydiving definitely isn't for you.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "If I were two-faced, would I be wearing this one?",
    "People say nothing is impossible, but I do nothing every day.",
    "If you think you are too small to make a difference, try sleeping with a mosquito.",
    "The only time to set the bar low is for limbo.",
    "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    "I can resist everything except temptation.",
    "I'm writing a book. I've got the page numbers done.",
    "Behind every great man, there is a surprised woman.",
    "If you can't convince them, confuse them.",
    "The best way to appreciate your job is to imagine yourself without one.",
];

let randomIndexForQuotes = Math.floor(Math.random()*motivationalQuotes.length);

let randomQuote = motivationalQuotes[randomIndexForQuotes];
quote.textContent = `"${randomQuote}"`;

mascot.addEventListener('click', ()=>{
    let randomIndexForQuotes = Math.floor(Math.random()*motivationalQuotes.length);
        quote.textContent = "";
        let randomQuote = motivationalQuotes[randomIndexForQuotes];
quote.textContent = `"${randomQuote}"`;
    
})