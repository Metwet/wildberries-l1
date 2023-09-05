import wordEnding from './word-ending.module.js';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const resultBlock = document.querySelector('.result');

btn.addEventListener('click', ()=> {
    // Преобразуем значение инпута в число.
    const inputValue = parseInt(input.value); 

    //Проверяем корректно ли введенное число.
    if (!isNaN(inputValue)) {
        //Вызываем методы из модуля для вывода сообщения с правильным окончанием.
        resultBlock.innerHTML = `${wordEnding.getMessageCountString(inputValue)}`;
        resultBlock.innerHTML += `<br>${wordEnding.getUserCountString(inputValue)}`;
    } else {
        resultBlock.innerHTML = "Пожалуйста, введите корректное число.";
    }
});