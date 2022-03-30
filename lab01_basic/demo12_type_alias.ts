/**
 * Type alias
 */

//! define the temp type for code ~ Struct in C/c++
type Point = {
  x   : number; 
  y   : number; 
  z?  : number;
}

function printCoord(point : Point) : void {
  console.log("X =", point.x);
  console.log("Y =", point.y);
  if(point.z !== undefined)
    console.log("Z =", point.z);
}

printCoord({x: 10, y: 20});
printCoord({x: 40, y: 50, z: 60});
