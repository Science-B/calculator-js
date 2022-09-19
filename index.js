let x = "";
let y = "";
let action = "";
let finish = false;
let haveDotX = false;
let haveDotY = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["÷", "x", "-", "+", "AC"];

const result = document.querySelector(".calc-result");

const buttons = document.querySelector(".calc");
buttons.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    const btn = event.target.textContent;
    if (digits.includes(btn)) {
      if (y === "" && action === "") {
        if (x.length <= 15) {
          if (btn !== ".") {
            x += btn;
          } else if (btn === "." && haveDotX === false) {
            x += btn;
            haveDotX = true;
          }
        }
        result.textContent = x;
      } else if (x !== "" && y !== "" && finish) {
        y = btn;
        finish = false;
        result.textContent = y;
      } else {
        if (y.length < 15) {
          if (btn !== ".") {
            y += btn;
          } else if (btn === "." && haveDotY === false) {
            y += btn;
            haveDotY = true;
          }
        }
        result.textContent = y;
      }
    }
    if (operations.includes(btn)) {
      if (btn === "AC") {
        clearAll();
        return;
      }
      action = btn;
      result.textContent = action;
    }

    if (btn === "=") {
      if (x === "" && y === "" && action === "") {
        result.textContent = 0;
        return;
      }
      if (y === "") {
        y = x;
      }
      haveDotX = false;
      haveDotY = false;
      switch (action) {
        case "+":
          x = +x + +y;
          break;
        case "-":
          x = x - y;
          break;
        case "x":
          x = x * y;
          break;
        case "÷":
          if (y === "0") {
            result.textContent = "Разделить на ноль нельзя";
            setTimeout(() => {
              clearAll();
            }, 1500);
            return;
          }
          x = x / y;
          break;
      }
      finish = true;
      result.textContent = x;
    }
  }
});
function clearAll() {
  x = "";
  y = "";
  action = "";
  finish = false;
  haveDotX = false;
  haveDotX = false;
  result.textContent = 0;
}
