/**
 * ? Composing type
 */

//! Unions
type Flag = true | false;
type Option = 1 | 2 | 3;

let first_flag : Flag = true; 
console.log('first_flag:', first_flag, '\ttype:', typeof first_flag);

// first_flag = 'hello'; // --> Error because Flag is only True or False

first_flag = false;
console.log('first_flag:', first_flag, '\ttype:', typeof first_flag);

let opt : Option = 2;
console.log('opt:', opt, '\ttype:', typeof opt);

function getLength(obj: string | string[]) {
  return obj.length;
}

console.log(getLength('Hello'));
console.log(getLength(['Hello world', 'Petter', 'Mary']));

//! Generics
type NumberArray = Array<number>;
const arr : NumberArray = [1, 2, 3];
console.log('arr:', arr, '\ttype:', typeof arr);

//! Structural type system
interface Point {
  x: number; 
  y: number;
}

const logPoint = (p : Point) => { console.log(`Point: (${p.x}, ${p.y})`); }

const my_point = { x: 100, y: 200};

logPoint(my_point);

class SupperPoint {
  x: number; 
  y: number; 
  constructor(x: number, y: number) {
    this.x = x; 
    this.y = y;
  }
}

const new_point = new SupperPoint(45, 88);
logPoint(new_point);
