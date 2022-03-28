/**
 * ? Basic types of Typescript
 */

//! boolean
let isDone: boolean = false;
console.log("isDone = ", isDone);

//! number
let decimal: number = 6;
let hex: number = 0xf000d; // convert to decimal
let bin: number = 0b10101; // convert to decimal
let octal: number = 0o744; // convert to decimal

console.log("Decimal =", decimal);
console.log("Hex =", hex);
console.log("bin =", bin);
console.log("Octal =", octal);

let big: bigint  = 100n;
console.log("Bin integer =", big);

//! string
let color: string = "blue";
color = "red light"; 
console.log("Color =", color);

//! template string
let first_name = "Nguyen"; 
let last_name = "Huy"; 
let full_name = `${last_name} ${first_name}`;
console.log("Full name is", full_name);