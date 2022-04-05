/**
 * ? Define namespace
 */

export namespace MyLib {
  export const PI : number = 3.14;
  export const double = (value : number) : number => 2 * value;
  export class Fraction {
    #num : number; 
    #dec : number; 

    constructor(num : number, dec : number) {
      this.#num = num;
      if(dec !== 0)
        this.#dec = dec; 
      else
        this.#dec = 1;
    }

    get num() { return this.#num; }
    get dec() { return this.#dec; }
    set num(value) { this.#num = value; }
    set dec(value) { this.#dec = value !== 0 ? value : this.#dec; }
    
    public to_string() : string { return `(${this.#num}/${this.#dec})`; }
  }
}