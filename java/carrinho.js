document.addEventListener('DOMContentLoaded', function () {
    // Seletores / variáveis
    var cartTableBody = document.getElementById('cartItems');
    var subtotalElement = document.getElementById('textocarrinhoSubtotal');
    var totalElement = document.getElementById('textocarrinho5');
    var appliedDiscount = 0;
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Função para calcular o subtotal de um item
    function calculateSubtotal(item) {
        var quantity = parseInt(item.quantity);
        var priceWithoutCurrency = item.price.replace('R$', '').replace(',', '.');

        if (!isNaN(priceWithoutCurrency) && !isNaN(quantity)) {
            return parseFloat(priceWithoutCurrency) * quantity;
        } else {
            console.error("Valor de preço ou quantidade inválido:", item.price, quantity);
            return 0;
        }
    }

    // Função para adicionar evento de remoção
    function addRemoveEventListeners() {
        var removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var itemIndex = this.getAttribute('data-index');
                removeItemFromCart(itemIndex);
            });
        });
    }

    // Função para renderizar os itens no carrinho
    function renderCartItems() {
        cartTableBody.innerHTML = '';
        var subtotal = 0;

        cartItems.forEach(function (item, index) {
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
                <td><span class="remove-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></span></td>
            `;
            cartTableBody.appendChild(row);

            subtotal += item.subtotal;
        });

        // Calcula o desconto aplicado
        var discountAmount = subtotal * appliedDiscount;

        // Exibe o desconto na tabela como negativo
        document.getElementById('discountAmount').innerText = `- R$ ${Math.abs(discountAmount).toFixed(2)}`;

        // Aplica o desconto
        var totalWithDiscount = subtotal - discountAmount;
        totalElement.innerText = `R$ ${totalWithDiscount.toFixed(2)}`;

        subtotalElement.innerText = `R$ ${subtotal.toFixed(2)}`;

        // Adiciona eventos de remoção após re-renderizar os itens
        addRemoveEventListeners();
    }

    // Função para remover um item do carrinho
    function removeItemFromCart(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCartItems(); // Re-renderiza a tabela após a remoção
    }

    // Renderiza os itens inicialmente
    renderCartItems();

    // Cupom
    var appliedDiscount = 0;

    function applyDiscountAndShowWarning(discount, renderFunction, warningElement, message) {
        function clearWarning() {
            // Ajusta a opacidade para esconder o aviso
            warningElement.style.opacity = 0;

            // Limpa o aviso após a transição de saída
            setTimeout(function () {
                warningElement.innerText = '';
            }, 300);
        }

        if (discount > appliedDiscount) {
            appliedDiscount = discount;
            renderFunction();
            warningElement.innerText = message;

            // Ajusta a opacidade para exibir o aviso
            warningElement.style.opacity = 1;

            // Limpa o aviso após 3 segundos
            setTimeout(clearWarning, 3000);
        } else {
            warningElement.innerText = "Desconto menor ou igual ao atual.";

            // Ajusta a opacidade para exibir o aviso
            warningElement.style.opacity = 1;

            // Limpa o aviso após 3 segundos
            setTimeout(clearWarning, 3000);
        }
    }

    // Função para aplicar desconto usando um cupom
    function applyCoupon() {
        var couponInput = document.getElementById('placeholdercupom');
        var couponCode = couponInput.value;
        var couponWarning = document.getElementById('couponWarning');

        // Lógica para verificar e aplicar o desconto com base no código do cupom
        switch (couponCode) {
            case 'FAVIP':
                applyDiscountAndShowWarning(
                    0.05, // desconto para 'FAVIP'
                    renderCartItems,
                    couponWarning,
                    "Desconto aplicado: 5%"
                );
                break;
            case 'MY10':
                applyDiscountAndShowWarning(
                    0.10, // desconto para 'MY10'
                    renderCartItems,
                    couponWarning,
                    "Desconto aplicado: 10%"
                );
                break;
            case 'EXPOTECH':
                applyDiscountAndShowWarning(
                    0.20, // desconto para 'EXPOTECH'
                    renderCartItems,
                    couponWarning,
                    "Desconto aplicado: 20%"
                );
                break;
                case 'INUTIL':
                    applyDiscountAndShowWarning(
                        1.00, // easteregg
                        renderCartItems,
                        couponWarning,
                        "D̴̟̹̅͗è̶͍͘s̸̓͜c̷̻̯̋͝o̴̧͕̊n̵̞̽̐t̵̲̭͌o̶̫̓ ̴͔̍A̸͖͗p̶̨̳̃̈ḷ̶̎ĩ̷̛͚c̸̢̖̑̓a̴͒͜ď̵͎̞ò̸̫̥"
                    );
                    break;
            default:
                couponWarning.innerText = "Cupom inválido.";

                // Ajusta a opacidade para exibir o aviso
                couponWarning.style.opacity = 1;

                // Limpa o aviso após 3 segundos
                setTimeout(function () {
                    couponWarning.innerText = '';
                    couponWarning.style.opacity = 0;
                }, 3000);
                break;
        }

        // Limpa o campo de cupom após verificar os cupons
        couponInput.value = '';
    }

    // Add evento ao botão de aplicar cupom
    var applyCouponButton = document.getElementById('textobutcupom2');
    applyCouponButton.addEventListener('click', applyCoupon);
});
