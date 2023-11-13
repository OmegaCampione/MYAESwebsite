// Funções de responsividade (NavBar/SideBar)

const bar = document.getElementById('bar');
const fechar = document.getElementById('fechar');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if (fechar) {
  fechar.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

// Função de Filtros na pág Loja

function filterProducts() {
  var categoriaSelecionada = document.getElementById('filtroProdutos').value;
  var produtos = document.querySelectorAll('.pro');

  produtos.forEach(function(produto) {
      if (categoriaSelecionada === 'todos' || produto.classList.contains(categoriaSelecionada)) {
          produto.style.display = 'block';
      } else {
          produto.style.display = 'none';
      }
  });
}

   // Chamar a função para exibir todos os produtos inicialmente
   filterProducts();

// Botão de alterar imagens na página do produto

var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
  MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
  MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
  MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
  MainImg.src = smallimg[3].src;
}

//não aceitar qtd negativa

function validarNumero(input) {
  // Obtém o valor atual do campo de entrada
  var valor = input.value;

  // Converte o valor para um número
  var numero = parseFloat(valor);

  // Verifica se o número é negativo, zero ou nulo
  if (isNaN(numero) || numero < 0) {
    // Se for zero, negativo ou nulo, define o valor como 1
    input.value = 1;
}
  // Verifica se o número é muito alto
  if (numero > 20) {
   //Se for maior que 20, define o valor como 20
      input.value = 20;
  }

}


