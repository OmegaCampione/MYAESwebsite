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

//carrinho shenanigans

document.addEventListener('DOMContentLoaded', function () {
  // Seletor do botão "Adicionar ao carrinho"
  var addToCartBtn = document.getElementById('addToCartBtn');

  // Adiciona um ouvinte de evento de clique ao botão
  addToCartBtn.addEventListener('click', function () {
      // Obtém os dados do produto
      var productName = document.getElementById('textoprod1').innerText;
      var productDescription = document.getElementById('textoprod2').innerText;
      var productPrice = document.getElementById('textoloja3').innerText;
      var productImage = document.getElementById('MainImg').getAttribute('src');
      var selectedSize = document.querySelector('select').value;
      var quantity = document.querySelector('input[type="number"]').value;

      // Verifica se o localStorage é suportado pelo navegador
      if (typeof (Storage) !== "undefined") {
          // Recupera os dados existentes do carrinho do localStorage, se houver
          var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

          // Verifica se o produto já está no carrinho
          var existingProductIndex = findProductIndex(cartItems, productName, selectedSize);

          if (existingProductIndex !== -1) {
              // Se o produto já está no carrinho, atualiza a quantidade
              cartItems[existingProductIndex].quantity = parseInt(cartItems[existingProductIndex].quantity) + parseInt(quantity);
          } else {
              // Se o produto não está no carrinho, adiciona normalmente
              var productData = {
                  name: productName,
                  description: productDescription,
                  price: productPrice,
                  image: productImage,
                  size: selectedSize,
                  quantity: quantity
              };
              cartItems.push(productData);
          }

          // Atualiza o carrinho no localStorage
          localStorage.setItem('cart', JSON.stringify(cartItems));

          // Alerta o usuário que o produto foi adicionado ao carrinho
          alert('Produto adicionado ao carrinho');
      } else {
          // Caso o localStorage não seja suportado
          alert('Desculpe, seu navegador não suporta o recurso de carrinho de compras.');
      }
  });

  // Função para encontrar o índice de um produto no carrinho
  function findProductIndex(cartItems, productName, selectedSize) {
      for (var i = 0; i < cartItems.length; i++) {
          if (cartItems[i].name === productName && cartItems[i].size === selectedSize) {
              return i;
          }
      }
      return -1;
  }
});


//carrinho load

