// 函数类型

// 函数function 关键字来定义函数
// 表达式定义 (可以描述变量的类型)
// 函数有入参和返回值 （针对这个部分，掌握类型）
// 函数本身的类型

function sum(a: string, b: string): string {
  return a + b;
}
type ISum = (x: string, y: string) => string;
let sum1: ISum = (a, b) => {
  return a + b;
};
let r = sum('a', 'b');
// 会根据上下文来推导赋予值的类型

// 常见的类型推导的方式
// 1、根据赋值来进行推导
let name = 'skl';
let age = 28;

// 2、会根据返回值来进行推导,自动推导返回值类型
function sum2(a: string, b: string) {}

// 3、会根据上下文来推导赋予值的类型  (根据位置类推导的)a对应的x b对应的y
// type ISum = (x: string, y: string) => string;
// let sum1: ISum = (a, b) => {
//   return a + b;
// };

// 把函数当初回调函数;
type ICallback = (a: string, b: number, c: boolean) => void;
// void 表示不关心返回的具体类型，不检验函数的返回值
function fn(callback: ICallback) {}
fn((x, y, z) => {
  return 'abc';
});

// 函数中的可选参数 (增加? 表示可选 这个只能放在最后)  ？ =（ b: string | undefined）
// 函数中的默认值（增加= 表示默认值）
let sum10 = (a: string = 'a', b?: string) => {
  return a + b;
};
sum10();

// 函数的剩余参数
let total = (...rest: number[]): number => {
  return rest.reduce((memo, current) => ((memo += current), 0));
};

let person = {
  name: 'skl',
  age: 28,
};
// 可以采用ts中的typeof来获取变量的类型

// keyof typeof person    typeof person

type IThis = typeof person; // 拿到对象中的对象类型,取变量的类型
type IthisKey = keyof IThis; // 拿到对象类型中的key,取对象中的key

// ts中this类型需要手动指定,默认是函数的第一个参数
function getVal(this: IThis, key: keyof IThis) {
  // keyof 索引类型查询,只能查询类型
  return this[key];
}
getVal.call(person, 'name');
// getVal.call(person, 'xxx');

// 函数的重载 (一般是有限的操作)  ts中的重载是伪重载(是类型的重载,而不是逻辑的重载)
function toArray(value: number): number[];
function toArray(value: string): string[];
function toArray(value: number | string): string[] | number[] {
  // 123 [1,2,3]  ,  "123"  ["1","2","3"]
  if (typeof value === 'string') {
    return value.split('');
  } else {
    return value.toString().split('').map(Number);
  }
}
let result1 = toArray('123');
let result2 = toArray(123);

// 函数中  参数类型  返回值类型  类型推导方式  可选  默认值  this  剩余运算符  重载

function fnCallback() {}
export { fnCallback };
