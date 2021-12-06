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
var resultado = document.getElementById("resultado");
var chave = document.getElementById("chave");
var mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function (event) {
  event.preventDefault();
  var codigo = document.getElementById("codigo").value;
  if (codigo == "cesar" && radio[0].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    mensagem = codificar(valorMsg, valorChave);
  } else if (codigo == "cesar" && radio[1].checked) {
    var valorMsg = mensagem.value.split("");
    var valorChave = parseInt(chave.value);
    mensagem = decodificar(valorMsg, valorChave);
  } else if (codigo == "base64" && radio[0].checked) {
    alert("codificou");
  } else {
    alert("decodificou");
  }
});
