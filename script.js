const btn = document.querySelector('nav .toggle-btn');
const navbar = document.querySelector('.navbar-nav');

btn.addEventListener('click', function () {
    navbar.classList.toggle('active');
});

