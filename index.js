let x = "";
let y = "";
let action = "";
let finish = false;
let haveDotX = false;
let haveDotY = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["÷", "x", "-", "+"];

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
            console.log("length", x.length);
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
            haveDotX = true;
          }
        }
        result.textContent = y;
      }
    }

    if (operations.includes(btn)) {
      action = btn;
      result.textContent = action;
    }

    if (btn === "AC") {
      clearAll();
      return;
    }

    if (btn === "+/-") {
      if (x !== "" && y === "") {
        x = -x;
        result.textContent = x;
      }
      if (x !== "" && y !== "") {
        y = -y;
        result.textContent = y;
      }
      if (finish === true) {
        x = -x;
        result.textContent = x;
      }
    }

    if (btn === "С") {
      if (!finish) {
        if (x !== "" && action === "" && y === "") {
          if (result.textContent.length > 1) {
            x = result.textContent.substring(0, result.textContent.length - 1);
            result.textContent = x;
            return;
          } else {
            clearAll();
          }
        }
        if (x !== "" && action !== "" && y === "") {
          action = "";
          result.textContent = x;
        }
        if (x !== "" && action !== "" && y !== "") {
          if (result.textContent.length > 1) {
            y = result.textContent.substring(0, result.textContent.length - 1);
            result.textContent = y;
            return;
          } else {
            y = "";
            result.textContent = action;
          }
        }
      }
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
          finish = false;
          break;
        case "-":
          x = x - y;
          finish = false;
          break;
        case "x":
          x = x * y;
          finish = false;
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
          finish = false;
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
