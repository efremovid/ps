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

