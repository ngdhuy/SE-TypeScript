/**
 * ? Overriding methods
 */

class Animal {
  _name : string = 'no-name';

  constructor(name? : string) {
    if(name !== undefined)
      this._name = name;
  }

  get name() { return this._name; }
  set name(value: string) {
    if(value !== undefined)
      this._name = value;
  }

  talk() { console.log('Animal are talking'); }
}

class Cat extends Animal {
  constructor() { super('Cat'); }
  talk(message?: string) {
    if(message === undefined)
      super.talk();
    else
      console.log(`Meo meo talk: ${message}`);
  }
}

const cat : Cat = new Cat(); 
cat.talk();
cat.talk('OK OK')