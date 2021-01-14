function extend(first, second) {
    var result = {};
    for (var id in first) { // 继承
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) { // 避免继承已有的属性
            result[id] = second[id];
        }
    }
    return result;
}
var x = extend({ a: 'hello' }, { b: 42 });
// 现在 x 拥有了 a 属性与 b 属性
var aa = x.a;
var bb = x.b;
//# sourceMappingURL=交叉类型.js.map