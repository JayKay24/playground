/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';

function reflectParameterDec(
  target: any,
  methodName: string,
  parameterIdx: number
) {
  const designType = Reflect.getMetadata('design:type', target, methodName);
  console.log(`design type : ${designType.name}`);

  const designParamTypes = Reflect.getMetadata(
    'design:paramtypes',
    target,
    methodName
  );

  for (const paramType of designParamTypes) {
    console.log(`param type : ${paramType.name}`);
  }

  const designReturnType = Reflect.getMetadata(
    'design:returntype',
    target,
    methodName
  );
  console.log(`return types : ${designReturnType.name}`);
}

class ClassWithReflectMetadata {
  print(@reflectParameterDec id: number, name: string): number {
    return 1000;
  }
}
