import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");
  const data = [
    { t: 59, d: 543 },
    { t: 68, d: 1020 },
    { t: 82, d: 1664 },
    { t: 74, d: 1022 },
  ];
  //const sum = computePartOne(data);
  const part2 = numberOfwayToWin(59688274, 543102016641022);
  console.log("Sum of all possible", part2.length);
}

export function numberOfwayToWin(
  timeToBeat: number,
  distance: number
): number[] {
  const allTimeHolding: number[] = [];
  for (let timeHolding = 1; timeHolding < timeToBeat; timeHolding++) {
    const timeToRun = distance / timeHolding;
    if (timeToRun + timeHolding < timeToBeat) allTimeHolding.push(timeHolding);
  }
  return allTimeHolding;
}

export function computePartOne(data: { t: number; d: number }[]): number {
  return data.reduce(
    (total, { t, d }) => total * (numberOfwayToWin(t, d).length || 1),
    1
  );
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
function compute(content: string, arg1: string) {
  throw new Error("Function not implemented.");
}
