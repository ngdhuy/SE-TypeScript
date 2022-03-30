/**
 * ? Union type
 */

function printObject(obj : number | string) : void {
  if(typeof obj === 'string')
    console.log(obj.toUpperCase());
  else
    console.log(obj);
}

printObject(100);
printObject("Hello world!");

//! compare Array[String] with String

function getName(name : string[] | string) : void {
  if(Array.isArray(name))
    console.log(`Name is array string: ${name}`);
  else
    console.log('Name:', name);
    
}

getName(['Hello', 'World', 'Petter', 'Marry']);
getName('NDHuy');