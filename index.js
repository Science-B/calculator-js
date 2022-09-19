let x = "";
let y = "";
let action = "";
let finish = false;

const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["÷", "x", "-", "+", "AC"];

const result = document.querySelector(".calc-result");

const buttons = document.querySelector(".calc");
buttons.addEventListener("click", () => {
  if (event.target.classList.contains("btn")) {
    const btn = event.target.textContent;
    if (digits.includes(btn)) {
      if (y === "" && action === "") {
        // ведущий 0
        if (x.length < 15) {
          x += btn;
        }
        result.textContent = x;
      } else if (x !== "" && y !== "" && finish) {
        y = btn;
        finish = false;
        result.textContent = y;
      } else {
        if (y.length < 15) {
          y += btn;
        }
        result.textContent = y;
      }
    }
    if (operations.includes(btn)) {
      // ошибка
      if (btn === "AC") {
        clearAll();
        console.log("x,y,action:", x, y, action);
        return;
      }
      action = btn;
      result.textContent = action;
    }

    if (btn === "=") {
      if (y === "") {
        y = x;
      }
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
            result.textContent = "Ошибка";
            // ощибка
            setTimeout(() => {
              clearAll();
            }, 1000);

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
  let x = "";
  let y = "";
  let action = "";
  let finish = false;
  result.textContent = 0;
}
