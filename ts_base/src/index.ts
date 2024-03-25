// import { getResult } from './01basicDataType';
// import { unionAndAssertion } from "./02unionAndAssertion";
// import { fnCallback } from "./03Function"

// 类本身就可以充当类型,可以描述实例(类的类型)

// ts中要求所有的属性,必须先声明(采用修饰符来声明)
class Circle {
  public x!: number; // !非空断言,目前没有,以后会有
  public y?: number; // ?参数可有可无
  constructor(x: number, y?: number) {
    // 构造函数就是函数,用法同函数
    this.x = x;
    this.y = y || 100;
  }
}

// public 公开属性 (父,子,外界都能访问)  默认就是public
// protected 受保护的
// private 私有的(只能我自己访问)
// readonly 仅读属性,只能初始化的时候赋值,后续不能更改(类似于const)

class Animal {
  // 声明类上的变量
  // public name: string;
  // public age: number;
  #xxx = 'abc'; // 私有属性  js语法
  constructor(public name: string, public age: number) {
    // 这样写相当于给类上声明变量和赋值
    // 给类上的变量赋值
    // this.name = name;   // readonly 初始化后不能在修改
    // this.age == age;
  }
}
class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
    this.name; // 子可以访问父属性
  }
}
const cat = new Cat('cat', 100);
console.info(cat['name']); // this['name'] 在private使用此方式可以访问私有属性,绕过TS检测

// 类的功能  主要是实例属性 原型属性 静态属性 属性访问器

// 属性访问器
class AnimalAll {
  static aaa = '地球';
  static getAAA() {
    this.aaa;
  }
  private _sound!: string;
  constructor(public name: string, public age: number) {}
  get sound() {
    return this._sound;
  }
  set sound(value: string) {
    this._sound = value;
  }
  eat(food: string) {
    console.log('正在吃' + food);
  }
}
class Dog extends AnimalAll {
  constructor(public name: string, public age: number) {
    super(name, age);
  }
  static getAAA() {
    console.log('AAA');
    return super.getAAA(); // super指向父类
  }
  eat(food: string): void {
    // 当前子类重写父类,要兼容父类的类型

    // 也可以调用super
    super.eat('鱼儿'); // super指向实例
  }
}

let dog = new Dog('狗', 3);
dog.sound = '狗狗叫'; // 属性访问器
dog.eat('狗梁'); // 原型方法
console.log(Dog.getAAA()); // 静态属性与静态方法

// super 原型方法中指向实例  构建函数和静态方法中指向父类

// 原型方法

export {};
