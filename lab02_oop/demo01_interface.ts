/**
 * ? Interface type
 */

//! Type by inference
let strHello = 'Hello world'; 
console.log('strHello =', strHello, '\ttype:', typeof strHello);

let nValue = 1.1; 
console.log('nValue =', nValue, '\ttype:', typeof nValue);

//! Define type

const user = {
  id: 1, 
  name: "Petter"
};

// user is the object type
console.log('User =', user, '\ttype:', typeof user);

//! Define Product type
interface Product {
  id: number;
  name: string; 
  price: number;
};

// check p have type look like as interface Product Pattern
const p : Product = {
  id: 1, 
  name: "macBook Pro M1 Pro", 
  price: 1000
};
 // p is still object type
console.log('p:', p, '\ttype:', typeof p);