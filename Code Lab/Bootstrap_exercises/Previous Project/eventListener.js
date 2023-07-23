let btn = document.querySelector("#buttonCal");
let result = document.querySelector("#result");

let num1Err = document.querySelector("#num1Err");
let num2Err = document.querySelector("#num2Err");
let operatorErr = document.querySelector("#operatorErr");

let numOneStatus,
  numTwoStatus,
  operatorStatus = false;

num1Err.style.display = "none";
num2Err.style.display = "none";
operatorErr.style.display = "none";

btn.addEventListener("click", () => {
  let num1 = parseInt(document.querySelector("#num1").value);
  let num2 = parseInt(document.querySelector("#num2").value);
  let operator = document.querySelector("#operatorSelect").value;

  let finalResult;

  checkValidation(num1, num2, operator);

  if (!numOneStatus && !numTwoStatus && !operatorStatus) {
    switch (operator) {
      case "add":
        finalResult = num1 + num2;
        break;
      case "minus":
        finalResult = num1 - num2;
        break;
      case "multiply":
        finalResult = num1 * num2;
        break;
      case "division":
        finalResult = num1 / num2;
        break;

      default:
        finalResult = "Operation error";
        break;
    }

    result.textContent = finalResult;
  }
});

checkValidation = (num1, num2, operator) => {
  if (num1 == "" || num1 == null || num1 == undefined || isNaN(num1)) {
    num1Err.style.display = "block";
    numOneStatus = true;
  } else {
    num1Err.style.display = "none";
    numOneStatus = false;
  }

  if (num2 == "" || num2 == null || num2 == undefined || isNaN(num2)) {
    num2Err.style.display = "block";
    numTwoStatus = true;
  } else {
    num2Err.style.display = "none";
    numTwoStatus = false;
  }

  if (operator == "") {
    operatorErr.style.display = "block";
    operatorStatus = true;
  } else {
    operatorErr.style.display = "none";
    operatorStatus = false;
  }
};
