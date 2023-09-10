function getMaxLocalStorageSize() {
  // Задаем ключ, который будет использоваться для записи данных из localStorage.
  const testKey = "test";
  // Начальное значение максимального размера, которое мы будем определять.
  let maxSize = 1;
  // Создаем строку, которая представляет собой 1 МБ данных (символ "a" повторяется 1048576 раз).
  let testData = "a".repeat(1024 * 1024);
  // Бесконечный цикл, который будет увеличивать размер данных, пока не достигнет максимального размера localStorage.
  while (true) {
    try {
      // Попытка записать данные в localStorage.
      window.localStorage.setItem(testKey, testData);
      // Удаление данных из localStorage, чтобы освободить место для следующей попытки.
      window.localStorage.removeItem(testKey);
      // Обновляем значение maxSize до размера текущих данных.
      maxSize = testData.length;
      // Добавляем еще 1 МБ данных.
      testData += "a".repeat(1024 * 1024);
    } catch {
      // Если возникает ошибка при записи данных в localStorage, выводим максимальный размер и завершаем функцию.
      console.log(`Максимальный объем данных в localStorage: ${maxSize} байт или ${maxSize/1048576} МБ`);
      return maxSize;
    }
  }
}
  
getMaxLocalStorageSize();
  