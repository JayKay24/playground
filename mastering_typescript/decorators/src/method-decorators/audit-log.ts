/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
function auditLogDec(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {
  const originalFunction = target[methodName];

  const auditFunction = function (this: any) {
    console.log(`1. auditLogic : overide of ${methodName} called`);

    for (let i = 0; i < arguments.length; i++) {
      console.log(`2. arg : ${i} = ${arguments[i]}`);
    }

    originalFunction.apply(this, arguments);
  };

  target[methodName] = auditFunction;
  return target;
}

export class ClassWithAuditDec {
  @auditLogDec
  print(arg1: string, arg2: string) {
    console.log(`3. ClassWithAuditDec.print (${arg1}, ${arg2}) called.`);
  }
}

const auditClass = new ClassWithAuditDec();
auditClass.print('test1', 'test2');
