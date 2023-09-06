function outerFunction(externalVariable) {
    // Внутренняя функция - замыкание.
    function innerFunction() {
        // Внутренняя функция имеет доступ к externalVariable.
        console.log(externalVariable);
    }
  
    // Возвращаем внутреннюю функцию
    return innerFunction;
}
  
// Создаем экземпляр внешней функции с определенным значением externalVariable
const closure = outerFunction("wildberries");
// Вызываем возвращенную внутреннюю функцию
closure();