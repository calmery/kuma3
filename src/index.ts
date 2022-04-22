import { Command } from "commander";
import { birthday } from "./actions/birthday";
import { github } from "./actions/github";
import { janken } from "./actions/janken";
import { random } from "./actions/random";
import { twitter } from "./actions/twitter";

const program = new Command("kuma3");

program.command("birthday").action(birthday);
program.command("github").action(github);
program.command("janken").argument("✊ | ✌️  | ✋").action(janken);
program.command("random").action(random);
program.command("twitter").action(twitter);

program.parse();
