const resultElement = document.querySelector('.result');
const addButton = document.querySelector('.btn');
const template = document.getElementById("myTemplate");

addButton.addEventListener("click", function () {
    // Клонируем содержимое шаблона.
    const clone = document.importNode(template.content, true);
    // Добавляем клонированный элемент в контейнер.
    resultElement.appendChild(clone);
});