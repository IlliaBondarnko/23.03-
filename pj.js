function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}





/// ___________________В_ЯКИЙ_РІК_НАРОДИВСЯ____________________________



const yearInput = document.getElementById('year_input');
const checkButton = document.getElementById('year_button');
const result = document.getElementById('year_answer');

checkButton.addEventListener('click', () => {
  const year = parseInt(yearInput.value);

  if (year.toString().length !== 4) {
    result.textContent = '';
    return;
  }

  const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));

  if (isLeapYear) {
    result.textContent = "Ви народилися у високосний рік!";
  } else {
    result.textContent = "Ви народилися в невисокосний рік!";
  }
});


// ________calc_time__________________________________________________

const time_calc_input = document.getElementById("time_calc_input_id")

const time_calc_button = document.getElementById("time_calc_button_id")

time_calc_button.addEventListener("click", timeCalcOnClic)

const answear_input = document.getElementById("final_time")

function timeCalcOnClic() {
  const input_value = Number(time_calc_input.value)
  const final_functional_result = getIntoHours(input_value)
  answear_input.textContent = final_functional_result
}


function getIntoHours(min) {
  const result = Math.floor(min / 60)
  const final_result = min - (60*result)
  return `${result}h and ${final_result}min`
}

// console.log(getIntoHours(70))

// ________________________________________________________________
// ___FOOTBALL_____________________________________________________

const football_field = document.getElementById("football_field");
const football = document.getElementById("football");

football_field.addEventListener("click", moveBall);

function moveBall(event) {
  const field_rect = football_field.getBoundingClientRect();

  const field_width = field_rect.width;
  const field_height = field_rect.height;

  const ball_radius = football.clientWidth / 2;

  const field_offset_left = field_rect.left;
  const field_offset_top = field_rect.top;

  const mouse_x = event.clientX - field_offset_left;
  const mouse_y = event.clientY - field_offset_top;

  const new_x = Math.max(ball_radius, Math.min(mouse_x - ball_radius, field_width - ball_radius));
  const new_y = Math.max(ball_radius, Math.min(mouse_y - ball_radius, field_height - ball_radius));

  football.style.transform = `translate(${new_x}px, ${new_y}px)`;
}

// ________________________________________________________________

// __________CALCULATOR____________________________________________

const plus = document.getElementById("plus_op");
const minus = document.getElementById("minus_op");
const multiply = document.getElementById("multiply_op");
const split = document.getElementById("split_op");
const equals = document.getElementById("equals_butoon");

const firstn = document.getElementById("first_num");
const secondn = document.getElementById("second_num");
const answer = document.getElementById("calc_answer");


plus.addEventListener("click", plusOption);
minus.addEventListener("click", minusOption);
multiply.addEventListener("click", multiplyOption);
split.addEventListener("click", splitOption);
equals.addEventListener("click", calaAnswer);


function plusOption(){
  const plus_answ = Number(firstn.value) + Number(secondn.value)
  const res = calaAnswer(plus_answ)
  answer.textContent = res

}

function minusOption(){
  const plus_answ = Number(firstn.value) - Number(secondn.value)
  const res = calaAnswer(plus_answ)
  answer.textContent = res

}

function multiplyOption(){
  const plus_answ = Number(firstn.value) * Number(secondn.value)
  const res = calaAnswer(plus_answ)
  answer.textContent = res

}

function splitOption(){
  const plus_answ = Number(firstn.value) / Number(secondn.value)
  const res = calaAnswer(plus_answ)
  answer.textContent = res

}

function calaAnswer(res){
  // answer.textContent = res
  return res
}


// ________________________________________________________________
// _______________3_NUMS___________________________________________


const frst = document.getElementById("1_of_3");
const scnd = document.getElementById("2_of_3");
const thrd = document.getElementById("3_of_3");
const answ = document.getElementById("par")

frst.addEventListener("input", findMaxNumber)
scnd.addEventListener("input", findMaxNumber);
thrd.addEventListener("input", findMaxNumber);


