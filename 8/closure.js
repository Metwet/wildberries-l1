// Создаем функцию, которая принимает массив функций.
const createClosureFunction = (funcArray) => {
    return function () {
        // Создаем массив для хранения результатов.
        const results = [];
        
        // Проходим по каждой функции и добавляем ее результат в массив.
        for (const func of funcArray) {
            results.push(func());
        }
        
        // Возвращаем массив результатов.
        return results;
    };
}

// Создаем массив функций.
const functions = [
    () => 1,
    () => 2,
    () => 3
];

// Создаем новую функцию, используя createClosureFunction и передавая ей массив функций.
const combinedFunction = createClosureFunction(functions);
// Вызываем новую функцию, которая вызывает каждую функцию из массива
const results = combinedFunction();
// и выводим массив результатов в консоль.
console.log(results);
  