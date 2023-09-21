function getCallStackSize() {
    let count = 0;
    try {
        function recurtion() {
            count++;
            recurtion();
        }

        recurtion()
    } catch { 
        console.log('Размер колстека: ', count);
    }
}

getCallStackSize();

//Результаты
//1. Chrome
//Размер колстека:  13948
//2. Firefox
//Размер колстека:  31247
//3. Opera
//Размер колстека:  13948