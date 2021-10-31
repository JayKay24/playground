const https = require("https");

function* rangeGenerator(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

function* flatArrayGenerator(arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* flatArrayGenerator(element);
    } else {
      yield element;
    }
  }
}

function* sumGenerator() {
  let sum = 0;

  while (true) {
    let nextValue = yield sum;
    sum += nextValue;
  }
}

function* sumGenerator2() {
  let sum = 0;

  while (true) {
    try {
      let nextValue = yield sum;
      sum += nextValue;
    } catch (error) {
      sum = 0;
    }
  }
}

function trueRandom(handler) {
  const url = `https://www.random.org/integers/?num=1&min=1&max=1000000000&col=1&base=10&format=plain&rnd=new`;

  https
    .get(url, (res) => {
      console.log(`Status code: ${res.statusCode}`);

      res.on("data", (d) => {
        handler(parseInt(d));
      });
    })
    .on("error", (e) => {
      console.error(e);
    });
}

function* main() {
  const first = yield nextTrueRandom();
  const second = yield nextTrueRandom();
  const third = yield nextTrueRandom();

  console.log(`first + second + third = ${first + second + third}`);
}

const iter = main();

function nextTrueRandom() {
  trueRandom((receivedValue) => iter.next(receivedValue));
}
