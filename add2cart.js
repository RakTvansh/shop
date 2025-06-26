const count = document.getElementById('cartCount');
let currentCount = 0;

document.querySelector('.icon').addEventListener('click', () => {
  currentCount++;
  count.textContent = currentCount;
  count.classList.add('bump');
  setTimeout(() => count.classList.remove('bump'), 200);
});
