/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
function parameterDec(target: any, methodName: string, parameterIdx: number) {
  console.log(`target: ${JSON.stringify(target)}`);
  console.log(`methodName: ${methodName}`);
  console.log(`parameterIdx: ${parameterIdx}`);
}

class ClassWithParameterDec {
  print(@parameterDec value: string) {}
}
