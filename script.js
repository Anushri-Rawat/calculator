
let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let output = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let check = e.target.innerText;
    if (check == "C") {
      output = "";
      currentInput.innerHTML = output;
      answerScreen.innerHTML = "0";
      currentInput.className = "currentInput";
      answerScreen.className = "answerScreen";
    } else if (check == ".") {
      output += check;
      currentInput.innerHTML = output;
    } else if (check == "x") {
      check = "*";
      output += check;
      currentInput.innerHTML = output;
    } else if (check == "+/-") {
      check = "-";
      output += check;
      currentInput.innerHTML = output;
    } else if (check == "=") {
      output += check;
      currentInput.className = "answerScreen";
      answerScreen.className = "currentInput";
      answerScreen.style.color = "white";
      output = "";
      setTimeout(function () {
        currentInput.className = "currentInput";
        answerScreen.className = "answerScreen";
        currentInput.innerHTML = "";
        answerScreen.innerHTML=0;
        answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
      }, 1000);
    } else if (e.target.id == "erase") {
      output = output.slice(0, -1);
      currentInput.innerHTML = output;
      answerScreen.innerHTML = eval(output);
    } else {
      output += check;
      currentInput.innerHTML = output;
      answerScreen.innerHTML = eval(output);
    }
  });
});
