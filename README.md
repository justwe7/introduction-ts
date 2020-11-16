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