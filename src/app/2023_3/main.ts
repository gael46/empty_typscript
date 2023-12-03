import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");
  const sum = computeGearRatio(content, "\r\n");
  console.log("Sum of all possible", sum);
}

export function computeSumNumber(content: string, spearator = "&"): number {
  const numberPattern = /\d+/g;
  const allLines = content.split(spearator);
  return allLines
    .map((line, indexLine) => {
      let total = 0;
      let number_match;
      while ((number_match = numberPattern.exec(line)) !== null) {
        const number = number_match[0];
        const index = number_match.index;

        const linesToAnalyse = [line];
        if (indexLine > 0) {
          linesToAnalyse.push(allLines[indexLine - 1]);
        }
        if (indexLine < allLines.length - 1) {
          linesToAnalyse.push(allLines[indexLine + 1]);
        }
        const { startToAnalyse, endToAnalyse } = findScope(index, number, line);
        const linesCuttedToAnalyse = linesToAnalyse.map((lineToAnalyse) =>
          lineToAnalyse.substring(startToAnalyse, endToAnalyse)
        );
        const isValid = isValidNumber(linesCuttedToAnalyse);
        if (isValid) {
          console.log(number, "is valid");
          total += +number;
        } else {
          console.log(number, "is NOT valid");
        }
      }
      return +total;
    })
    .reduce((total, total_line) => total + total_line, 0);
}

export function computeGearRatio(content: string, spearator = "&"): number {
  const starPattern = /\*/g;
  const allLines = content.split(spearator);
  return allLines
    .map((line, indexLine) => {
      let total = 0;
      let star_match;
      while ((star_match = starPattern.exec(line)) !== null) {
        const index = star_match.index;
        const linesToAnalyse = [line];
        if (indexLine > 0) {
          linesToAnalyse.push(allLines[indexLine - 1]);
        }
        if (indexLine < allLines.length - 1) {
          linesToAnalyse.push(allLines[indexLine + 1]);
        }
        const { startToAnalyse, endToAnalyse, prefix, suffix } = findScopeStar(
          index,
          line,
          3
        );

        let linesCuttedToAnalyse = linesToAnalyse.map(
          (lineToAnalyse) =>
            prefix +
            lineToAnalyse.substring(startToAnalyse, endToAnalyse) +
            suffix
        );

        let number: string[] = [];
        for (let i = 3; i > 0 && number.length < 2; i--) {
          const localNumber =
            linesCuttedToAnalyse
              .join("/")
              .match(new RegExp(`\\d{${i}}`, "g")) || [];
          localNumber.forEach(
            (num) =>
              (linesCuttedToAnalyse = linesCuttedToAnalyse.map((line_) =>
                line_.replaceAll(
                  num,
                  Array(i)
                    .map((a) => ".")
                    .join()
                )
              ))
          );
          number = [...number, ...localNumber];
          linesCuttedToAnalyse = linesCuttedToAnalyse.map((line_) =>
            line_.substring(1, line_.length - 1)
          );
        }
        if (number.length === 2) {
          console.log("Found ", +number[0], +number[1]);
          total += +number[0] * +number[1];
        } else {
          console.log("not good ", number);
        }
      }
      return total;
    })
    .reduce((total, total_line) => total + total_line, 0);
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
