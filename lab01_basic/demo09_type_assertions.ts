/**
 * ? Type Assertions
 */

let strValue : unknown = '4.2';
console.log('value:', strValue, '- type:', typeof strValue);

let value : number = parseFloat(strValue as string);
console.log('value:', value, '- type:', typeof value);