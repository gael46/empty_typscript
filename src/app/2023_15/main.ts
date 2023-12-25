import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");

  console.log("size:", computeSequence(content));
}

export function totalSequence(input: string): number {
  return input
    .split(",")
    .reduce((currentValue, char) => currentValue + hashSequence(char), 0);
}

export function hashSequence(input: string): number {
  return input
    .split("")
    .reduce((currentValue, char) => hash(char, currentValue), 0);
}

export function computeSequence(input: string): number {
  const dec: { label: string; num: string }[][] = Array(255).map((a) => []);
  const data = input.split(",");
  data.forEach((element) => {
    const { label, sign, num } = analyse(element);
    const boxNumber = hashSequence(label);
    const list = dec[boxNumber] || [];
    let index = list.findIndex(({ label: l }) => l === label);
    if (index < 0) {
      index = list.length;
    }
    if (sign === "-") {
      list.splice(index, 1);
    } else {
      list.splice(index, 1, { label, num });
    }
    dec[boxNumber] = list;
  });
  let total = 0;
  dec.forEach((box, numBox) =>
    box.forEach((a, slot) => (total += (numBox + 1) * (slot + 1) * +a.num))
  );
  return total;
}

export function analyse(element: string) {
  let i = element.indexOf("=");
  if (i < 0) {
    i = element.indexOf("-");
  }

  const label = element.substring(0, i);
  const sign = element.substring(i, i + 1);
  const num = element.substring(i + 1);

  return { label, sign, num };
}

export function hash(input: string, currentValue: number = 0): number {
  return ((currentValue + input.charCodeAt(0)) * 17) % 256;
}
export function moveToNorth(matrix_input: string[][]): string[][] {
  const matrix = translate(matrix_input);
  const newMatrix = inclinate(matrix);
  return translate(newMatrix);
}

export function moveToEast(matrix_input: string[][]): string[][] {
  const matrix = reverse(matrix_input);
  const newMatrix = inclinate(matrix);
  return reverse(newMatrix);
}

export function moveToSouth(matrix_input: string[][]): string[][] {
  const matrix = reverse(translate(matrix_input));
  const newMatrix = inclinate(matrix);
  return translate(reverse(newMatrix));
}

export function moveToWest(matrix_input: string[][]): string[][] {
  const newMatrix = inclinate(matrix_input);
  return newMatrix;
}
function inclinate(matrix: string[][]) {
  return matrix.map((line) => {
    let availableIndex: number[] = [];
    const newLine: string[] = [];
    line.forEach((data, index) => {
      newLine[index] = data;
      if (data === ".") {
        availableIndex.push(index);
      }
      if (data === "#") {
        availableIndex = [];
      }
      if (data === "O") {
        if (availableIndex.length) {
          newLine[availableIndex[0]] = "O";
          availableIndex = availableIndex.slice(1);
          availableIndex.push(index);
          newLine[index] = ".";
        }
      }
    });
    return newLine;
  });
}

export function buildMatrix(input: string) {
  const matrix = input.split("\n").map((a) => a.trim().split(""));
  return { matrix };
}

function translate(data: string[][]) {
  const matrix: string[][] = data.map((l) => Array(l.length));
  data.forEach((line, x) => line.forEach((data_, y) => (matrix[y][x] = data_)));
  return matrix;
}

function reverse(data: string[][]) {
  return data.map((line, x) => line.reverse().map((a) => a));
}

export function computeSize(map: string[][]) {
  return map
    .reverse()
    .reduce(
      (max, line, size) =>
        max + (size + 1) * line.filter((a) => a === "O").length,
      0
    );
}
