// 类 的定义
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}
let a = new Animal('Jack');
console.log(a.sayHi());

// 类的继承
class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
  sayHi() {
    return `Meow, ` + super.sayHi();
  }
}
let c = new Cat('Tom');
console.log(c.sayHi());

// 存取器
class Animal2 {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return 'name from getter'
  }
  set name(v) {
    console.log('setter: ' + v);
  }
}

// 静态方法
class Animal3 {
  static isAnimal(a) {
    return a instanceof Animal3;
  }
}
