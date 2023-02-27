namespace A {
  interface A {
    name: string,
    age: number
  }
  interface B {
    name: string,
    age: number,
    sex: string
  }
  let a: A = {
    name: 'Chris',
    age: 18,
  }
  let b: B = {
    name: 'Tom',
    age: 20,
    sex: 'male'
  }

  /** 
   * 协变： 
   * 因为 b 的属性跟 a 相同且比 a 多，
   * 所以将 b 赋给 a 是安全的
   */
  a = b;


  /**
   * 逆变
   * 将函数 fnA 赋给 fnB，即执行 fnB 就是执行 fnA，
   * 函数 fnA 接收的参数 A 类型的属性比较少，
   * 函数 fnB 接收的参数 B 类型的属性比较多
   * fnB 现在只需要接收更少参数了，所以是安全的
   */
  let fnA = (a: A): void => { }
  let fnB = (b: B): void => { }
  fnB = fnA
}

