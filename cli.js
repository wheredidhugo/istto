#!/usr/bin/env node
import istto, { ip } from "./index.js";
import meow from "meow";
import chalk from "chalk";
import { createSpinner } from "nanospinner";

const cli = meow(
  `
Usage
    $ istto

Options
    -n         Remove IP from the answer
`,
  {
    importMeta: import.meta,
    flags: {
      n: {
        type: "boolean",
        default: false,
      },
    },
  }
);

const spinner = createSpinner(
  chalk.bold.white("Checking if you're connected to the internet...")
).start();

const internet = await istto;
const ipAddress = await ip;

if (internet) {
  if (cli.flags.n) {
    var message = `You're connected to the internet!`;
  } else {
    var message = `You're connected to the internet! ${chalk.bold.white(
      ipAddress
    )}`;
  }
  spinner.success({
    text: chalk.bold.green(message),
  });
} else {
  spinner.error({
    text: chalk.bold.red("You're not connected to the internet."),
  });
}
