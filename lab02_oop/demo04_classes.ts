/**
 * ? Classes
 */

//! Class member
class Point {
  x : number; 
  y : number;

  // Must have constructor
  constructor(x: number, y: number) {
    this.x = x; 
    this.y = y;
  }
}

const pt : Point = new Point(3, 4); 
pt.x = 100; 
pt.y = 20; 

console.log(pt);

//! Special case of class -> property of class without constructor
class Person {
   name! : string; // optional type
}

const p : Person = new Person();
console.log(p);
p.name = 'Henry';
console.log(p);

//! ReadOnly
class Student {
  readonly name: string = "Petter";

  // only use constructor to initial assign value to readonly property
  constructor(name? : string) {
    if(name !== undefined)
      this.name = name;
  }

  // define error function to handle error of class
  err() {
    console.error('Cannot access readonly property');
  }
}

const s_1 : Student = new Student();
console.log(s_1);

const s_2 = new Student('Marry');
console.log(s_2);

//! Constructors
class Point_2D {
  x : number; 
  y : number; 

  // normal constructor 
  constructor(x: number = 0, y: number = 0) {
    this.x = x; 
    this.y = y;
  }

  //! multiple constructor are not allowed
}

const point_1 : Point_2D = new Point_2D(); 
console.log(point_1);
const point_2 : Point_2D = new Point_2D(3, 4);
console.log(point_2);