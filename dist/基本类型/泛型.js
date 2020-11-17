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
//# sourceMappingURL=泛型.js.map