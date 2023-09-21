const resultElement = document.querySelector('.result');
const addButton = document.querySelector('.btn');
// Обработчик клика с функцией для создания и добавления элемента.
addButton.addEventListener('click', ()=>{
     // Создаем новый элемент.
    const newElement = document.createElement('div');
    // Устанавливаем стиль для нового элемента
    newElement.style.backgroundColor = 'green';
    newElement.style.color = 'white';
    newElement.style.padding = '10px';
    newElement.style.margin = '5px';
    newElement.textContent = 'Новый элемент';
    // Добавляем новый элемент внутри нужного блока.
    resultElement.appendChild(newElement);
});
