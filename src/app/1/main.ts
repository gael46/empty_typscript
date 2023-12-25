import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");

  console.log("size:", processor(content, "\r\n"));
}

export function processor(input: string, separator = "\n"): number[] {
  const { entries, map } = parse(input, separator);

  return entries;
}

export function parse(input: string, separator: string = "\n") {
  const map = new Map();
  input.split(separator).forEach((a) =>
    map.set(
      a.split(":")[0],
      a
        .split(":")[1]
        .split(" ")
        .filter((x) => x)
        .map((x) => x.trim())
    )
  );
  const entries = [...map.keys()].filter(
    (key) => ![...map.values()].flat().includes(key)
  );
  const newMap = new Map();
  entries.forEach((entrie) =>
    newMap.set(entrie, resolve(map.get(entrie), [], map))
  );
  const toMap = new Map();
  [...newMap.values()].flat().map((a) => toMap.set(a, (toMap.get(a) || 0) + 1));
  [...toMap.entries()].filter((a, nb) => nb === 2);
  return { entries, map };
}
function resolve(keys: string[], list: string[], map) {
  if (keys) {
    keys
      .filter((a) => !list.includes(a))
      .forEach((key) => {
        list.push(key);
        resolve(map.get(key), list, map);
      });
  }
  return list;
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
