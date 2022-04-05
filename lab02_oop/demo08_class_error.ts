/**
 * ? Implement Error handle for class
 */

class MsgErr extends Error {
  constructor(msg: string) {
    super(msg);

    // set the prototype explicitly
    Object.setPrototypeOf(this, MsgErr.prototype);
  }

  print() { return "Error: " + this.message; }
}

const msgErr : MsgErr = new MsgErr('Cannot create instant');
console.log(msgErr.print());