/** 
 * ? Inherit in Class
 */

class Animal {
  _name: string = 'no-name'; 
  constructor(name?: string) { 
    if(name !== undefined)
      this._name = name; 
  }

  // define getter and setter for property name
  get name() { return this._name; }
  set name(value: string) {
    if(value !== undefined)
      this._name = value;
  }
}

// Dog is inherit from Animals
class Dog extends Animal {
  _color: string = 'no-color';
  constructor(name? : string, color? : string) {
    super(name);
    if(color !== undefined)
      this._color = color;   
  }

  get color() { return this._color; }
  set color(value: string) {
    if(value !== undefined)
      this._color = value;
  }
}

const dog_1 : Dog = new Dog();
console.log(dog_1);

const dog_2 : Dog = new Dog('Corgi', 'White Yellow');
console.log(dog_2);

dog_2.name = 'Pug';
console.log(dog_2);