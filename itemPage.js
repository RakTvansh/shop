// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Find the matching product from products.js
const product = products.find(p => p.id === productId);

// If product found, update the page
if (product) {
  // 1. Show the 4 scrolling images
  const scrollContent = document.getElementById("scrollContent");
  scrollContent.innerHTML = `
    <div class="image-set">
      <img src="${product.image}" />
      <img src="${product.image}" />
      <img src="${product.image}" />
      <img src="${product.image}" />
    </div>
    <div class="image-set">
      <img src="${product.image}" />
      <img src="${product.image}" />
      <img src="${product.image}" />
      <img src="${product.image}" />
    </div>
  `;

  // 2. Update the product name
  document.getElementById("product-name").textContent = product.name;
} else {
  // Show message if no product found
  document.getElementById("product-name").textContent = "Product not found.";
}
