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

      // Cria um objeto contendo os dados do produto
      var productData = {
          name: productName,
          description: productDescription,
          price: productPrice,
          image: productImage,
          size: selectedSize,
          quantity: quantity
      };

      // Verifica se o localStorage é suportado pelo navegador
      if (typeof(Storage) !== "undefined") {
          // Recupera os dados existentes do carrinho do localStorage, se houver
          var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

          // Adiciona os dados do produto ao carrinho
          cartItems.push(productData);

          // Atualiza o carrinho no localStorage
          localStorage.setItem('cart', JSON.stringify(cartItems));

          // Alerta o usuário que o produto foi adicionado ao carrinho (você pode modificar isso conforme necessário)
          alert('Produto adicionado ao carrinho');

      } else {
          // Caso o localStorage não seja suportado
          alert('Desculpe, seu navegador não suporta o recurso de carrinho de compras.');
      }
  });
});

//carrinho load

