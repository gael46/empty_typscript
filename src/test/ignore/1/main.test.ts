import { numberOfwayToWin } from "../../app/1/main";

describe("numberOfwayToWin", () => {
  it("should numberOfwayToWin 4", () => {
    expect(numberOfwayToWin(7, 9)).toEqual([2, 3, 4, 5]);
  });
  it("should numberOfwayToWin 15 40", () => {
    expect(numberOfwayToWin(15, 40).length).toEqual(8);
  });
  it("should numberOfwayToWin 30 200", () => {
    expect(numberOfwayToWin(30, 200).length).toEqual(9);
  });
  it("should numberOfwayToWin 4", () => {
    expect(numberOfwayToWin(71530, 940200).length).toEqual(71503);
  });
});
