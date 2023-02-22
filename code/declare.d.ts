// declare var
declare const jQuery: (selector: string) => any

// declare function
declare function jQuery(selector: string): any
// 支持函数重载的声明
declare function jQuery(domReadyCallback: () => any): any

// declare class
// declare class Animal {
//   name: string;
//   constructor(name: string);
//   sayHi(): any;
// }