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

football_field.addEventListener("click", whenClicked);


function whenClicked(event) {

  const field_client_x = event.clientX;
  const field_client_y = event.clientY;

  const ball_client_width = football.clientWidth;
  const ball_client_height = football.clientHeight;

  const field_offset_left = football_field.offsetLeft;
  const field_offset_top = football_field.offsetTop;

  const mouse_width = event.clientX - field_offset_left
  const mouse_height = event.clientY - field_offset_top

  console.log(mouse_width, mouse_height)

  // football.style.transform = `translate(${mouse_width - ball_client_width}px, ${mouse_height - ball_client_height}px)`

  const newX = Math.max(ball_client_width / 2, Math.min(mouse_width, field_client_x - ball_client_width / 2));
      const newY = Math.max(ball_client_height / 2, Math.min(mouse_height, field_client_y - ball_client_height / 2));

      football.style.transform = `translate(${newX - ball_client_width / 2}px, ${newY - ball_client_height / 2}px)`;
}








// ________________________________________________________________
