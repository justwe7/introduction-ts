跟着 https://jkchao.github.io/typescript-book-chinese/typings/types.html 学习typescript

### 编译选项
在项目的根目录下创建一个空 JSON 文件。TypeScript 将 会把此目录和子目录下的所有 .ts 文件作为编译上下文的一部分，它还会包含一部分默认的编译选项

一份入门简单可用的配置：
执行 `tsc` 会编译src下的所有文件
```json
{
  "include": [ // 目标编译目录
    "src/**/*"
  ],
  "exclude": [
      "node_modules"
  ],
  "compilerOptions": {
    "lib": [ // 不配置这个可能会报诸如// annot find global type 'Array'. 错误
      "dom",
      "esnext",
      "es2015.promise"
    ],
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outDir": "dist",                        // 指定输出目录
  }
}
```
## 文件模块详情
可以根据不同的 module 选项来把 TypeScript 编译成不同的 JavaScript 模块类型，这有一些你可以忽略的东西：

AMD：不要使用它，它仅能在浏览器工作；
SystemJS：这是一个好的实验，已经被 ES 模块替代；
ES 模块：它并没有准备好。
使用 module: commonjs 选项来替代这些模式，将会是一个好的主意。

怎么书写 TypeScript 模块呢？，这也是一件让人困惑的事。在今天我们应该这么做：

放弃使用 import/require 语法即 import foo = require('foo') 写法
推荐使用 ES 模块语法

### place
什么是 place
当我提及被检查的 place 时，我想表达的是在这个 place 上，TypeScript 将会检查以下内容（例如一个 foo 的 place）：

如果这个 place 表示一个文件，如：foo.ts，欢呼！
否则，如果这个 place 是一个文件夹，并且存在一个文件 foo/index.ts，欢呼！
否则，如果这个 place 是一个文件夹，并且存在一个 foo/package.json 文件，在该文件中指定 types 的文件存在，那么就欢呼！
否则，如果这个 place 是一个文件夹，并且存在一个 package.json 文件，在该文件中指定 main 的文件存在，那么就欢呼！
从文件类型上来说，我实际上是指 .ts， .d.ts 或者 .js

## 重写类型的动态查找
可以通过 declare module 'somePath' 声明一个全局模块的方式，来解决查找模块路径的问题。

**当你从 JS 迁移到 TS 时，定义 declare module "some-library-you-dont-care-to-get-defs-for" 能让你快速开始。**


## 类型系统
> 类型注解使用 :TypeAnnotation 语法。在类型声明空间中可用的任何内容都可以用作类型注解。

```ts
const num: number = 123; // 定义 number 类型变量
function identity(num: number): number { // 接受 number / 返回 number
  return num;
}
```

- 原始类型 `const num: number = 1;`
- 数组 `使用后缀 []， 接着你可以根据需要补充任何有效的类型注解（如：:boolean[]）`
- **接口** `interface Foo {}`
  > 接口是 TypeScript 的一个核心知识，它能合并众多类型声明至一个类型声明
  > 
  > 把类型注解：first: string + second: string 合并到了一个新的类型注解里 Name，这样能强制对每个成员进行类型检查
- 特殊类型
  - any  一个类型系统的「后门」,TypeScript 将会把类型检查关闭。在类型系统里 any 能够兼容所有的类型（包括它自己）
  - null、 undefined 其他被标注了 any 类型的变量一样，都能被赋值给任意类型的变量
  - void 表示一个函数没有一个返回值
- 泛型  例如：在一个函数中，它接受一个列表，并且返回这个列表的反向排序
  > 事实上，JavaScript 数组已经拥有了 reverse 的方法，TypeScript 也确实使用了泛型来定义其结构
  > ```
  > interface Array<T> {
  >   reverse(): T[];
  > }
  > ```
- 联合类型 使用 | 作为标记，如 string | number
- 交叉类型 `<T & U>` 从两个对象中创建一个新对象，新对象拥有着两个对象所有的功能。
- 元组类型 `:[typeofmember1, typeofmember2]` js只能使用数组来表示元组。元租强制数组的内容
- 类型别名 type SomeName = someValidTypeAnnotation 来创建别名


> 如果你需要使用类型注解的层次结构，请使用接口。它能使用 implements 和 extends
> 为一个简单的对象类型（如上面例子中的 Coordinates）使用类型别名，只需要给它一个语义化的名字即可。另外，当你想给联合类型和交叉类型提供一个语义化的名称时，一个类型别名将会是一个好的选择。

## 从 JavaScript 迁移
- 添加一个 tsconfig.json 文件；
- 把文件扩展名从 .js 改成 .ts，开始使用 any 来减少错误；
- 开始在 TypeScript 中写代码，尽可能的减少 any 的使用；
- 回到旧代码，开始添加类型注解，并修复已识别的错误；
- 为第三方 JavaScript 代码定义环境声明。`declare module 'jquery';`

## @types
默认情况下，TypeScript 会自动包含支持全局使用的任何声明定义。例如，对于 jquery，你应该能够在项目中开始全局使用 $。

## 环境声明
TypeScript 的设计目标之一是让你在 TypeScript 中安全、轻松地使用现有的 JavaScript 库，TypeScript 通过声明文件来做到这一点
在项目 `xxx.d.ts`

如果是模块化的话那就放到和源码(A.js)文件同一个目录下,如果是全局变量的话理论上放到哪里都可以 当然除非你在tsconfig.json 文件里面特殊配置过

https://segmentfault.com/a/1190000009247663

## 接口
接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。

类可以继承接口的规则
```
interface Point {
  x: number;
  y: number;
  z: number; // New member
}

class MyPoint implements Point {
  // ERROR : missing member `z`
  x: number;
  y: number;
}
```

## 枚举类型
枚举是组织收集有关联变量的一种方式
```js
enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}
// {0: "Clubs", 1: "Diamonds", 2: "Hearts", 3: "Spades", Clubs: 0, Diamonds: 1, Hearts: 2, Spades: 3}
```