document.addEventListener('DOMContentLoaded', function () {
    var cartTableBody = document.getElementById('cartItems');
    var subtotalElement = document.getElementById('textocarrinhoSubtotal');
    var totalElement = document.getElementById('textocarrinho5');
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    function calculateSubtotal(item) {
        var quantity = parseInt(item.quantity);
        var priceWithoutCurrency = item.price.replace('R$', '').replace(',', '.');
    
        if (!isNaN(priceWithoutCurrency) && !isNaN(quantity)) {
            return parseFloat(priceWithoutCurrency) * quantity;
        } else {
            console.error("Valor de preço ou quantidade inválido:", item.price, quantity);
            return 0; // Retorna 0 se houver um problema com os valores
        }
    }

    function renderCartItems() {
        cartTableBody.innerHTML = '';

        var subtotal = 0;

        cartItems.forEach(function (item, index) {
            // Calcula o subtotal para o item
            item.subtotal = calculateSubtotal(item);

            var row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
                <td><img src="${item.image}" alt="${item.name}" style="max-width: 50px;"></td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td>R$ ${item.subtotal.toFixed(2)}</td>
                <td><span class="remove-btn" data-index="${index}">Remover</span></td>
            `;
            cartTableBody.appendChild(row);

            subtotal += item.subtotal;
        });

        subtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;
        totalElement.innerText = `R$ ${subtotal.toFixed(2)}`; // Atualiza o total da tabela de carrinho
    }

    function removeItemFromCart(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems(); // Re-renderiza a tabela após a remoção
    }

    renderCartItems();

    // Adiciona ouvinte de evento aos botões de remoção
    var removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var itemIndex = this.getAttribute('data-index');
            removeItemFromCart(itemIndex);
        });
    });
});
