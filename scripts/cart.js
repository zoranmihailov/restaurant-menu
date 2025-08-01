const cart = {};

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        Object.assign(cart, JSON.parse(savedCart));
    }
}

loadCartFromLocalStorage();

const cartList = document.querySelector(".list-shop-cart");
const totalDiv = document.querySelector(".total");
const notification = document.querySelector(".notification-shop-cart");


function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

function addToCart(product) {
    const key = product.name;

    if (cart[key]) {
        cart[key].qty += 1;
    } else {
        cart[key] = { ...product, qty: 1 };
    }

    renderCart();
    updateNotificationCount();
    saveCartToLocalStorage();
}

function renderCart() {
    cartList.innerHTML = "";

    let total = 0;

    for (const [name, item] of Object.entries(cart)) {
        const price = parseFloat(item.cena.replace("mkd", "").trim());
        const itemTotal = item.qty * price;
        total += itemTotal;

        const li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
            <div>
                <img src="${item.image}">
            </div>
            <div class="shop-name">${item.name}</div>
            <div class="shop-price">${itemTotal} mkd</div>
            <div class="qty-controls">
                <button onclick="decreaseQty('${name}')">–</button>
                <span class="qty-controls-mid">${item.qty}</span>
                <button onclick="increaseQty('${name}')">+</button>
            </div>
        `;

        cartList.appendChild(li);
    }

    totalDiv.textContent = `${total} mkd`;
}

function increaseQty(name) {
    cart[name].qty++;
    renderCart();
    updateNotificationCount();
    saveCartToLocalStorage();
}

function decreaseQty(name) {
    if (cart[name].qty > 1) {
        cart[name].qty--;
    } else {
        delete cart[name];
    }
    renderCart();
    updateNotificationCount();
    saveCartToLocalStorage();
}

function updateNotificationCount() {

    let totalQty = 0;
    for (const item of Object.values(cart)) {
        totalQty += item.qty;
    }
    notification.textContent = totalQty;
}

renderCart();
updateNotificationCount();


document.querySelector('.total').addEventListener('click', () => {
    const confirmed = confirm("Are you sure you want to clear the shopping cart?");

    if (confirmed) {
        for (const key in cart) {
            delete cart[key];
        }

        localStorage.removeItem('shoppingCart');

        renderCart();
        updateNotificationCount();
    }
});
