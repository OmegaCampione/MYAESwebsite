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
            var existingProductIndex = findProductIndex(cartItems, productName, productDescription, productPrice, productImage, selectedSize);

            if (existingProductIndex !== -1) {
                // Se o produto já está no carrinho, atualiza a quantidade
                cartItems[existingProductIndex].quantity = parseInt(cartItems[existingProductIndex].quantity, 10) + parseInt(quantity, 10);
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
    // Função para encontrar o índice de um produto no carrinho
    function findProductIndex(cartItems, productName, productDescription, productPrice, productImage, selectedSize) {
        for (var i = 0; i < cartItems.length; i++) {
            if (
                cartItems[i].name === productName &&
                cartItems[i].description === productDescription &&
                cartItems[i].price === productPrice &&
                cartItems[i].image === productImage &&
                cartItems[i].size === selectedSize
            ) {
                return i;
            }
        }
        return -1;
    }
});