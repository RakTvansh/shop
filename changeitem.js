const portraits = document.querySelectorAll(".portrait-grid img");
const scrollContent = document.getElementById("scrollContent");
const productName = document.getElementById("product-name");

portraits.forEach(portrait => {
    portrait.addEventListener("click", () => {
        const src = portrait.src;
        const name = portrait.getAttribute("data-name") || "Unnamed Tee";

        const generateImageSet = () => {
            let images = '';
            for (let i = 0; i < 8; i++) {
                images += `<img src="${src}" />`;
            }
            return `<div class="image-set">${images}</div>`;
        };

        scrollContent.innerHTML = generateImageSet() + generateImageSet();
        productName.textContent = name;

        // Restart scrolling
        setTimeout(() => {
            if (typeof initAutoScroll === 'function') {
                initAutoScroll();
            }
        }, 100);
    });
});
