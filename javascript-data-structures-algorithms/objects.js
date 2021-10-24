var javascriptObject = {};
var testArray = [1, 2, 3, 4];
javascriptObject.array = testArray;
console.log(javascriptObject);
javascriptObject.title = "Algorithms";
console.log(javascriptObject);
function ExampleClass() {
  this.name = "Javascript";
  this.sayName = function () {
    console.log(this.name);
  };
}

var example1 = new ExampleClass();
example1.sayName();
function ExampleClass2() {
  this.array = [1, 2, 3, 4, 5];
  this.name = "Javascript";
}

var example2 = new ExampleClass2();

ExampleClass2.prototype.sayName = function () {
  console.log(this.name);
};

example2.sayName();
function ExampleClass3(name, size) {
  this.name = name;
  this.size = size;
}

var example3 = new ExampleClass3("Public", 5);
console.log(example3);

// accessing public variables
console.log(example3.name);
console.log(example3.size);
function ExampleClass4(name, size) {
  var privateName = name;
  var privateSize = size;

  this.getName = function () {
    return privateName;
  };
  this.setName = function (name) {
    privateName = name;
  };

  this.getSize = function () {
    return privateSize;
  };
  this.setSize = function (size) {
    privateSize = size;
  };
}

var example4 = new ExampleClass4("Sammie", 3);
example4.setSize(12);

console.log(example4.privateName);
console.log(example4.getName());
console.log(example4.privateSize);
console.log(example4.getSize());
example4.setSize(3);
example4.getSize();
