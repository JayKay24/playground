/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
function classConstructorDec(constructor: Function) {
  console.log(`constructor: ${constructor}`);
  constructor.prototype.testProperty = 'testProperty_value';
}

@classConstructorDec
export class ClassWithConstructor {
  constructor(id: number) {}
}

const classInstance = new ClassWithConstructor(1);
console.log(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  `classInstance.testProperty = ${(<any>classInstance).testProperty}`
);
