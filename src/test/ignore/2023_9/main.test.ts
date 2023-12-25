import { findNextHistory } from "../../../app/1/main";

describe("findNextHistory", () => {
  it("should findNextHistory ", () => {
    expect(findNextHistory("0   3   6   9  12  15")).toEqual({
      last: 18,
      first: -3,
    });
  });
  it("should findNextHistory 1 ", () => {
    expect(findNextHistory("1   3   6  10  15  21").last).toEqual(28);
  });
  it("should findNextHistory 2", () => {
    expect(findNextHistory("10  13  16  21  30  45")).toEqual({
      last: 68,
      first: 5,
    });
  });
  it("should findNextHistory 2", () => {
    expect(findNextHistory("-3  0   3   6   9  12  15").last).toEqual(18);
  });
});
