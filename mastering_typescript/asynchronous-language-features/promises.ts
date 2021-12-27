function delayedResponseWithCallback(callback: () => void) {
  function executeAfterTimeout() {
      console.log(`5. executeAfterTimeout()`);
      callback();
    }
  
  console.log(`2. calling setTimeout`);
  setTimeout(executeAfterTimeout, 1000);
  console.log(`3. after calling setTimeout`);
}
function callDelayedAndWait() {
  function afterWait() {
      console.log(`6. afterWait()`);
    }
  
  console.log(`1. calling delayedResponseWithCallback`);
  delayedResponseWithCallback(afterWait);
  console.log(`4. after calling delayedResponseWithCallback`);
}


callDelayedAndWait();
callDelayedAndWait();
function fnDelayedPromise(
  resolve: () => void,
  reject: () => void) {
    function afterTimeout() {
        resolve();
      }
    
    setTimeout(afterTimeout, 1000);
}

function delayedResponsePromise(): Promise<void> {
  return new Promise<void>(fnDelayedPromise);
}
delayedResponsePromise().then(() => console.log(`delayed promise returned`));
function errorPromise(): Promise<void> {
  return new Promise<void>((resolve: () => void, reject: () => void) => {
      console.log(`2. calling reject()`);
      reject();
      });
 }
errorPromise().then(() => {}).catch(() => console.log(`3. caught an error`));
console.log(`1. calling errorPromise()`);
errorPromise().then(() => {}).catch(() => console.log(`3. caught an error`));
function promiseReturnString(throwError: boolean): Promise<void> {
function promiseReturnString(throwError: boolean): Promise<string> {
  return new Promise<string>((resolve: (outputValue: string) => void, reject: (errorCode: number) => void) => {
      if (throwError) {
          reject(101);
        }
      
      resolve(`resolve with message`);
      });
}
console.log(`1. calling promiseReturnString`);

promiseReturnString(false).then((returnValue: string) => console.log(`2. returnedValue: ${returnValue}`)).catch((errorCode: number) => console.log(`this is not called`));
promiseReturnString(true)
  .then((outputValue: string) => console.log(`this is not called`))
  .catch((errorCode: number) => console.log(`2. caught : ${errorCode}`));