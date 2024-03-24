// ts 学习的就是类型，类型就是核心

// ts 中的类型分类：内置类型（DOM、Promise、原始类型） 、基础类型 、高级类型、自定义类型

// ts中：后面的都是类型  =后面的都是值（在js语法中）

// 1. ts 一切从安全的角度出发，看能不能赋值 就看安全不安全
// 2. ts在编写的时候，代码时没有执行的
// 3. ts还有自动的类型推导,不用见到变量就写类型,而是推断的不正确,我们才需要自己来编写

// 基础类型都是小写(string、number)
let name: string = 'skl';
let age: number = 28;
let isFlag: boolean = true;

// 存储多个相同类型的集合
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ['1', '2', '3'];
let arr3: (number | string)[] = ['1', 2, '3'];
let arr4: Array<number | string> = [1, 2, '3'];

// 元组 规定长度和存储的类型
let tuple1: [string, number, boolean] = ['skl', 28, true];
// 添加只能添加元组中已经存在的类型
tuple1.push('abc');
// tuple1[3]; //报错:
let tuple2: readonly [string, number, boolean] = ['skl', 28, true];
// tuple2.push("11"); // 报错

// 枚举menu  自带类型的对象,自动增长.  数字类型的枚举,可以反举
enum User_RoleE {
  USER,
  ADMIN,
  MANAGER,
  OTHER = 'abc', // 异构枚举(既有数字,又有字符串)
}
// 如果不需要对象,如果值式使用值,可以采用常量常量枚举,否则用普通枚举
const enum User_RoleE1 {
  USER,
  ADMIN,
}

// null 和 undefined
// 任何类型的字类型
// 一般情况下,都是严格模式,null只能赋值null; undefined只能赋值undefined
// 非严格模式下,null和undefined可以赋值给任意类型
// let str: string = null; // 报错

// 在TS中.null和undefined的区别??

// void 代表函数的返回值为空,只在函数中使用
function fn(): void {
  return undefined;
}

// never 类型
// 任何类型的字类型

function fn1(): never {
  throw new Error();
  // while (true) {}
}
// 类型保护, 保障程序的不缺失;  保护代码的完整性
// 针对不同的类型做不同的处理
function validate(val: never) {}
function getResult(stringOrNumberOrBoolean: string | number | boolean) {
  // typepf 有收窄的功能
  if (typeof stringOrNumberOrBoolean === 'string') {
    // 对string的逻辑处理
    return;
  } else if (typeof stringOrNumberOrBoolean === 'number') {
    // 对number的逻辑处理
    return;
  } else if (typeof stringOrNumberOrBoolean === 'boolean') {
    // 对number的逻辑处理
    return;
  }

  //
  validate(stringOrNumberOrBoolean); // 对类型保护
}

let unicon: string | number | boolean | never; // never和其他类型做联合类型最终是不显示的

/*
  基本类型：
  string、number、boolean、array、tuple、null、undefined、void、never
*/

// 模块之间的隔离
export { getResult };
