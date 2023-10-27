// chama a lista
const allNumbers = require("./allNumberVar")
// função que adiciona os números a lista
export default function addNumber () {
  let num = document.getElementById("txtn");
  let listNumber = document.getElementById("listNumber");
  if (num.value.length != 0 && num.value <= 100 && num.value > 0) {
    allNumbers.push(Number(num.value));
    let validNum = num.value;
    let row = document.createElement("option");
    row.text = `Valor ${validNum} adicionado.`;
    listNumber.appendChild(row);
    num.value = "";
    num.focus();
    resumo.innerHTML = "";
    console.log(allNumbers);
  } else {
    window.alert("Por favor, coloque um numero válido!");
  }
};