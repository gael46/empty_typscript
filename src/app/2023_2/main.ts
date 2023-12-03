import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");
  const identifiantssummed = computePower(content, "\r\n");
  console.log("Sum of all possible", identifiantssummed);
}

export function computePower(content: string, spearator = "$"): number {
  const allData = computeMax(content, spearator);
  return allData
    .map(({ b, g, r }) => b * g * r)
    .reduce((total, id) => total + id, 0);
}

export function getPossibleIdentifiants(
  content: string,
  spearator = "$"
): number[] {
  const allData = computeMax(content, spearator);
  return allData
    .filter(({ b, g, r }) => r <= 12 && g <= 13 && b <= 14)
    .map(({ id }) => id);
}
function computeMax(
  content: string,
  spearator: string
): { id: number; b: number; g: number; r: number }[] {
  const allLines = content.split(spearator);
  const allData = allLines.map((line, id) => {
    const sets = line.split(":")[1].split(";");

    const game = {
      id: id + 1,
      ...sets.reduce(
        (totalSet, set) => {
          const { b, g, r } = readSet(set);
          totalSet.b = Math.max(totalSet.b, b);
          totalSet.g = Math.max(totalSet.g, g);
          totalSet.r = Math.max(totalSet.r, r);
          return totalSet;
        },
        { b: 0, g: 0, r: 0 }
      ),
    };
    console.log(game);
    return game;
  });
  return allData;
}

export function readSet(set: string): { b: number; g: number; r: number } {
  const to_anlayse = set.replaceAll(" ", "");
  const color_to_analyse = to_anlayse.split(",");
  const setToReturn = { b: 0, g: 0, r: 0 };
  color_to_analyse.forEach((color) => {
    const number = color.match(/\d+/);
    const numberOfColor = number?.length ? number[0] : "";
    if (color.includes("blue")) {
      setToReturn.b = +numberOfColor;
    }
    if (color.includes("red")) {
      setToReturn.r = +numberOfColor;
    }
    if (color.includes("green")) {
      setToReturn.g = +numberOfColor;
    }
  });
  return setToReturn;
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
