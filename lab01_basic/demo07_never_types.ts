/**
 * ? Never - is return type of Exception function (Return or not return)
 */

function show_error(message : string) : never {
    throw new Error(message);
}

function calculator() {
  try {
    show_error("Something is failed");
  } catch {
    console.error();
  }
}

calculator();