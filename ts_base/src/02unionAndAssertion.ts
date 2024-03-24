// 类型推导: 以赋予的值的结果,来进行推导
// let name = 'skl';
// let age = 30;

// let const 区别
const age1 = 30; // 如果用常量,来自动推导类型就是字面量类型

let name: string | number;

// 默认没有赋值的时候,联合类型可以调用公告的方法, why ? 为了安全,所以只能访问公共长度属性.
// name.toLocaleString

name = 'skl';
name.toLowerCase();

name = 123;
name.toFixed(); // 复制后会推断类型

// 联合类型 一般会基于联合类型来扩展额外的类型

// 字面量类型
type Direction = 'up' | 'down' | 'right' | 'left'; // ts写法
let direction: Direction = 'left';

// type中定义的时类型,不是js中的对象
type women =
  | {
      wealthy: true;
      waste: string;
    }
  | { wealthy: false; norality: string };

let richWoman: women = {
  wealthy: true,
  waste: '购物消费',
};
let poorWomen: women = {
  wealthy: false,
  norality: '勤俭持家',
};
// 可以利用联合类型来醉倒属性之间的互斥.(可辨识类型)

// 断言(非空断言,这个值一定不为空,绕过TS检测)
let ele = document.getElementById('app');
ele!.style.background = 'red'; // ts
// ele?.style.background  // js语句 可选链操作符号

// as 断言 可以强制把某个类型断言成已经存在的类型
let ele1: HTMLElement | null = document.getElementById('app');
(ele as HTMLElement).style.background = 'blue';
(<HTMLElement>ele).style.background = 'green'; // 不推荐使用,会和jsx语法冲突

// 断言出问题了,后果需要自负, 有可能会出问题(你觉得不会出问题)

// 双重断言 我们可以把一个值断言成any 在断言成某个类型
// any类型可以赋予给任何类型
let str: string | number;
str! as any as boolean;

// js的语法

// ?? 空值合并操作符号,除了null和undefined,都会返回左边的值.
false || '1'; // || 第一个值不是""| null| undefined|0|false,就返回前面的值,如果是,就返回后面的值.
false ?? 1; // ??  第一个值不是null或者undefined,就返回前面的值,如果时null或者undefined,就返回后面的值

function unionAndAssertion() {}
export { unionAndAssertion };
