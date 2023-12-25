import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");

  console.log("size:", processor(content, "\r\n"));
}

export function processor(input: string, separator = "\n"): number {
  const data = input.split(separator);
  const instructions = data[0].split("");

  const map = new Map();

  const dataInput = data.slice(2);
  dataInput.forEach((info) => {
    const { key, right, left } = extract(info);
    map.set(key, { R: right, L: left });
  });
  const currents = [...map.keys()].filter((a) => a.endsWith("A"));
  const list: number[] = [];
  currents.forEach((current) => {
    let cur = current;
    let i = 0;
    let total = 0;
    while (!cur.endsWith("Z")) {
      cur = map.get(cur)[instructions[i]];
      i = i + 1;
      if (i === instructions.length) {
        i = 0;
      }
      total = total + 1;
    }
    list.push(total);
  });

  return list.reduce((a, b) => (a * b) / pgcd(a, b), 1);
}
function pgcd(a_: number, b_: number) {
  let a = Math.abs(a_);
  let b = Math.abs(b_);
  if (b > a) {
    const tmp = a;
    a = b;
    b = tmp;
  }
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
}

export function extract(info: string) {
  const data = info.split("=");
  const key = data[0].trim();
  const inst = data[1].split(",");
  const left = inst[0].trim().substring(1);
  const right = inst[1].trim().substring(0, inst[1].trim().length - 1);
  return { key, right, left };
}
