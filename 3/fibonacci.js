const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const resultBlock = document.querySelector('.result');

const MathX = {
    // Функция для вычисления N-го числа в ряду Фибоначчи.
    getThisSequenceNumber: (number) => {
        // Обработка отрицательных чисел и 0.
        if (number <= 0) return -1;
        // Обработка первых двух чисел Фибоначчи.
        if (number === 1) return 0;
        if (number === 2) return 1;
        
        // Инициализируем начальные значения двух последних чисел Фибоначчи.
        let a = 0;
        let b = 1;
        let result = 0;
        
        // Создаём цикл, который считает числа Фибоначи, начиная с третьего числа.
        for (let i = 3; i <= number; i++) {
          result = a + b;
          a = b;
          b = result;
        }
    
        return result;
    },

    // Функция для вычисления всех чисел в ряду Фибоначчи до числа N.
    getSequenceBeforeNumber: (number) => {
        // Создаем пустой массив для хранения последовательности чисел.
        const sequence = [];

        // Инициализируем начальные значения двух последних чисел Фибоначчи.
        let a = 0;
        let b = 1;
        
        // Используем цикл для вычисления чисел Фибоначчи до числа number.
        while (a <= number) {
            // Добавляем текущее число Фибоначчи a в последовательность.
            sequence.push(a);
            // Вычисляем следующее число Фибоначчи и обновляем значения a и b.
            const sum = a + b;
            a = b;
            b = sum;
        }

        // Возвращаем массив с последовательностью чисел Фибоначчи.
        return sequence;
    },

    // Функция для вычисления всех простых чисел до числа N.
    getPrimeNumbersBeforeNumber: (number) => {
        // Создаем пустой массив для хранения простых чисел.
        const primes = [];
         // Начинаем перебирать числа, начиная с 2, так как 1 не является простым числом.
        for (let currentNumber = 2; currentNumber <= number; currentNumber++) {
            // Предполагаем, что текущее число простое.
            let isPrime = true;
            // Перебираем числа от 2 до текущего числа, чтобы проверить, делится ли текущее число на какое-либо другое число.
            for (let i = 2; i < currentNumber; i++) {
                // Если текущее число делится на какое-либо другое число без остатка, то оно не является простым числом.
                if (currentNumber % i === 0) {
                    isPrime = false;
                    // Прерываем внутренний цикл, так как уже известно, что число не простое.
                    break;
                }
            }
            // Добавляем простое число в массив простых чисел.
            if (isPrime) {
                primes.push(currentNumber);
            }
        }
        // Возвращаем массив с простыми числами.
        return primes;
    }
}

btn.addEventListener('click', ()=> {
    // Преобразуем значение инпута в число.
    const inputValue = parseInt(input.value); 

    //Проверяем корректно ли введенное число.
    if (!isNaN(inputValue)) {
        const fibonacciNumber = MathX.getThisSequenceNumber(inputValue);
        const fibonacciSequence = MathX.getSequenceBeforeNumber(inputValue);
        const primeNumbers = MathX.getPrimeNumbersBeforeNumber(inputValue);

        //Проверяем больше ли число нуля и выводим ответ в html.
        if (fibonacciNumber === -1) {
            resultBlock.innerHTML = "Пожалуйста, введите неотрицательное число и не 0.";
        } else {
            resultBlock.innerHTML = `Вычисление ${inputValue} числа в ряду Фибоначчи: ${fibonacciNumber}`;

            resultBlock.innerHTML += `<br>Все числа Фибоначчи до числа ${inputValue}: ${fibonacciSequence.join(', ')}`;

            if(primeNumbers.length){
                resultBlock.innerHTML += `<br>Все простые числа до числа ${inputValue}: ${primeNumbers.join(', ')}`;
            } else {
                resultBlock.innerHTML += `<br>Простых чисел до числа ${inputValue} не нашлось.`;
            }
        }
    } else {
        resultBlock.innerHTML = "Пожалуйста, введите корректное число.";
    }
});
