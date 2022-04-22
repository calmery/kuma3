export const janken = (hand: string) => {
  const hands = ["✊", "✌️", "✋"];
  const kumaHand = hands[Math.floor(Math.random() * 3)];

  if (!hands.includes(hand)) {
    console.log(`🐻 .｡oO(おい)`);
    return;
  }

  if (hand === kumaHand) {
    console.log(`🐻${kumaHand} .｡oO(あいこくまね)`);
    return;
  }

  if (
    (hand === "✊" && kumaHand === "✌️") ||
    (hand === "✌️" && kumaHand === "✋") ||
    (hand === "✋" && kumaHand === "✊")
  ) {
    console.log(`🐻${kumaHand} .｡oO(お前の勝ちくま、夜道に気を付けるくま)`);
    return;
  }

  console.log(`🐻${kumaHand} .｡oO(お前の負けくま)`);
};
