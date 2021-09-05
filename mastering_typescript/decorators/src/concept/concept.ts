function simpleDecorator(constructor: Function) {
  console.log('simpleDecorator called');
}

function secondDecorator(constructor: Function) {
  console.log('secondDecorator called');
}

function classDecorator(constructor: Function) {}

function propertyDecorator(target: any, propertyKey: string) {}

function methodDecorator(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor
) {}

function parameterDecorator(
  target: any,
  methodName: string,
  parameterIndex: number
) {}

@classDecorator
class ClassWithAllTypesOfDecorators {
  @propertyDecorator
  id = 1;

  @methodDecorator
  print() {}

  setId(@parameterDecorator id: number) {}
}

// @simpleDecorator
// class ClassWithSimpleDecorator {}

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators {}

// const instance_1 = new ClassWithSimpleDecorator();
// const instance_2 = new ClassWithSimpleDecorator();

// console.log(`instance_1: ${JSON.stringify(instance_1)}`);
// console.log(`instance_2: ${JSON.stringify(instance_2)}`);
