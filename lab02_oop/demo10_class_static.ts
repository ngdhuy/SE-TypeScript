/**
 * ? Define static member for class
 */

class Shape {
  static #count = 0;
  private static _color = 'no-color';
  static num_peak = 99;

  static print_num_peak() { 
    console.log(Shape.num_peak); 
  }

  public static print_color() {
    console.log(Shape._color);
  }

  // define methods with arrow function
  public static print_count = () => {
    console.log(Shape.#count);
  }
}

console.log(Shape.num_peak);
Shape.num_peak = 100;
Shape.print_num_peak();
Shape.print_color();
Shape.print_count();