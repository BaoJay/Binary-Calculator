const res = document.querySelector("#res");
const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btnClr = document.querySelector("#btnClr");
const btnEql = document.querySelector("#btnEql");
const btnSum = document.querySelector("#btnSum");
const btnSub = document.querySelector("#btnSub");
const btnMul = document.querySelector("#btnMul");
const btnDiv = document.querySelector("#btnDiv");

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
