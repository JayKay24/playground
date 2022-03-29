const bar = () => console.log('bar');
const baz = () => console.log('baz');
const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  new Promise((resolve, reject) => resolve('should be right after baz')).then(result => console.log(result));
  baz();
};
