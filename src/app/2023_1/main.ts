import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");
  const total = totalCalibaration(content, "\r\n");
  console.log("the distance", total);
}

export function totalCalibaration(content: string, separator = ";"): number {
  const lines = content.split(separator);
  return lines
    .map((line) => unitaryCalibration(line))
    .reduce((sum, line) => sum + line, 0);
}
export function unitaryCalibration(line: string): number {
  const numbers = replace(line).match(/\d/g);
  let first = "",
    last = "";
  if (numbers?.length) {
    first = numbers[0];
    last = numbers[numbers.length - 1];
  }

  const lineNumber = +(first + last);
  console.log("line number : ", lineNumber);
  return lineNumber;
}
const TO_REPLACE = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function replace(input: string): string {
  return TO_REPLACE.reduce(
    (final, current) =>
      final.replaceAll(current, current + translate(current) + current),
    input
  );
}

function translate(digit: string): string {
  switch (digit) {
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
  }
  return digit;
}

function range(start, end) {
  const tab: number[] = [];
  if (start <= end) {
    for (let i = start; i < end; i++) {
      tab.push(i);
    }
  } else {
    for (let i = start; i > end; i--) {
      tab.push(i);
    }
  }
  return tab;
}
