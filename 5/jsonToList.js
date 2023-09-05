function jsonToLinkedList(jsonArray) {
    // Создаем переменную, которая будет указывать на начало односвязного списка.
    let head = null; 
    // Создаем переменную, которая будет использоваться для перемещения по односвязному списку.
    let current = null;

    // Создаем цикл, в котором проходимся по элементам массива.
    for (const item of jsonArray) {
        // Создаем узел связанного списка с данными из элемента JSON  
        const newNode = { data: item.value, next: null };

        // Если head равен null (список пустой), то...
        if (!head) {
            // устанавливаем head на новый узел newNode
            head = newNode;
            // и current также устанавливаем на head (первый узел в списке).
            current = head;
        } 
        //Если список уже не пустой, то ...
        else {
            // yстанавливаем указатель next последнего элемента на новый узел newNode,
            current.next = newNode;
            // затем обновляем current.
            current = newNode; 
        }
    }
    
    // Возвращаем односвязный список.
    return head;
}

// Запускаем запрос JSON-файла.
fetch('data.json') 
    // Преобразуем полученный ответ в формате JSON в объект. 
    .then(response => response.json())
    // Преобразуем JSON-данные в односвязный список и выводим его в консоль.
    .then(jsonData => {
        const linkedList = jsonToLinkedList(jsonData);
        console.log(linkedList);
    })
