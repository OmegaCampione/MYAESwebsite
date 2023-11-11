document.addEventListener('DOMContentLoaded', function () {
    var cartTableBody = document.getElementById('cartItems');
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    function renderCartItems() {
        // Limpa a tabela antes de renderizar os itens do carrinho
        cartTableBody.innerHTML = '';

        // Popula a tabela com os itens do carrinho
        cartItems.forEach(function (item, index) {
            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
                <td><img src="${item.image}" alt="${item.name}" style="max-width: 50px;"></td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td><span class="remove-btn" data-index="${index}">Remover</span></td>
            `;
            cartTableBody.appendChild(row);
        });

        // Adiciona ouvinte de evento aos botões de remoção
        var removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var itemIndex = this.getAttribute('data-index');
                removeItemFromCart(itemIndex);
                renderCartItems(); // Re-renderiza a tabela após a remoção
            });
        });
    }

    function removeItemFromCart(index) {
        // Remove o item do array e atualiza o localStorage
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    // Inicializa a renderização dos itens do carrinho
    renderCartItems();
});
