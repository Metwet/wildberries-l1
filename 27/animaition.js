const animatedElement = document.querySelector('.result');
const animationButton = document.querySelector('.btn');

// Добавляем обработчик события для кнопки
animationButton.addEventListener('click', ()=>{
    // Изменяем свойства элемента, чтобы запустить анимацию.
    animatedElement.style.width = '200px';
    animatedElement.style.height = '200px';
    animatedElement.style.backgroundColor = '#e74c3c';
    animatedElement.style.transform = 'translate(-50%, -50%) rotate(45deg)';
});