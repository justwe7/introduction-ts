var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
// 简单的使用枚举类型
var Card = CardSuit.Clubs;
// 类型安全
// Card = 'not a member of card suit'; // Error: 
// 改变与数字枚举关联的数字
var Color;
(function (Color) {
    Color[Color["DarkRed"] = 3] = "DarkRed";
    Color[Color["DarkGreen"] = 4] = "DarkGreen";
    Color[Color["DarkBlue"] = 5] = "DarkBlue"; // 5
})(Color || (Color = {}));
//# sourceMappingURL=枚举.js.map