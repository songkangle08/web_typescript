class Animal {
  constructor(public name: string, public age: number) {}
}

class Person {
  constructor(public name: string, public age: number) {}
}
// type IClazz = new (name: string, age: number) => any;
interface IClazz<T> {
  new (name: string, age: number): T;
}

function createInstance<T>(target: IClazz<T>, name: string, age: number) {
  return new target(name, age);
}

// ts 中在使用的时候确定类型,可以通过泛型(传递的是类型)   T K U
const animal = createInstance<Animal>(Animal, 'cat', 18);

// 根据提供的数据生成对应长度的数组
function createArray<U>(len: number, val: U) {
  let result = [] as U[]; // 限制了一下
  for (let i = 0; i < len; i++) {
    result.push(val);
  }
  return result;
}
let r = createArray(3, 'abc');

// 2个泛型
type ISwap = <T, K>(tuple: [T, K]) => [K, T];
function swap<T, K>(tuple: [T, K]): [K, T] {
  return [tuple[1], tuple[0]];
}
let s = swap(['abc', 123]);

// 泛型使用的时候传递类型,可以之间推导,但是内部调用的时候没有确定的类型
// type ICallback = <T>(item: T, index: number) => void;  // 这种是在函数执行的时候传递的类型
// type IForEach = <T>(arr: T[], callback: ICallback) => void;

type ICallback<T> = (item: T, index: number) => void; // 这种是直接把最外面的类型传递进来
type IForEach = <T>(arr: T[], callback: ICallback<T>) => void;
const forEach = <T>(arr: T[], callback: (item: T, index: number) => void) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};

forEach([1, 2, 3, 'a', 'b', 'c'], function (item, index) {});

/*
  // 写在前面,就是表示使用类型的时候传参
  type ICallback<T> = (item: T, index: number) => void; // 这种是直接把最外面的类型传递进来
  type IForEach = <T>(arr: T[], callback: ICallback<T>) => void;
  const forEach = <T>(arr: T[], callback: (item: T, index: number) => void) => {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  };
  
  // 写在函数的前面意味着调用函数的时候传递参数
  type ISwap = <T, K>(tuple: [T, K]) => [K, T];
  function swap<T, K>(tuple: [T, K]): [K, T] {
    return [tuple[1], tuple[0]];
  }
  let s = swap(['abc', 123]);
*/

// 泛型是有默认值的
// 在使用一些联合类型的时候，会使用泛型
type Union<T = boolean> = T | number | string;
let unicon: Union = true;

// 泛型约束：要求传递的参数必须符合要求  A extends  B （A是B的子类型，或者同类型）
function handle1<T extends string | number>(val: T): T {
  return val;
}
let h = handle1('abc');

interface IWithLen {
  length: number;
}
// 什么叫子，什么叫父； 对于对象而言，儿子的类型结构比父亲的多
function handle2<T extends IWithLen>(val: T) {
  // 只要泛型中有leng属性就行
  return val.length;
}
handle2({ a: 1, b: 1, length: 2 });

function getVal<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
getVal({ name: 'skl', age: 28 }, 'age');

interface ILoginData {
  token: string;
  roles: number[];
}
interface IResponse<T> {
  code: number;
  message?: string;
  data: T;
}
// 通过泛型坑位，来占位置
function toLogin(): IResponse<ILoginData> {
  return {
    code: 200,
    data: {
      token: 'token',
      roles: [1, 2, 3],
    },
  };
}

let obj = { a: 1, b: '123' };
type IObj = typeof obj;
type IObjKey = keyof IObj;

export {};
