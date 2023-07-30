// Como fazer o sorteio de número aleatórios
let btn = document.querySelector("button");
let numeroSecreto = parseInt(Math.random() * 11);
let elementoResultado = document.getElementById("resultado");
console.log(numeroSecreto);

function Chutar() {
  let chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    // As barras verticais funcionam como || = ou
    elementoResultado.innerHTML =
      "Este dado inserido está incorreto, Você deve digitar um número de 0 a 10";
  } else if (chute != numeroSecreto && numeroSecreto < chute) {
    elementoResultado.innerHTML = "O número secreto é menor que " + chute;
  } else if (chute != numeroSecreto && numeroSecreto > chute) {
    elementoResultado.innerHTML = "O número secreto é maior que " + chute;
  } else {
    elementoResultado.innerHTML = "Você errou, tente novamente!";
  }

  // Verificação de Clicks ao Botão.
  let click = 1;
  click += 1;
  console.log("O click: " + click).value;
}
