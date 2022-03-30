/**
 * ? Interface - define Object type
 */

interface Product {
  id    : number; 
  name  : string;
  price : number;
}

let p : Product = {
  id: 1, 
  name: 'iPhone 14', 
  price: 999
}

console.log(p);

//! Optional in interface
interface MyPoint {
  x : number; 
  y : number; 
  z?: number;
}

function printPoint(point : MyPoint) : void {
  if(point.x)
    console.log("x:", point.x);
  if(point.y)
    console.log("y:", point.y);
  if(point.z)
    console.log("z:", point.z);
}

let my_point : MyPoint = {
  x : 100, 
  y : 200, 
  z : 99
}

printPoint(my_point);
printPoint({x: 55, y: 88} as MyPoint);