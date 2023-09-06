// Объявляем функцию, которая будет вызывать функции по порядку.
const callFunctionsInOrder = (functions, index) => {
  // Проверяем, не вышли ли за пределы массива функций.
  if (index < functions.length) {
    // Вызываем текущую функцию в массиве.
    functions[index]();
    console.log(`Функция ${index + 1} выполнена`);
    // Рекурсивно вызываем callFunctionsInOrder для следующей функции в массиве.
    callFunctionsInOrder(functions, index + 1);
  }
}

// Создаем массив функций, каждая из которых будет выполнена по порядку.
const functions = [
  () => {
    console.log("Функция 1");
  },
  () => {
    console.log("Функция 2");
  },
  () => {
    console.log("Функция 3");
  },
];

// Начинаем выполнение функций в массиве с индекса 0.
callFunctionsInOrder(functions, 0);
  