import {
  buildMatrix,
  computeSize,
  moveToNorth,
  rotate,
} from "../../app/1/main";

describe("move to north", () => {
  it("should move to north", () => {
    const { matrix }: { matrix: string[][] } = buildMatrix(`O....#....
      O.OO#....#
      .....##...
      OO.#O....O
      .O.....O#.
      O.#..O.#.#
      ..O..#O..O
      .......O..
      #....###..
      #OO..#....`);
    expect(computeSize(moveToNorth(matrix))).toEqual(136);
  });
});

describe("rotate", () => {
  it("should rotate", () => {
    const { matrix }: { matrix: string[][] } = buildMatrix(`O....#....
      O.OO#....#
      .....##...
      OO.#O....O
      .O.....O#.
      O.#..O.#.#
      ..O..#O..O
      .......O..
      #....###..
      #OO..#....`);
    expect(computeSize(rotate(matrix, 1000000000))).toEqual(64);
  });
});