// Функція для пошуку найбільшого числа
function findMaxNumber() {
  const num1 = Number(frst.value);
  const num2 = Number(scnd.value);
  const num3 = Number(thrd.value);


  let maxNumber = num1;
  if (num2 > maxNumber) {
    maxNumber = num2;
  }
  if (num3 > maxNumber) {
    maxNumber = num3;
  }

  answ.textContent = "Найбільше, число, яке Ви написали - " + maxNumber;
}

// _______________СЛАЙДЕР__________________________

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// ______SCIENTISTS___________________________

const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

const btn1 = document.getElementById("button1")
btn1.addEventListener("click", nineteenth)

const div = document.querySelector(".photos_gallery");


function nineteenth() {
  const res = scientists.filter((item) => item.born > 1800 && item.born < 1901)
  const render = renderHTML(res)
  div.insertAdjacentHTML('beforeend', render)
}

function renderHTML(arr) {
  div.innerHTML = '';
  return arr.map((item) => `<div class="sc_img"><p>${item.name} ${item.surname}</p><p>${item.born}-${item.dead}</p></div>`).join(" ")
}

const btn2 = document.getElementById("button2")
btn2.addEventListener("click", alphabet)


function alphabet() {
  const res = scientists.map((item) => item).sort((a, b) => a.name.localeCompare(b.name))
  const render = renderHTML(res)
  div.insertAdjacentHTML('beforeend', render)
}

const btn3 = document.getElementById("button3")
btn3.addEventListener("click", byYears)

function byYears(){
  const res = scientists.map((item) => item).sort((a, b) => (b.dead - b.born)-(a.dead-a.born))
  const render = renderHTML(res)
  div.insertAdjacentHTML('beforeend', render)}

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", lastbornPerson);

function lastbornPerson() {
  const LastBorn = scientists.sort((a, b) => b.born - a.born)
  const sintens = LastBorn[
    0
  ];

  const render = renderHTML([sintens]);
    div.insertAdjacentHTML('beforeend', render)
}

const btn8 = document.getElementById("button8")
btn8.addEventListener("click", lessMore)

function lessMore() {
  let array = [];
  const res = scientists.map((item) => item).sort((a, b) => (b.dead - b.born) - (a.dead - a.born))
  array.push(res[res.length - 1], res[0])
  const render = renderHTML(array)
  div.insertAdjacentHTML('beforeend', render)
}

const btn5 = document.getElementById("button5")
btn5.addEventListener("click", findEnstain)

function findEnstain() {
  const Albert = scientists.find(Sciensits => Sciensits.surname == "Einstein")
  const render = renderAlbert(Albert)
  div.insertAdjacentHTML('beforeend', render)
}

function renderAlbert(object) {
  div.innerHTML = '';
return `<div class="sc_img"><p><p>${object.born}</p></div>`
  
}

function findC() {
  const cList = scientists.filter((item) => item.surname.startsWith("C"))
  const render = renderHTML(cList)
  div.insertAdjacentHTML('beforeend', render)
}

const btn6 = document.getElementById("button6")
btn6.addEventListener("click", findC)

function findC() {
  const cList = scientists.filter((item) => item.surname.startsWith("C"))
  const render = renderHTML(cList)
  div.insertAdjacentHTML('beforeend', render)
}

const btn7 = document.getElementById("button7")
btn7.addEventListener("click", delA)

function delA() {
  const delList = scientists.filter((item) => !item.name.startsWith("A"))
  const render = renderHTML(delList)
  div.insertAdjacentHTML('beforeend', render)
}

const btn9 = document.getElementById("button9")
btn9.addEventListener("click", similarFirstLetter)

function similarFirstLetter() {
  const sim = scientists.filter((item) => item.name[0] === item.surname[0])
  const render = renderHTML(sim)
  div.insertAdjacentHTML('beforeend', render)
}

let modal = document.getElementById("myModal");
let modal2 = document.getElementById("modal2");
let openModalBtn = document.getElementById("openModalBtn");
let closeBtns = document.querySelectorAll(".close");
let submitBtn = document.getElementById("submitName");


const loginUserName = document.querySelector("#userNameHeader");


openModalBtn.onclick = function() {
modal.style.display = "block";
}

