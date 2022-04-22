const messages = ["お腹空いたくま...🐟", 'あ"？', "おい"];

export const random = () => {
  console.log(
    `🐻 .｡oO(${messages[Math.floor(Math.random() * messages.length)]})`
  );
};
