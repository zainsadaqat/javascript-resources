function ConstructorFunction(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };
  this.getAge = function () {
    return this.age;
  };
}

const newObj = new ConstructorFunction('Zain', 23);
console.log('My Name: ', newObj.getName());
console.log('My Age: ', newObj.getAge());
