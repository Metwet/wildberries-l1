function customJsonParse(inputString) {
    // Удаляем все пробелы из входной строки.
    inputString = inputString.replaceAll(' ', '');

    let currentIndex = 0;
  
    function parseValue() {
        // Получаем текущий символ из строки.
        const char = inputString[currentIndex];

        // Проверяем тип текущего символа.
        if (char === '{') {
            // Если символ - открывающая фигурная скобка, парсим как объект.
            return parseObject();
        } else if (char === '[') {
            // Если символ - открывающая квадратная скобка, парсим как массив.
            return parseArray();
        } else if (char === '"') {
            // Если символ - двойная кавычка, парсим как строку.
            return parseString();
        } else if (/[0-9-]/.test(char)) {
            // Если символ - цифра или знак минус, парсим как число.
            return parseNumber();
        } else if (inputString.startsWith("true", currentIndex)) {
            // Если текущий фрагмент - "true", возвращаем true.
            currentIndex += 4;
            return true;
        } else if (inputString.startsWith("false", currentIndex)) {
            // Если текущий фрагмент - "false", возвращаем false.
            currentIndex += 5;
            return false;
        } else if (inputString.startsWith("null", currentIndex)) {
            // Если текущий фрагмент - "null", возвращаем nul
            currentIndex += 4;
            return null;
        } else {
            // Если текущий символ не соответствует ни одному из ожидаемых, выбрасываем ошибку.
            throw new Error(`Invalid character at position ${currentIndex}: ${char}`);
        }
    }
  
    function parseObject() {
        // Пропускаем открывающую фигурную скобку.
        currentIndex++;
        const obj = {};
    
        while (currentIndex < inputString.length && inputString[currentIndex] !== '}') {
            const key = parseString();
    
            if (inputString[currentIndex] !== ':') {
            throw new Error(`Expected ":" at position ${currentIndex}`);
            }
            
            // Пропускаем двоеточие.
            currentIndex++;
            // Парсим значение.
            const value = parseValue();
            obj[key] = value;
    
            if (inputString[currentIndex] === ',') {
                // Пропускаем запятую, если есть следующая пара ключ-значение.
                currentIndex++;
            }
        }
    
        if (inputString[currentIndex] !== '}') {
            throw new Error(`Invalid character at position ${currentIndex}: ${inputString[currentIndex]}`);
        }
        // Пропускаем закрывающую фигурную скобку.
        currentIndex++; 
        return obj;
    }
  
    function parseArray() {
        // Пропускаем открывающую квадратную скобку.
        currentIndex++;
        const arr = [];
    
        while (currentIndex < inputString.length && inputString[currentIndex] !== ']') {
            // Парсим элемент массива.
            const value = parseValue();
            arr.push(value);
    
            if (inputString[currentIndex] === ',') {
                // Пропускаем запятую, если есть следующий элемент массива.
                currentIndex++;
            }
        }
    
        if (inputString[currentIndex] !== ']') {
            throw new Error(`Invalid character at position ${currentIndex}: ${inputString[currentIndex]}`);
        }
        // Пропускаем закрывающую квадратную скобку.
        currentIndex++;
        return arr;
    }
    
    function parseString() {
        // Пропускаем открывающую кавычку.
        currentIndex++;
        let str = '';
    
        while (currentIndex < inputString.length && inputString[currentIndex] !== '"') {
            if (inputString[currentIndex] === '\\') {
                // Пропускаем обратный слеш.
                currentIndex++;
            }
            str += inputString[currentIndex];
            currentIndex++;
        }
    
        if (inputString[currentIndex] !== '"') {
            throw new Error(`Invalid character at position ${currentIndex}: ${inputString[currentIndex]}`);
        }
        // Пропускаем закрывающую кавычку.
        currentIndex++;
        return str;
    }
  
    function parseNumber() {
        // Создаём переменную для хранения символов.
        let numStr = '';
        // Цикл будет выполняться, пока currentIndex меньше длины строки и текущий символ соответствует шаблону:
        // [0-9.eE+-] - Любая цифра от 0 до 9, символ точки, символы "e" или "E", которые могут использоваться в числах с плавающей точкой
        // и символы "+" или "-".
        while (currentIndex < inputString.length && /[0-9.eE+-]/.test(inputString[currentIndex])) {
            // Добавляем текущий символ к строке numStr.
            numStr += inputString[currentIndex];
            // Переходим к следующему символу.
            currentIndex++;
        }
        // Преобразуем строку numStr в число с плавающей точкой.
        const num = parseFloat(numStr);       
        // Проверяем, было ли успешное преобразование.
        if (isNaN(num)) {
            throw new Error(`Invalid number at position ${currentIndex - numStr.length}`);
        }
    
        return num;
    }
  
    return parseValue();
  }
  
  // Пример использования.
  const jsonString = '[{"id": 1, "name": "Metwet"}, {"id": 2, "name": "Bob"}]';
  const jsonObject = customJsonParse(jsonString);
  console.log(jsonObject);
  