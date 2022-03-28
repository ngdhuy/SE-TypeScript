/**
 * ? Unknown types
 */

//! Unknown

let not_sure: unknown = 3;
console.log("not_sure =", not_sure, '\t ->', typeof not_sure);

not_sure = "Hello world!!!";
console.log("not_sure =", not_sure, '\t ->', typeof not_sure);

not_sure = true; 
console.log("not_sure =", not_sure, '\t ->', typeof not_sure);

//! special case of Unknown
const maybe: unknown = true;
// const num: number = maybe;

if(maybe === true) {
  const value_boolean: boolean = maybe;
  console.log("value =", value_boolean, "\t ->", typeof maybe);
}

if(typeof maybe === "string") {
  const value_string: string = maybe;
  console.log("value =", value_string, "\t ->", typeof maybe);
}