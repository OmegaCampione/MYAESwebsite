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

//carrinho shenanigans:

document.getElementById('adicionarAoCarrinhoBtn').addEventListener('click', function () {
  // Obter os dados do produto
  var produto = {
      imagem: document.getElementById('MainImg').src,
      nome: document.getElementById('textoprod1').textContent,
      descricao: document.getElementById('textoprod2').textContent,
      preco: document.getElementById('textoloja3').textContent,
      tamanho: document.getElementById('tamanhoSelect').value,
      quantidade: document.getElementById('quantidadeInput').value
  };

  // Obter o carrinho atual do localStorage
  var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Adicionar o produto ao carrinho
  carrinho.push(produto);

  // Salvar o carrinho de volta no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  alert('Produto adicionado ao carrinho!');
});