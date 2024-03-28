// import { getResult } from './01basicDataType';
// import { unionAndAssertion } from "./02unionAndAssertion";
// import { fnCallback } from "./03Function"
// import { fnCallback } from "./04Class"
// import { fnCallback } from "./05Interface"

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

export {};
