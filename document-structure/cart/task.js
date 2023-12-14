const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');

products.forEach(function(product) {

    const productQuantityMinus = product.querySelector('.product__quantity-control_dec')
    const productQuantityPlus = product.querySelector('.product__quantity-control_inc')
    let productQuantity = 1
    const btn = product.querySelector('.product__add')
    
    productQuantityMinus.onclick = function() {
        productQuantity = product.querySelector('.product__quantity-value')
        if (Number(productQuantity.textContent) > 1) {
            productQuantity.textContent = Number(productQuantity.textContent) - 1
        } else if (Number(productQuantity.textContent) === 1) {
            productQuantity.textContent = 1
        };
    };

    productQuantityPlus.onclick = function() {
        productQuantity = product.querySelector('.product__quantity-value');
        productQuantity.textContent = Number(productQuantity.textContent) + 1
    };
    
    btn.onclick = function() {
        productQuantity = product.querySelector('.product__quantity-value');

        let carts = Array.from(cartProducts.querySelectorAll('.cart__product'))
        let cart = carts.find(item => item.dataset.id == product.dataset.id);
        if (cart) {
            let count = cart.querySelector('.cart__product-count')
            count.textContent = Number(count.textContent) + Number(productQuantity.textContent)
        } else {
            let src = product.querySelector('.product__image').getAttribute('src')
            let div = document.createElement('div');
            div.className = "cart__product";
            div.dataset.id = product.dataset.id
            div.innerHTML = `<img class="cart__product-image" src=${src}><div class="cart__product-count">${productQuantity.textContent}</div><div class="del__product">Удалить продукт</div>`;
            cartProducts.insertAdjacentElement("beforeend", div);
        };
    };
});

delCart = (e) => {
    e.target.parentNode.remove()
};

cartProducts.addEventListener('click', delCart)