/**
 * ? Define scope for methods and property
 */

class Animal {
  private _name : string = 'no-name';

  constructor(name? : string) {
    if(name !== undefined)
      this._name = name;
  }

  get name() { return this._name; }
  set name(value: string) {
    if(value !== undefined) 
      this._name = value;
  }

  public to_upper() : void { this._name = this._name.toUpperCase(); }
  protected to_lower() : void { this._name = this._name.toLocaleLowerCase(); }
}

class Dog extends Animal {
  // define private scope for property with # refix_property_name
  #_color: string = 'no-color';
  
  constructor(name? : string, color? : string) {
    super(name);
    if(color !== undefined)
      this.#_color = color;
  }

  get color() { return this.#_color; }
  set color(value: string) {
    if(value !== undefined)
      this.#_color = value;
  }

  public get_name_lowercase() {
    this.to_lower();
    return this.name;
  }
}

const animal : Animal = new Animal('Corgi');
console.log(animal);
animal.to_upper();
console.log(animal);

const dog : Dog = new Dog('Pug', 'Gray');
console.log(dog);
console.log(dog.get_name_lowercase());