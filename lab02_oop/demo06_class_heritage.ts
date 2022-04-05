/**
 * ? Class heritage
 */

interface Shape {
  draw(size: number): void;
}

class Circle implements Shape {
  // Must be implement method draw() of interface Shape
  draw(size: number) { console.log(`Circle is drawing with size ${size}`); }
}

const circle = new Circle(); 
circle.draw(100);