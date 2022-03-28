/**
 * ? Null and Undefine type in TypeScript
 */

let a : undefined = undefined;
let b : null = null; 

console.log('a:', a);
console.log('b:', b);

//! null and undefine only assign for unknown types
let c : unknown = a;
console.log('c:', c);

c = b; 
console.log('c:', c);

//! Cannot assign null or undefine value for number
// let d : number = null;
// console.log('d:', d);
