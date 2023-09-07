function loadImage(url) {
    // Возвращаем новый промис.
    return new Promise((resolve, reject) => {
        // Создаем элемент <img>.
        const image = new Image();
        // Обработчик успешной загрузки изображения.
        image.onload = () => {
            resolve(image);
        };
        // Обработчик ошибки при загрузке изображения.
        image.onerror = (error) => {
            reject(error);
        };
        // Устанавливаем URL для загрузки изображения.
        image.src = url;
    });
}
  
// Пример использования.
const imageUrl = 'https://www.planet-wissen.de/natur/voegel/pinguine/intropinguinfederkleidgjpg100~_v-gseagaleriexl.jpg';
const resultElement = document.querySelector('.result');
loadImage(imageUrl)
    .then((image) => {
        console.log('Изображение успешно загружено:', image);
        resultElement.appendChild(image);
    })
    .catch((error) => {
        console.error('Ошибка при загрузке изображения:', error);
    });