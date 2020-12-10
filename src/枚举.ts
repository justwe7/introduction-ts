enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

// 简单的使用枚举类型
let Card = CardSuit.Clubs;

// 类型安全
// Card = 'not a member of card suit'; // Error: 


// 改变与数字枚举关联的数字
enum Color {
  DarkRed = 3, // 3
  DarkGreen, // 4
  DarkBlue // 5
}