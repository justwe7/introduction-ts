// 类型声明空间
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var foo;
var bar;
var bas;
// 变量声明空间
// 变量声明空间包含可用作变量的内容，在上文中 Class Foo 提供了一个类型 Foo 到类型声明空间，此外它同样提供了一个变量 Foo 到变量声明空间，如下所示
var someVar = Foo;
var someOtherVar = 123;
//# sourceMappingURL=声明空间.js.map