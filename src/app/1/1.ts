import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/input/1/1.txt", "utf8");

  console.log("this is the main function that read  this content :", content);
}
