import dayjs from "dayjs";

export const birthday = () => {
  console.log(
    `1995/12/03 (${dayjs().diff(
      dayjs("1995/12/03"),
      "day"
    )} days have passed since birth.)`
  );
};
