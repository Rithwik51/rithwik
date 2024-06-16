document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const products = [
        { id: 1, name: 'Mens cotton shirt', price: 20.00 },
        { id: 2, name: 'Netplay Jeans', price: 35.00 },
        { id: 3, name: 'T-shirt for men', price: 20.00 },
        { id: 4, name: 'Shoes', price: 20.00 }
    ];

    const productElements = document.querySelectorAll('.product');
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutForm = document.getElementById('checkout-form');

    productElements.forEach((element, index) => {
        element.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(products[index]);
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        checkoutForm.style.display = 'block';
    });

    checkoutForm.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Order placed successfully!');
        cart.length = 0;
        updateCart();
        checkoutForm.style.display = 'none';
    });

    function addToCart(product) {
        const cartItem = cart.find(item => item.product.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }
        updateCart();
    }

    function updateCart() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.product.name} - $${item.product.price.toFixed(2)} x ${item.quantity}`;
            cartItemsElement.appendChild(li);
            total += item.product.price * item.quantity;
        });

        totalElement.textContent = total.toFixed(2);
    }
});
