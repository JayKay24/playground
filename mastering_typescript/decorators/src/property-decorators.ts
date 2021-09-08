/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export function propertyDec(target: any, propertyName: string): void {
  console.log(`target: ${target}`);
  console.log(`target.constructor: ${target.constructor}`);
  console.log(`propertyName: ${propertyName}`);
}

class ClassWithPropertyDec {
  @propertyDec
  nameProperty: string | undefined;
}
