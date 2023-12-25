import { computeSumNumber, computeGearRatio } from "../../app/1/main";

describe("compute computeSumNumber", () => {
  it("should computeSumNumber 1", () => {
    expect(
      computeSumNumber(
        "467..114..&...*......&..35..633.&......#...&617*......&.....+.58.&..592.....&......755.&...$.*....&.664.598.."
      )
    ).toEqual(4361);
  });
});
describe("compute computeGearRatio", () => {
  it("should computeGearRatio 1", () => {
    expect(
      computeGearRatio(
        "467..114..&...*......&..35..633.&......#...&617*......&.....+.58.&..592.....&......755.&...$.*....&..598....."
      )
    ).toEqual(467835);
  });
  it("should computeGearRatio 2", () => {
    expect(
      computeGearRatio(
        "854.6..10.....174....&...*.................&....................."
      )
    ).toEqual(5124);
  });
});
