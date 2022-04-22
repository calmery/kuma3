import { Command } from "commander";
import { birthday } from "./actions/birthday";
import { github } from "./actions/github";
import { twitter } from "./actions/twitter";

const program = new Command("kuma3");

program.command("birthday").action(birthday);
program.command("github").action(github);
program.command("twitter").action(twitter);

program.parse();
