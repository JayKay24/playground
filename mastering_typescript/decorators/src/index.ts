/* eslint-disable @typescript-eslint/no-unused-vars */
function decoratorFactory(name: string) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (constructor: Function) => {
    console.log(`Decorator function called with: ${name}`);
  };
}

@decoratorFactory('testName')
class ClassWithDecoratorFactory {}
