//exibe div do incremento de acordo com a codificação escolhida

var divChave = document.querySelector(".divChave");
var selecaoCod = document.addEventListener("click", function () {
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar") {
    divChave.style.display = "block";
  } else {
    divChave.style.display = "none";
  }
});

// botão chamando funções codificar e decodificar de acordo com a codificação escolhida

var radio = document.querySelectorAll(".radio");
var botao = document.getElementById("botaoResultado");
var mensagem = document.getElementById("mensagem");
var chave = document.getElementById("chave");
var resultado = document.getElementById("resultado");

botao.addEventListener("click", function (event) {
  event.preventDefault();
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar" && radio[0].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = codificarCesar(valorMsg, valorChave);
  } else if (codigo == "cesar" && radio[1].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    resultado.value = decodificarCesar(valorMsg, valorChave);
  } else if (codigo == "base64" && radio[0].checked) {
    var valorMsg = mensagem.value;
    resultado.value = btoa(valorMsg);
  } else {
    var valorMsg = mensagem.value;
    resultado.value = atob(valorMsg);
  }
});

//função codificar Cifra de Cesar

function codificarCesar(msg, chave) {
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        return String.fromCharCode(((entrada - 65 + chave) % 26) + 65);
      } else if (entrada >= 97 && entrada <= 122) {
        return String.fromCharCode(((entrada - 97 + chave) % 26) + 97);
      } else {
        return str;
      }
    })
    .join("");
}

//função decodificar Cifra de Cesar

function decodificarCesar(msg, chave) {
  return msg
    .map((str) => {
      var entrada = str.charCodeAt();
      if (entrada >= 65 && entrada <= 90) {
        if (entrada - 65 - chave < 0) {
          return String.fromCharCode(((entrada - 65 - chave + 26) % 26) + 65);
        } else {
          return String.fromCharCode(((entrada - 65 - chave) % 26) + 65);
        }
      } else if (entrada >= 97 && entrada <= 122) {
        if (entrada - 97 - chave < 0) {
          return String.fromCharCode(((entrada - 97 - chave + 26) % 26) + 97);
        } else {
          return String.fromCharCode(((entrada - 97 - chave) % 26) + 97);
        }
      } else {
        return str;
      }
    })
    .join("");
}

//eventListener para alterar testo do botão de acordo com o selecionado
radio[0].addEventListener("click", function () {
  if (radio[0].checked) {
    botao.innerHTML = `
      C<span class="corvermelha">0</span>dif<span class="corvermelha">1</span>car
      `;
  }
});

radio[1].addEventListener("click", function () {
  if (radio[1].checked) {
    botao.innerHTML = `
      Dec<span class="corvermelha">0</span>dif<span class="corvermelha">1</span>car
      `;
  }
});
