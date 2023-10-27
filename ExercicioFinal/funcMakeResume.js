// chama a lista
import allNumbers from "./allNumberVar"
// função para gerar o resumo de dados sobre a lista
export default function makeResume () {
  // confere se a lista possui valores
  if (allNumbers.length != 0) {
    // busca a <div> que sera usada para listar o resumo
    let resumo = document.getElementById("resumo");
    resumo.innerHTML = "";
    // cria o elemento onde será adicionado o resumo
    let dado = document.createElement("p");
    // coloca os numeros em ondem crescente
    allNumbers.sort(function (a, b) {
      return a - b;
    });
    let lastIndex = Number(allNumbers.length) - 1;
    // soma todos os itens da lista
    let somaLista = 0;
    for (let index = 0; index < allNumbers.length; index++) {
      somaLista = somaLista + allNumbers[index];
      console.log(somaLista);
    }
    // coloca as informações do resumo no html
    dado.innerHTML = `Ao todo, temos ${
      allNumbers.length
    } número(s) cadastrados <br><br> 
      O maior valor informado foi ${allNumbers[lastIndex]}. <br><br>
      O menor valor informado foi ${allNumbers[0]} <br><br>
      Somando todos os valores, temos ${somaLista} <br><br>
      A média dos valores digitados é ${somaLista / allNumbers.length}
      `;
    resumo.appendChild(dado);
  } else {
    window.alert("Por favor, coloque um numero válido!");
  }
};