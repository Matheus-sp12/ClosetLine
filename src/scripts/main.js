const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.open-btn');
const overlay = document.querySelector('.sidebar-overlay');

openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});