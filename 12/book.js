const book = {
    title: "the Hobbit",
    author: "Tolkien J.R.R",
    year: 1937,
    
    // Метод для получения названия книги.
    getTitle: function() {
        return this.title;
    },
  
    // Метод для изменения названия книги.
    changeTitle: function(newTitle) {
      this.title = newTitle;
    },
  
    // Метод для получения имени автора.
    getAuthor: function() {
      return this.author;
    },
  
    // Метод для изменения имени автора.
    changeAuthor: function(newAuthor) {
      this.author = newAuthor;
    },
  
    // Метод для получения года издания.
    getYear: function() {
      return this.year;
    },
  
    // Метод для изменения года издания.
    changeYear: function(newYear) {
      this.year = newYear;
    }
};
  
// Получаем значения свойств книги.
console.log("Название книги:", book.getTitle());
console.log("Автор книги:", book.getAuthor());
console.log("Год издания книги:", book.getYear());
  
// Изменяем значения свойств книги.
book.changeTitle("Solaris");
book.changeAuthor("Stanisław Lem");
book.changeYear(1961);
  
// Проверяем измененные значения свойств книги.
console.log("Новое название книги:", book.getTitle());
console.log("Новый автор книги:", book.getAuthor());
console.log("Новый год издания книги:", book.getYear());  
