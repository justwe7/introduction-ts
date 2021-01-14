type FooR = {
  bar: number;
  bas: number;
};

type FooReadonly = Readonly<FooR>;

const foo222: FooR = { bar: 123, bas: 456 };
const fooReadonly: FooReadonly = { bar: 123, bas: 456 };

foo222.bar = 456; // ok
// fooReadonly.bar = 456; // Error: bar 属性只读
let foo333: ReadonlyArray<number> = [1, 2, 3];
console.log(foo333[0]); // ok
// foo333.push(4); // Error: ReadonlyArray 上不存在 `push`，因为他会改变数组
foo333 = foo333.concat(4); // ok, 创建了一个复制

interface Foo444 {
  readonly bar: number;
}

let foo444: Foo444 = {
  bar: 123
};

const aaa = JSON.parse(JSON.stringify(foo444))
aaa.bar = 333
