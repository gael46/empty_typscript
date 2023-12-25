import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");
  const lastdata = content.split("\r\n").map((a) => findNextHistory(a).first);

  console.log(
    " sum",
    lastdata.reduce((sum, a) => sum + a, 0)
  );
}

export function findNextHistory(list: string): { first: number; last: number } {
  const listNumber = list.match(/-?\d+/g)?.map((a) => +a) || [];
  const lastIncrement: number[] = [listNumber[listNumber.length - 1]];
  const firstIncrement: number[] = [listNumber[0]];

  let allNumbers = [...listNumber];
  let allIsZero = false;
  while (!allIsZero) {
    const newDelta: number[] = [];
    let previousValue = 0;
    allNumbers.forEach((value, index) => {
      if (index > 0) {
        newDelta.push(value - previousValue);
      }
      previousValue = value;
    });
    allIsZero = newDelta.every((a) => a === 0);
    lastIncrement.push(newDelta[newDelta.length - 1]);
    firstIncrement.push(newDelta[0]);
    allNumbers = [...newDelta];
  }
  return {
    first: firstIncrement
      .reverse()
      .reduce((previous, current) => current - previous, 0),
    last: lastIncrement
      .reverse()
      .reduce((previous, current) => previous + current, 0),
  };
}
export function compu(content: string, spearator = "&") {
  const game = content.split(":")[1].split("|");
  const winner = game[0].match(/\d+/g)?.map((n) => +n);
  const user = game[1].match(/\d+/g)?.map((n) => +n);
  const nbWinner = winner?.filter((w) => user?.includes(w));
  return nbWinner;
}
function isValidNumber(linesToAnalyse: string[]): boolean {
  return linesToAnalyse.some(
    (line) => line.replaceAll(/\d|\./g, "").length !== 0
  );
}

function findScopeStar(index: number, line: string, number: number) {
  const startToAnalyse = Math.max(0, index - number);
  let prefix: string = "";
  if (index - number <= 0) {
    prefix = Array(Math.abs(index - number))
      .map((a) => "*")
      .join();
  }
  const endToAnalyse = Math.min(line.length, index + number + 1);
  let suffix: string = "";
  if (index + number + 1 === line.length) {
    suffix = Array(Math.abs(index + number - line.length))
      .map((a) => "*")
      .join();
  }
  return { startToAnalyse, endToAnalyse, prefix, suffix };
}

function findScope(index: number, number: string, line: string) {
  let startToAnalyse = index;
  let endToAnalyse = startToAnalyse + number.length;
  if (startToAnalyse > 0) {
    startToAnalyse -= 1;
  }
  if (endToAnalyse < line.length) {
    endToAnalyse += 1;
  }
  return { startToAnalyse, endToAnalyse };
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

export function range(start, end) {
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
function compute(content: string, arg1: string) {
  throw new Error("Function not implemented.");
}
