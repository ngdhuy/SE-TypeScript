/**
 * ? Main files
 */

// import * from './demo01_modules.ts';
import sayHello, {pi, double, Shape as SupperShape} from "./demo01_modules";
sayHello()
console.log(`PI = ${pi}`);
console.log(`Double of 4 is ${double(4)}`);
const shape : SupperShape = new SupperShape('Green');
console.log(shape.color);
