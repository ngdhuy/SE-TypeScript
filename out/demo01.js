"use strict";
/**
 * ? Basic types of Typescript
 */
//! boolean
let isDone = false;
console.log("isDone = ", isDone);
//! number
let decimal = 6;
let hex = 0xf000d; // convert to decimal
let bin = 0b10101; // convert to decimal
let octal = 0o744; // convert to decimal
console.log("Decimal =", decimal);
console.log("Hex =", hex);
console.log("bin =", bin);
console.log("Octal =", octal);
let big = 100n;
console.log("Bin integer =", big);
//! string
let color = "blue";
color = "red light";
console.log("Color =", color);
//! template string
let first_name = "Nguyen";
let last_name = "Huy";
let full_name = `${last_name} 
${first_name}`;
console.log("Full name is", full_name);
//# sourceMappingURL=demo01.js.map