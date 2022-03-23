/**
 * ? Array and Collection
 */

//! Array
let arr: number[] = [1, 2, 3, 4, 5];
console.log("array = ", arr);

let arrList: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("array list =", arrList);

let arrUser: Array<string> = ['Petter', 'Marry', 'Henry'];
console.log("Array of user =", arrUser);

//! Tuple
let student: [number, string];
student = [1, 'Petter'];
console.log("Student =", student);
console.log("ID =", student[0]);
console.log("Name =", student[1]);
console.log("First character of student name: ", student[1][0]);
console.log("Sub-string of student name: ", student[1].substring(1));

//! Enum
enum Color { Red, Green, Blue };
let c_1 : Color = Color.Red;
let c_2 : Color = Color.Green;

console.log("c_1 =", c_1);
console.log("c_2 =", c_2);

enum Type { 
  small   = 30, 
  medium  = 40, 
  large   = 50
}

let product : Type = Type.medium
console.log("Type of product =", product);

let name_of_type : string = Type[50];
console.log("Name of type =", name_of_type);