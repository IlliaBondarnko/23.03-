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
    result.textContent = `Ви народилися у високосний рік! `;
  } else {
    result.textContent = `Ви народилися в не високосний рік!`;
  }
});


// // вгадай число


// const inputGuess = document.querySelector("input_guess");
// const guessButton = document.querySelector("guess_button");
// const resultGuess = document.querySelector("answer_guess");

// guessButton.addEventListener("click", checkGuess);

// function checkGuess() {
//   const userGuess = Number(inputGuess.value);
//   const randomNumber = Math.floor(Math.random() * 100) + 1;

//   if (userGuess === randomNumber) {
//     resultGuess.textContent = `Вітаю, ви вгадали число (${randomNumber})!`;
//   } else {
//     resultGuess.textContent = `Ви програли. Комп'ютер загадав число ${randomNumber}.`;
//   }
  
//   // Очистимо поле вводу після кожної спроби
//   inputGuess.value = "";
// }





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


//____________КАМІНЬ_НОЖИЦІ_ПАПІР______________________________________


const cut = document.querySelector("#cut");

const stone = document.querySelector("#stone");

const papar = document.querySelector("#papar");


const computerOutput = document.querySelector(".p-computer span");


const yourOutput = document.querySelector(".p-You span");


const winerOutput = document.querySelector(".p-winer");


const scoreText = document.querySelector(".p-rahunok");



let computerScore = 0;
let yourScore = 0;

cut.addEventListener("click", function() {
    playGame("Ножиці");
});

stone.addEventListener("click", function () {
    playGame("Камінь");
});

papar.addEventListener("click", function() {
    playGame("Папір");
});

function playGame(userChoice) {
    const options = ["Ножиці", "Камінь", "Папір"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    
    computerOutput.textContent = computerChoice;
    yourOutput.textContent = userChoice;


    
    if (userChoice === computerChoice) {
        winerOutput.textContent = "Нічия!";
    } else if (
        (userChoice === "Ножиці" && computerChoice === "Папір") ||
        (userChoice === "Камінь" && computerChoice === "Ножиці") ||
        (userChoice === "Папір" && computerChoice === "Камінь")
    ) {
        winerOutput.textContent = "Ви виграли!";
        yourScore++;
    } else {
        winerOutput.textContent = "Ви програли!";
        computerScore++;
    }

}
