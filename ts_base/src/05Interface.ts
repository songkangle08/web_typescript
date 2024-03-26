// 接口:对行为的抽象
// 接口不能有具体的实现,可以用于描述对象,函数,类,混合类型

// 描述函数

// type IFullname = {
//   firname: string;
//   lastname: string;
// };
// type IFn = (obj: IFullname) => string;
// const fullname: IFn = ({ firname, lastname }: IFullname): string => {
//   return firname + lastname;
// };

// type 和 interface 的区别
// 1. 如果只是用来描述结果我们采用interface
// 2. 如果涉及到联合类型,则只能采用type来进行声明
// 3. type不能被扩展,interface是可以扩展的
// 4. type不能重名,interface可以重名并合并内容
// 5. type可以使用循环和条件,interface不行
// 6. 其他情况下无所谓,可以互换.(函数一般采用type来声明,对象全部用interface)

// 可以通过接口来声明混合类型
// type IFn = {
//   (): number;
//   count: number;
// };
interface IFn {
  (): number; // 函数
  count: number; // 函数的属性
}
const click: IFn = () => {
  return click.count++;
};
// 为了防止这个click函数被重新赋值,let是可以修改的,如果用const就不一样了.const不能被修改
click.count = 0;

// 一般情况下,使用接口大概率都是描述对象的
{
  interface IVeg {
    // 接口中声明的都是抽象的,而且必须要实现
    readonly color: string;
    size: number;
    taste?: 'sweet' | 'sour'; // 可选属性
  }

  const tomato: IVeg = {
    color: 'red',
    size: 20,
    taste: 'sour',
  };
  // tomato.color = 'green';  // 仅读属性,不能随意修改
}

interface IVeg {
  // 接口中声明的都是抽象的,而且必须要实现
  readonly color: string;
  size: number;
  taste?: 'sweet' | 'sour'; // 可选属性
  [key: string]: any; // 任意属性,可以类型为string时,可以赋值number number Symbol
}
const tomato: IVeg = {
  color: 'red',
  size: 20,
  taste: 'sour',
  aa: 1, // 如何解决多的属性,让他可以赋值给IVeg
};

// 1. 如果对象中的属性多于接口可以之间采用断言的方式来赋值   as IVeg
// 2. 可以基于接口的特性,再写一个同名接口(不推荐)
// 3. 产生新类型,通过继承原有的属性的方式
// 4. 类型兼容
// 5. 交叉类型
// 6.  [key: string]: any; // 任意类型来扩展  (常用的用于一部分固定,一部分不固定)

interface Person {
  name: string;
  [key: string]: string; // 值只能时string
}
let p: Person = {
  name: 'skl',
  age: '20',
};

// 数字索引
interface IArr {
  [key: number]: any;
}
let arr1: IArr = { 0: 1, 1: 2, 2: 3 }; // 限制索引只能时数字
let arr2: IArr = [1, 2, 3];

// 通过索引访问符,可以取值的类型
type PersonNameType = Person['name'];
type PersonAnyType = Person[string];

// keyof  取一个对象的所有的key
// 取一个对象中key的集合    valueOf(自己实现) 取值的类型集合
interface ICar {
  color: string;
  a: 1;
  b: 2;
}
type ValueOf = ICar[keyof ICar]; // 通过索引操作符 取值的集合

/*
  接口  readonly  ? 任意类型[key:string]:any   接口[属性key]
*/

interface ChineseSpeakable {
  a: 1;
  speakChinese(): void;
}
interface EnglishSpeakable {
  speakEnglish(): void;
}

class Speak implements ChineseSpeakable, EnglishSpeakable {
  a!: 1;
  speakEnglish(): void {
    throw new Error('Method not implemented.');
  }
  speakChinese(): void {
    throw new Error('Method not implemented.');
  }
}

// 接口可以被类实现多个接口,描述类中的原型方法和实例属性

export {};
