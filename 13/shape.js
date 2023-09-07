class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot create an instance of the abstract class Shape.");
    }
  }
  
  // Метод для расчета площади (абстрактный метод).
  calculateArea() {
    throw new Error("The calculateArea method must be implemented by subclasses.");
  }
  
  // Метод для расчета периметра (абстрактный метод).
  calculatePerimeter() {
    throw new Error("The calculatePerimeter method must be implemented by subclasses.");
  }
}
  
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  // Реализация метода расчета площади для прямоугольника.
  calculateArea() {
    return this.width * this.height;
  }
  
  // Реализация метода расчета периметра для прямоугольника.
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}
  
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  // Реализация метода расчета площади для круга.
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  
  // Реализация метода расчета периметра для круга.
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
  
class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  
  // Реализация метода расчета площади для треугольника (формула Герона).
  calculateArea() {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }
  
  // Реализация метода расчета периметра для треугольника.
  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}
  
// Пример использования классов.
const rectangle = new Rectangle(4, 5);
console.log("Площадь прямоугольника:", rectangle.calculateArea());
console.log("Периметр прямоугольника:", rectangle.calculatePerimeter());
  
const circle = new Circle(3);
console.log("Площадь круга:", circle.calculateArea());
console.log("Периметр круга:", circle.calculatePerimeter());
  
const triangle = new Triangle(3, 4, 5);
console.log("Площадь треугольника:", triangle.calculateArea());
console.log("Периметр треугольника:", triangle.calculatePerimeter());