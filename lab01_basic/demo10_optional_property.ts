/**
 * ? Optional property
 */

function Calculator(a: number, b?:number ) : void {
  console.log('A:', a);
  if(b !== undefined)
    console.log('B:', b);
}

Calculator(10, 20);
Calculator(10);