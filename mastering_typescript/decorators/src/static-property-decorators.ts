/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
export function propertyDec(target: any, propertyName: string): void {
  if (typeof target === 'function') {
    console.log(`class name: ${target.name}`);
  } else {
    console.log(`class name: ${target.constructor.name}`);
  }

  console.log(`propertyName: ${propertyName}`);
}

class StaticClassWithPropertyDec {
  @propertyDec
  static staticProperty: string;
}
