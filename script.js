let body = document.querySelector("body");
let result = document.querySelector("#result");

let dark_mode_btn = document.querySelector(".dark-mode-btn");
let clear = document.querySelector("#clear");
let history = document.querySelector("#history");
let equalTo = document.querySelector("#equalTo");
let delete_single_num = document.querySelector("#delete-single-num");

let Normal_btn = document.querySelectorAll("#normal-btn");

let initial_value = "";

Normal_btn.forEach((e) => {
  e.addEventListener("click", function () {
    let text = this.innerHTML;
    initial_value += text;
    result.innerHTML = initial_value;
  });
});

//    equal to button action
equalTo.addEventListener("click", () => {
  if (result.innerHTML != "") {
    history.innerHTML = result.innerHTML;
    result.innerHTML = eval(result.innerHTML);
    initial_value = eval(result.innerHTML);
  } else {
    alert("Please enter any number");
  }
});

//    Dark mode
let dark_mode_statue = false;
dark_mode_btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode-active");
  if (dark_mode_statue == false) {
    this.innerHTML = '<i class="fa fa-sun"><i>';
    dark_mode_statue = true;
  } else {
    this.innerHTML = '<i class="fa fa-moon"><i>';
    dark_mode_statue = false;
  }
});

//    clear all data
clear.addEventListener("click", () => {
  result.innerHTML = "";
  initial_value = "";
});

//      Delete single number
delete_single_num.addEventListener("click", () => {
  result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
}););

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((a, c) => a + c);

console.log(sum);

function input(first, second, third = 234) {
  return first + second + third;
}
console.log(input(1, 2));
