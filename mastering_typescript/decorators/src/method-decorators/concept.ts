/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
function methodDec(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {
  console.log(`target: ${target}`);
  console.log(`methodName: ${methodName}`);
  console.log(`descriptor: ${JSON.stringify(descriptor)}`);
  console.log(`target[methodName]: ${target[methodName]}`);
}

export class ClassWithMethodDec {
  @methodDec
  print(output: string) {
    console.log(`ClassWithMethodDec.print (${output}) called.`);
  }
}
