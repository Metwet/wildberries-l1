function MathX(num) {

    function getThisSequenceNumber() {
        let first = 0;
        let second = 1;
        let sum;

        if(num <= 0) return -1;
        if(num === 1) return first;
        if(num === 2) return second;

        for(let i = 2; i < num; i++){
            sum = first + second;
            first = second;
            second = sum;
        }

        return sum;
    }

    function getSequenceBeforeNumber() {
        if(num <= 0) return -1;
        const arrOfFibonacci = [];
        let first = 0;
        let second = 1;
        while(first < num) {
            arrOfFibonacci.push(first);
            const sum = first + second;
            first = second;
            second = sum;
        }
        return arrOfFibonacci.join(' ');
    }

    function getThisPrimeNumber() {
        if(num <= 0) return -1;

        let primesCounter = 0;
        let primeNumber;

        for(let i = 2; primesCounter < num; i++){
            let isItPrime = true;
            for(let y = 2; y < i; y++){
                if(i % y == 0) isItPrime = false;
            }
            if(isItPrime) {
                primesCounter++;
                primeNumber = i;
            }
        }

        return primeNumber;
    }

    function getPrimeNumbersBeforeNumber() {
        const primes = [];
        for(let i = 2; i < num; i++){
            let isTiPrime = true;
            for(let y = 2; y < i; y++){
                if(i % y === 0) isTiPrime = false;
            }
            if(isTiPrime) primes.push(i);
        }
        return primes.join(' ');
    }

    return [getThisSequenceNumber, getSequenceBeforeNumber, getThisPrimeNumber, getPrimeNumbersBeforeNumber]
}

const [getThisSequenceNumber, getSequenceBeforeNumber, getThisPrimeNumber, getPrimeNumbersBeforeNumber] = MathX(7);

console.log(getThisSequenceNumber());
console.log(getSequenceBeforeNumber());
console.log(getThisPrimeNumber());
console.log(getPrimeNumbersBeforeNumber());


// const MathX = {
//     // Функция для вычисления N-го числа в ряду Фибоначчи.
//     getThisSequenceNumber: (number) => {
//         // Обработка отрицательных чисел и 0.
//         if (number <= 0) return -1;
//         // Обработка первых двух чисел Фибоначчи.
//         if (number === 1) return 0;
//         if (number === 2) return 1;
        
//         // Инициализируем начальные значения двух последних чисел Фибоначчи.
//         let a = 0;
//         let b = 1;
//         let result = 0;
        
//         // Создаём цикл, который считает числа Фибоначи, начиная с третьего числа.
//         for (let i = 3; i <= number; i++) {
//           result = a + b;
//           a = b;
//           b = result;
//         }
    
//         return result;
//     },

//     // Функция для вычисления всех чисел в ряду Фибоначчи до числа N.
//     getSequenceBeforeNumber: (number) => {
//         // Создаем пустой массив для хранения последовательности чисел.
//         const sequence = [];

//         // Инициализируем начальные значения двух последних чисел Фибоначчи.
//         let a = 0;
//         let b = 1;
        
//         // Используем цикл для вычисления чисел Фибоначчи до числа number.
//         while (a <= number) {
//             // Добавляем текущее число Фибоначчи a в последовательность.
//             sequence.push(a);
//             // Вычисляем следующее число Фибоначчи и обновляем значения a и b.
//             const sum = a + b;
//             a = b;
//             b = sum;
//         }

//         // Возвращаем массив с последовательностью чисел Фибоначчи.
//         return sequence;
//     },

//     // Функция для вычисления всех простых чисел до числа N.
//     getPrimeNumbersBeforeNumber: (number) => {
//         // Создаем пустой массив для хранения простых чисел.
//         const primes = [];
//          // Начинаем перебирать числа, начиная с 2, так как 1 не является простым числом.
//         for (let currentNumber = 2; currentNumber <= number; currentNumber++) {
//             // Предполагаем, что текущее число простое.
//             let isPrime = true;
//             // Перебираем числа от 2 до текущего числа, чтобы проверить, делится ли текущее число на какое-либо другое число.
//             for (let i = 2; i < currentNumber; i++) {
//                 // Если текущее число делится на какое-либо другое число без остатка, то оно не является простым числом.
//                 if (currentNumber % i === 0) {
//                     isPrime = false;
//                     // Прерываем внутренний цикл, так как уже известно, что число не простое.
//                     break;
//                 }
//             }
//             // Добавляем простое число в массив простых чисел.
//             if (isPrime) {
//                 primes.push(currentNumber);
//             }
//         }
//         // Возвращаем массив с простыми числами.
//         return primes;
//     }
// }
