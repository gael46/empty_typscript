import {
  readSet,
  getPossibleIdentifiants,
  computePower,
} from "../../app/2023_2/main";

describe("compute readSet", () => {
  it("should readSet 1", () => {
    expect(readSet("3 blue, 4 red")).toEqual({ b: 3, r: 4, g: 0 });
    expect(readSet("1 red, 2 green, 6 blue")).toEqual({ b: 6, r: 1, g: 2 });
  });
});

describe("compute getPossibleIdentifiants", () => {
  it("should getPossibleIdentifiants 1", () => {
    expect(
      getPossibleIdentifiants(
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green$Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue$Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red$Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red$Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
      )
    ).toEqual([1, 2, 5]);
  });
});

describe("compute power", () => {
  it("should computepower 1", () => {
    expect(
      computePower(
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green$Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue$Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red$Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red$Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
      )
    ).toEqual(2286);
  });
});
