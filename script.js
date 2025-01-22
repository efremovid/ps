onload = window['dialog-id'].showModal();


document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollbt');
    const targetElement = document.getElementById('scrolltg');

    // Обработчик клика на кнопку
    scrollButton.addEventListener('click', () => {
        // Прокручиваем страницу до указанного элемента с плавной анимацией
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});