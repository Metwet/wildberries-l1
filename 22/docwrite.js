// Счетчик для подсчета вызовов document.write().
let count = 0;
function recursionDocumentWrite() {
    try {
        // Увеличиваем счетчик с каждым вызовом функции.
        count++;
        // Вызываем document.write() внутри самой себя рекурсивно.
        return document.write(recursionDocumentWrite());
    } catch (error) {
        //Попадаем сюда при переполнении стека вызовов.
        console.log("Максимальное количество вложенных вызовов document.write(): " + count);
        //Получаем результат: 
        //Максимальное количество вложенных вызовов document.write(): 9659.
    }
}

recursionDocumentWrite();


//Есть сомнения насчет правильности этого решения. Нашел по ссылке ниже что ответ должен быть 20 или 21, если бразуер Chrome.
//https://habr.com/ru/articles/305366/
//Решил проверить это топорным методом (код ниже), где взывал document.write 32 раза внутри document.write, 
//и код рабоатет. Видимо в статье неверная или неактуальная информация.
//Таким образом, делаю вывод, что количество вызовов document.write внутри document.write  ограниченно размером стека вызовов.
document.write(
    document.write(
        document.write(
            document.write(
                document.write(
                    document.write(
                        document.write(
                            document.write(
                                document.write(
                                    document.write(
                                        document.write(
                                            document.write(
                                                document.write(
                                                    document.write(
                                                        document.write(
                                                            document.write(
                                                                document.write(
                                                                    document.write(
                                                                        document.write(
                                                                            document.write(
                                                                                document.write(
                                                                                    document.write(
                                                                                        document.write(
                                                                                            document.write(
                                                                                                document.write(
                                                                                                    document.write(
                                                                                                        document.write(
                                                                                                            document.write(
                                                                                                                document.write(
                                                                                                                    document.write(
                                                                                                                        document.write(
                                                                                                                            document.write(
                                                                                                                                document.write()
                                                                                                                            )
                                                                                                                        )
                                                                                                                    )
                                                                                                                )
                                                                                                            )
                                                                                                        )
                                                                                                    )
                                                                                                )
                                                                                            )
                                                                                        )
                                                                                    )
                                                                                )
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
);
