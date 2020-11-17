"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name;
// 无法重新声明块范围变量“name”。ts(2451)
// lib.dom.d.ts(19484, 15): 此处也声明了 "name"。
/*
原因
在默认状态下，typescript 将 DOM typings 作为全局的运行环境，所以当我们声明 name时， 与 DOM 中的全局 window 对象下的 name 属性出现了重名。

解决方法
方法一
将运行环境由 DOM typings 更改成其他运行环境。
可以在tconfig.json 文件中声明：

{
    "compilerOptions": {
        "lib": [
            "es2015"
        ]
    }
}

方法二
在脚本文件最后一行，添加 export {};。将文件声明为模块， 变量name限制在了 模块作用域下，就不会与全局作用域下的name产生冲突。

原理: 在 Typescript 中，只要文件存在 import 或 export 关键字，都被视为 module
*/
name = {
    first: 'John',
    second: 'Doe'
};
//# sourceMappingURL=接口.js.map