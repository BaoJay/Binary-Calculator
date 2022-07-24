const res = document.querySelector("#res");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");
const btnSum = document.querySelector("#btnSum");
const btnSub = document.querySelector("#btnSub");
const btnMul = document.querySelector("#btnMul");
const btnDiv = document.querySelector("#btnDiv");

let operand1 = 0;
let operand2 = 0;

btn0.addEventListener("click", () => {
  res.append("0");
  console.log("0 clicked");
});

btn1.addEventListener("click", () => {
  res.append("1");
  console.log("1 clicked");
});

btnClr.addEventListener("click", () => {
  res.innerText = "";
  console.log("Clear!");
});

btnSum.addEventListener("click", () => {
  res.append("+");
  console.log("Plus");
});

btnSub.addEventListener("click", () => {
  res.append("-");
  console.log("Minus");
});

btnMul.addEventListener("click", () => {
  res.append("*");
  console.log("Multiply");
});

btnDiv.addEventListener("click", () => {
  res.append("/");
  console.log("Divide");
});

btnEql.addEventListener("click", () => {
  console.log(res.innerText);
  console.log(parseInt(res.innerText));

  // Lấy tất cả kết quả trên màn hình Calculator
  const result = res.innerText;

  //access the operands
  const regexp = /\d+/g;
  // Lấy tất cả các số hạng (operand) vào 1 array
  const operands = result.match(regexp);
  //   const operandsDecimal = operands.map((operand) => {
  //     const operandNum = +operand;
  //     return operandNum.toString(2);
  //   });
  console.log(operands);

  // Convert Binary to Decimal
  const operandsDecimal = operands.map((operand) => {
    let sum = 0;
    for (let i = 0; i < operand.length; i++) {
      sum += 2 ** i * +operand[operand.length - 1 - i];
    }
    return sum;
  });

  console.log(operandsDecimal);

  // Access the operator
  const regexpOperator = /[+|-|*|/]/;
  const operator = result.match(regexpOperator);
  console.log(operator);
  let decimalResult = 0;
  switch (operator[0]) {
    case "+":
      decimalResult = operandsDecimal[0] + operandsDecimal[1];
      break;
    case "-":
      decimalResult = operandsDecimal[0] - operandsDecimal[1];
      break;
    case "*":
      decimalResult = operandsDecimal[0] * operandsDecimal[1];
      break;
    case "/":
      decimalResult = operandsDecimal[0] / operandsDecimal[1];
      break;
    default:
      throw new Error("Invalid operator!");
  }
  console.log(decimalResult);
  console.log(decimalResult.toString(2));
  res.innerText = decimalResult.toString(2);
});
