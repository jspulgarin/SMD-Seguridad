
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginPage = document.getElementById('login-page');
    const mainPage = document.getElementById('main-page');

    if (isLoggedIn === 'true' && loginPage && mainPage) {
        loginPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    }
});


const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('main-page').classList.remove('hidden');
        localStorage.setItem('isLoggedIn', 'true'); 
    });
}


const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'false'); 
        window.location.href = 'index.html'; 
    });
}


const slides = document.querySelector('.slides');
if (slides) {
    let slideIndex = 0;
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlides() {
        slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    document.querySelector('.next').addEventListener('click', function() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlides();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlides();
    });

    
    setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlides();
    }, 5000);
}


const modal = document.getElementById('product-modal');
if (modal) {
    const productInfo = document.getElementById('product-info');
    const products = document.querySelectorAll('.product');
    const closeBtn = document.querySelector('.close');

    products.forEach(product => {
        product.addEventListener('click', function() {
            productInfo.textContent = this.dataset.info;
            modal.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}
