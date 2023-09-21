const resultElement = document.querySelector('.result');

// Функция для рекурсивного обхода дерева DOM.
function traverseDOM(node) {
    // Используем nodeType для определения типа узла в дереве DOM.
    if (node.nodeType === 1) {     
        console.log("Тег:", node.tagName);
    }

    // Рекурсивно обходим дочерние элементы.
    for (let i = 0; i < node.childNodes.length; i++) {
        // С помощью childNodes проходим по списку всех дочерних узлов.
        const childNode = node.childNodes[i];
        if (childNode.nodeType === 1) {
            // Рекурсивно объодим дочерние элементы.
            traverseDOM(childNode);
        }
    }
}

traverseDOM(resultElement);
