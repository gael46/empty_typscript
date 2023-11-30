import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");

  console.log("this is the main function that read  this content :", content);
}
