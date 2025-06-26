const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar on hamburger click
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent triggering document click
    sidebar.classList.toggle('open');
});

// Close sidebar when clicking anywhere outside it
document.addEventListener('click', (event) => {
    if (
        sidebar.classList.contains('open') &&
        !sidebar.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        sidebar.classList.remove('open');
    }
});
