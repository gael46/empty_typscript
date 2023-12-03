import * as fs from "fs";

export function main() {
  const content = fs.readFileSync("src/app/1/input.txt", "utf8");
  const distance = computeDistanceIfSameLocation(content);
  console.log("the distance", distance);
}
export function computeDistanceAnyway(
  content: string,
  stopIfSameLocation: boolean = false
): number {
  const mouvements = content.split(",");
  let x = 0,
    y = 0;
  let history: { x: number; y: number }[] = [];
  let orientation = "N";
  mouvements.every((mouvement, index) => {
    const nextMouvement = mouvement.substring(0, 1);
    const numberOfMouvement = +mouvement.substring(1);

    const nextOrientation = computeNextOrientation(orientation, nextMouvement);
    const previous_x = x,
      previous_y = y;
    let newHistory: { x: number; y: number }[] = [];
    switch (nextOrientation) {
      case "O":
        x -= numberOfMouvement;
        newHistory = range(previous_x, x).map((x_) => ({
          x: x_,
          y,
        }));

        break;
      case "S":
        y -= numberOfMouvement;
        newHistory = range(previous_y, y).map((y_) => ({
          x,
          y: y_,
        }));
        break;
      case "E":
        x += numberOfMouvement;
        newHistory = range(previous_x, x).map((x_) => ({
          x: x_,
          y,
        }));
        break;
      case "N":
        y += numberOfMouvement;
        newHistory = range(previous_y, y).map((y_) => ({
          x,
          y: y_,
        }));
        break;
    }
    orientation = nextOrientation;
    const history_point = history.find(({ x: x_h, y: y_h }) =>
      newHistory.find(({ x: x_, y: y_ }) => x_h === x_ && y_h === y_)
    );
    if (stopIfSameLocation && history_point) {
      x = history_point.x;
      y = history_point.y;
      return false;
    }
    history = [...history, ...newHistory];
    console.log(history);

    return true;
  });
  return Math.abs(x) + Math.abs(y);
}

export function computeDistanceIfSameLocation(content: string) {
  return computeDistanceAnyway(content, true);
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

function computeNextOrientation(
  orientation: string,
  nextMouvement: string
): string {
  if (orientation === "N") {
    if (nextMouvement === "L") {
      return "O";
    } else {
      return "E";
    }
  }
  if (orientation === "E") {
    if (nextMouvement === "L") {
      return "N";
    } else {
      return "S";
    }
  }
  if (orientation === "S") {
    if (nextMouvement === "L") {
      return "E";
    } else {
      return "O";
    }
  }
  if (orientation === "O") {
    if (nextMouvement === "L") {
      return "S";
    } else {
      return "N";
    }
  }
  return "";
}
