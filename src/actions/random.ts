const messages = ["お腹空いたくま...🐟", 'あ"？'];

export const random = () => {
  console.log(
    `🐻 .｡oO(${messages[Math.floor(Math.random() * messages.length)]})`
  );
};
