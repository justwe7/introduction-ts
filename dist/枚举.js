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
//# sourceMappingURL=枚举.js.map