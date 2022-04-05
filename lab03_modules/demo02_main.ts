/**
 * ? define main function for namespace
 */

/// <reference path="demo02_namespace.ts" />

import { MyLib } from "./demo02_namespace";

const fraction : MyLib.Fraction = new MyLib.Fraction(1, 2);
console.log(fraction.to_string());
console.log(`PI = ${MyLib.PI}`);
