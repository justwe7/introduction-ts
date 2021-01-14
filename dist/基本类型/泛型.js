function reverse(items) {
    var toreturn = [];
    for (var i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}
var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // 3, 2, 1
// Safety
// reversed[0] = '1'; // Error
// reversed = ['1', '2']; // Error
reversed[0] = 1; // ok
reversed = [1, 2]; // ok
/*
，函数 reverse 接受一个类型为 T（注意在 reverse<T> 中的类型参数） 的数组（items: T[]），
返回值为类型 T 的一个数组（注意：T[]），
函数 reverse 的返回值类型与它接受的参数的类型一样。

当你传入 const sample = [1, 2, 3] 时，
TypeScript 能推断出 reverse 为 number[] 类型，
从而能给你类型安全。
与此相似，当你传入一个类型为 string[] 类型的数组时，TypeScript 能推断 reverse 为 string[] 类型
*/ 
//# sourceMappingURL=泛型.js.map