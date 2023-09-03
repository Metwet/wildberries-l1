const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const resultBlock = document.querySelector('.result');

const isItStrangeNum = (number) => {
    if (number <= 0) {
        // Ноль и отрицательные числа не могут быть странными.
        return false;
    }

    // Создаём переменную для хранения суммы всех делителей.
    let sumOfDivisors = 0;

    // Создаём цикл, который ищет все делители.
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            // Суммируем все делители, когда находим их.
            sumOfDivisors += i;
        }
    }

    // Сравниваем сумму всех делителей с исходным числом.
    return sumOfDivisors === number;
}

btn.addEventListener('click', ()=> {
    // Преобразуем значение инпута в число.
    const inputValue = parseInt(input.value); 

    //Проверяем корректно ли введенное число.
    if (!isNaN(inputValue)) {
        //Проверяем число на странность.
        if(isItStrangeNum(inputValue)){
            resultBlock.innerHTML = "Это странное число!";
        } else {
            resultBlock.innerHTML = "Число как число, ничего странного.";
        }
    } else {
        resultBlock.innerHTML = "Пожалуйста, введите корректное число.";
    }
});