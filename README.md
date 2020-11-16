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