closeBtns.forEach(function(btn) {
btn.onclick = function() {
modal.style.display = "none";
modal2.style.display = "none";
}
});

submitBtn.onclick = function() {
let userName = document.getElementById("userNameInput").value;
if (userName.trim() !== "") {
modal.style.display = "none";
modal2.style.display = "block";
console.log(userName);
loginUserName.textContent = userName;
} else {
alert("Будь ласка, введіть ваше ім'я.");
}
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
if (event.target == modal2) {
modal2.style.display = "none";
}
}

// THEME_MODE_________________________________________

// const dayButton = document.getElementById("day");
// const nightButton = document.getElementById("night");
const checkbox = document.getElementById("switch-shadow");
// const game = document.querySelector(".game");

checkbox.addEventListener("change", onChange);
// dayButton.addEventListener("click", dayClick);
// nightButton.addEventListener("click", nightClick);

function dayClick(e) {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  // document.header.style.backgroundColor = "white";
  // document.header.style.color = "black"
  // document.footer.style.backgroundColor = "white";
  // document.footer.style.color = "black";
  document.getElementById("container").style.backgroundColor = "white";
  document.getElementById("container").style.color = "black";
  document.getElementById("header").style.backgroundColor = "white";
  document.getElementById("header").style.color = "black";
  document.getElementById("footer").style.backgroundColor = "white";
  document.getElementById("footer").style.color = "white";
  document.getElementById("nav").style.backgroundColor = "white";
  document.getElementById("nav").style.color = "black";
  document.body.style.transition = "background-color 350ms linear";
  document.body.style.backgroundImage = "url('./imgs/bg.png')"

}


function nightClick(e) {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  // document.header.style.backgroundColor = "black";
  // document.header.style.color = "white";
  // document.footer.style.backgroundColor = "black";
  // document.footer.style.color = "white";
  document.getElementById("container").style.backgroundColor = "#424242";
  document.getElementById("container").style.color = "white";
  document.getElementById("header").style.backgroundColor = "#424242";
  document.getElementById("header").style.color = "white";
  document.getElementById("footer").style.backgroundColor = "#424242";
  document.getElementById("footer").style.color = "white";
  document.getElementById("nav").style.backgroundColor = "#424242";
  // document.getElementById("nav").style.color = "black";
  document.body.style.transition = "background-color 350ms linear";
  document.body.style.backgroundImage = "url('./imgs/bgblack.jpg')"
}

function onChange(e) {
  if (checkbox.checked) {
    nightClick(e);
  } else {
    dayClick(e);
  }
}


// камінь ножиці папір


// const cut = document.querySelector("#cut");

// const stone = document.querySelector("#stone");

// const papar = document.querySelector("#papar");


// const computerOutput = document.querySelector(".p-computer span");


// const yourOutput = document.querySelector(".p-You span");


// const winerOutput = document.querySelector(".p-winer");


// const scoreText = document.querySelector(".p-rahunok");




// let computerScore = 0;
// let yourScore = 0;

// cut.addEventListener("click", function() {
//     playGame("Ножиці");
// });

// stone.addEventListener("click", function () {
//     playGame("Камінь");
// });

// papar.addEventListener("click", function() {
//     playGame("Папір");
// });

// function playGame(userChoice) {
//     const options = ["Ножиці", "Камінь", "Папір"];
//     const computerChoice = options[Math.floor(Math.random() * options.length)];
    
//     computerOutput.textContent = computerChoice;
//     yourOutput.textContent = userChoice;
//   scoreText.textContent = yourScore;

    
//     if (userChoice === computerChoice) {
//         winerOutput.textContent = "Нічия!";
//     } else if (
//         (userChoice === "Ножиці" && computerChoice === "Папір") ||
//         (userChoice === "Камінь" && computerChoice === "Ножиці") ||
//         (userChoice === "Папір" && computerChoice === "Камінь")
//     ) {
//         winerOutput.textContent = "Ви виграли!";
//         yourScore++;
//     } else {
//         winerOutput.textContent = "Ви програли!";
//         computerScore++;
//     }

// }

// https://github.com/stasqwertyQ/project-3sem/blob/main/js.js