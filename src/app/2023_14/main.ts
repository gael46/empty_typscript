import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");
  const { matrix }: { matrix: string[][] } = buildMatrix(content);

  console.log("size:", computeSize(rotate(matrix, 1000000000)));
}

export function rotate(matrix_input: string[][], nbRound = 1) {
  let mat = matrix_input;
  const history: Array<string> = [];
  let matStr = matrix_input.join("");

  let found = false;
  for (let i = 0; i < nbRound; i++) {
    mat = moveToEast(moveToSouth(moveToWest(moveToNorth(mat))));
    matStr = mat.join("");

    //console.log("progresse", (i * 100) / nbRound);
    const previousIndex = history.findIndex((a) => a === matStr);
    if (!found && previousIndex !== -1) {
      console.log("found");
      const interval = i - previousIndex;
      i =
        Math.floor((nbRound - previousIndex) / interval) * interval +
        previousIndex;
      found = true;
    }
    history.push(matStr);
  }
  return mat;
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
