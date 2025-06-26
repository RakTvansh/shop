let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");

  if (!cartItems || !totalPriceEl) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} - ₹${item.price} x ${item.quantity}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });

  totalPriceEl.textContent = `Total: ₹${total}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

document.addEventListener("DOMContentLoaded", renderCart);






//Homr Cart Profile Login