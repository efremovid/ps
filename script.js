onload = window['dialog-id'].showModal();


document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.scroll-button');
    const targetElement = document.querySelector('.target-block');
    scrollButton.addEventListener('click',
        function () {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.scroll-actions');
    const targetElement = document.querySelector('.actions');
    scrollButton.addEventListener('click',
        function () {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
});



document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.actions_scroll');
    const targetElement = document.querySelector('.actions');
    scrollButton.addEventListener('click',
        function () {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
});







document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.scroll-contacts');
    const targetElement = document.querySelector('.footer');
    scrollButton.addEventListener('click',
        function () {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.about_scroll');
    const targetElement = document.querySelector('.target-block');
    scrollButton.addEventListener('click',
        function () {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.contacts_scroll');
    const targetElement = document.querySelector('.footer');
    scrollButton.addEventListener('click',
        function () {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
});






const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Функция для перехода к следующему слайду
function nextSlide() {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slide');
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active-slide');
}

document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', prevSlide);

