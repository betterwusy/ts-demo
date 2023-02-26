/** 1. 
 * 定义一个类装饰器，它可以接收类的构造函数作为参数
 * @param target 类的构造函数
 */
const watcher1: ClassDecorator = (target: Function) => {
  target.prototype.getParams = <T>(params: T): T => {
    return params;
  }
}
@watcher1
class A {
  constructor() { }
}
const a: A = new A();
console.log((a as any).getParams('name'))

/** 2. 
 * 装饰器工厂，高阶函数的写法
 */
const watcher2 = (name: string): ClassDecorator => {
  return (target: Function) => {
    target.prototype.getOptions = (): string => {
      return name;
    }
    target.prototype.getParams = <T>(params: T): T => {
      return params;
    }
  }
}

/**
 * 3. 可以多个装饰器组合在一起
 * @watcher, @wacher2,
 * class A {
 *    // ...
 * }
 */

/**
 * 4. 方法装饰器
 * 
 */
import axios from 'axios'
import 'reflect-metadata'
const Get = (url: string): MethodDecorator => {
  return (target, _, descriptor: PropertyDescriptor) => {
    const key = Reflect.getMetadata('key', target)
    axios.get(url).then(res => {
      descriptor.value(key ? res.data[key] : res.data)
    })
  }
}

/**
 *  5. 参数装饰器
 */
const Result = () => {
  const fn: ParameterDecorator = (target, key, index) => {
    Reflect.defineMetadata('key', 'result', target)
  }
  return fn;
}
class C {
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(@Result() data: any) {
    // console.log(data);
  }
}
const c = new C();
(c as any).getList();

/**
 *  6. 属性装饰器
 */
const Name: PropertyDecorator = (target, key) => {
  key = 'test2'
}
class D {
  @Name
  public name = 'test';
  constructor() { }
}
const d : D = new D();
console.log(d.name);
