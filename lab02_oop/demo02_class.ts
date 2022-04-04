/**
 * ? Class vs Interface
 */

//! define interface
interface User {
  id  : number; 
  name: string;
};

const u : User = {
  id  : 1, 
  name: 'Mary' 
};

console.log('u:', u, '\ttype:', typeof u); // u is object type

//! define class
class Student {
  id : number; 
  name: string;

  constructor(id: number, name: string) {
    this.id   = id; 
    this.name = name;
  }
};

const s : Student = new Student(1, 'Petter');
console.log('s:', s, '\ttype:', typeof s);

//! class implement from interface
interface Obj {
  id  : number; 
  name: string;
};

class Car implements Obj {
  id  : number; 
  name: string;
  color: string;

  constructor(id: number, name: string, color: string) {
    this.id = id; 
    this.name = name;
    this.color = color;
  }
}

class Animal implements Obj {
  id: number; 
  name: string;

  constructor(id: number, name: string) {
    this.id = id; 
    this.name = name;
  }
}

const car_1 : Car = new Car(1, 'SUV', 'Red'); 
const car_2 : Car = new Car(2, 'Sedan', 'Blue');
const animal: Animal = new Animal(3, 'Corgi');

console.log('Car_1:', car_1);
console.log('Car_2:', car_2);
console.log('Animal:', animal);

//! Define object with interface but use patter of Object Class
interface Person {
  pid : number; 
  name: string; 
}

class SupperMan {
  pid : number; 
  name: string; 

  constructor(pid: number, name: string) {
    this.pid = pid; 
    this.name = name; 
  }
}

const mrSpiderMan : Person = new SupperMan(1007, 'Spider Man');
console.log('mrSpiderMan:', mrSpiderMan, '\ttype:', typeof mrSpiderMan);