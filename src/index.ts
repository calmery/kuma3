import { Command } from "commander";
import dayjs from "dayjs";
import open from "open";

const program = new Command("kuma3");

program.command("birthday").action(() => {
  console.log(
    `1995/12/03 (${dayjs().diff(
      dayjs("1995/12/03"),
      "day"
    )} days have passed since birth.)`
  );
});

program.command("github").action(async () => {
  await open("https://github.com/kuma3");
});

program.parse();
