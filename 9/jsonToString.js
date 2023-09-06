// Функция конвертации JSON в строку.
function customStringify(obj) {

     // Проверяем, является ли obj не объектом.
    if (typeof obj !== 'object') {
        // Если это не объект, возвращаем его строковое представление в зависимости от типа данных.
        if(typeof obj === 'number'){
            return String(obj);
        } else {
            return `"${String(obj)}"`;
        }
    }

    // Создаем массив для хранения результатов.
    const keyValuePairs = [];
    
    // Проходим по всем свойствам объекта.
    for (const key in obj) {
        // Проверяем, что свойство принадлежит самому объекту, а не его прототипу.
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            // Оборачиваем ключ в двойные кавычки, так как требует формат JSON.
            const keyStr = `"${key}"`;
            // Рекурсивно вызываем функцию для значения.
            const valueStr = customStringify(value);
            // Формируем пары ключ:значение.
            keyValuePairs.push(`${keyStr}:${valueStr}`);
        }
    }
    
    // Объединяем результат через запятую.
    return `{${keyValuePairs.join(',')}}`;
}
  
// Загружаем JSON-данные с помощью fetch.
fetch('data.json')
    .then(response => {
        // Преобразуем ответ в объект JSON.
        return response.json();
    })
    .then(data => {
        // Используем функцию для конвертации JSON в строку и выводим её в консоль.
        const jsonString = customStringify(data);
        console.log(jsonString);
    })
  