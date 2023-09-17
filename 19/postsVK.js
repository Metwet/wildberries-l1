const postList = document.getElementById('postList');
const loadMoreBtn = document.createElement('div');
loadMoreBtn.classList.add('load-more-btn');
loadMoreBtn.innerText = 'Загрузить еще';
postList.appendChild(loadMoreBtn);

const MAX_CACHE_SIZE = 10; // Максимальный размер кэша

let offset = 0;
let cache = [];

const accessToken = '3cda4f743cda4f743cda4f745d3fcfd38233cda3cda4f7459da881666a4348efcacfeee';
const ownerId = '-29534144';
const count = 5; // Количество постов для загрузки

function loadPosts() {
    // Создаем callback-функцию для JSONP
    const callbackName = 'loadPostsCallback';
    window[callbackName] = function (data) {
        if (data.response) {
            // Посты находятся в data.response.items
            const posts = data.response.items;
            posts.forEach(item => {
                const postItem = document.createElement('div');
                postItem.classList.add('post-item');
                postItem.innerText = item.text;
                postList.insertBefore(postItem, loadMoreBtn);
                console.log(item);
            });

            // Обновляем кэш данных
            cache = [...posts, ...cache];
            if (cache.length > MAX_CACHE_SIZE) {
                cache = cache.slice(0, MAX_CACHE_SIZE);
            }

            // Увеличиваем смещение
            offset += posts.length;
        } else {
            console.error('Ошибка при загрузке постов:', data.error);
        }
    };

    // Создаем элемент script для выполнения JSONP-запроса
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?owner_id=${ownerId}&count=${count}&offset=${offset}&access_token=${accessToken}&v=5.131&callback=${callbackName}`;
    document.body.appendChild(script);

    // Удаляем callback-функцию после выполнения запроса
    script.onload = () => {
        delete window[callbackName];
        script.remove();
    };
}

function loadMore() {
    loadPosts();
}

loadMoreBtn.addEventListener('click', loadMore);

// Проверяем наличие кэшированных данных и загружаем их при запуске виджета
if (localStorage.getItem('postCache')) {
    cache = JSON.parse(localStorage.getItem('postCache'));
    cache.forEach(item => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');
        postItem.innerText = item.text;
        postList.insertBefore(postItem, loadMoreBtn);
    });
}

// Сохраняем кэш при закрытии страницы
window.addEventListener('beforeunload', () => {
    localStorage.setItem('postCache', JSON.stringify(cache));
});

// Загружаем первую порцию постов при инициализации виджета
loadPosts();
