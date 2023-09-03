const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const resultBlock = document.querySelector('.result');

const isItPalindrome = () => {
    // Получаем строку из инпута, приводим её к нижнему регистру и удаляем в ней пробелы.
    const str = input.value.toLowerCase().replace(/\s/g, '');

    // Отдельно разбиваем строку на массив символов, переворачиваем массив, 
    // затем склеиваем перевернутый массив, чтобы получить строку в обрантом порядке.
    const reversedStr = str.split('').reverse().join('');

    // Сравниваем исходную строку с перевернутой.
    return str === reversedStr;
}

btn.addEventListener('click', ()=> {
    if(isItPalindrome()){
        resultBlock.innerHTML = "Это палиндром!";
    }else{
        resultBlock.innerHTML = "Это не палиндром :(";
    }
});