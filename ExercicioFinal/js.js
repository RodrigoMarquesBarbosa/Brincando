import addNumberFunc from "./funcaoAddNum";
import makeResumeFunc from "./funcMakeResume";

console.log("blaaaaa");
// Botão para adicionar um numero a lista
let button = document.getElementById("button");
button.addEventListener("click", addNumberFunc());
// botão para gerar o resumo de dados sobre a lista
let buttonRes = document.getElementById("buttonRes");
buttonRes.addEventListener("click", makeResumeFunc());