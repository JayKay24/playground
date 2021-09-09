/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
function metadataParameterDec(
  target: any,
  methodName: string,
  parameterIdx: number
) {}

class ClassWithMetadata {
  print(@metadataParameterDec id: number, name: string) {}
}
