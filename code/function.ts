/**
 * 函数声明的方式定义函数
 * 输入多余的、少于要求的参数，都是不被允许的
 */
function sum(x: number, y: number): number {
  return x + y;
}

/**
 * 函数表达式的方式定义函数
 * 只对等号右边进行了类型定义，
 * 等号左边是通过赋值操作进行了类型推论
 */
let mySum = function (x: number, y: number): number {
  return x + y;
}

/**
 * 函数表达式的方式定义函数
 * 对等号左边也进行类型定义
 */
let mySum2: (x: number, y: number) => number
  = function (x: number, y: number): number {
    return x + y;
  }

/**
 * 使用接口定义函数的形状
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1
}