import { buildMapping, findLocation, range } from "../../app/1/main";

describe("buildMapping", () => {
  it("should buildMapping ", () => {
    const map = new Map();
    [...range(1, 50), ...range(50, 98).map((i) => i + 2), 50, 51].forEach(
      (value, index) => map.set(index + 1, value)
    );
    expect(buildMapping("50 98 2&52 50 48").map).toEqual(map);
  });
});

describe("findlocation", () => {
  it("should findlocation ", () => {
    expect(
      findLocation("79 14 55 13", [
        "50 98 2&52 50 48",
        "0 15 37&37 52 2&39 0 15",
        "49 53 8&0 11 42&42 0 7&57 7 4",
        "88 18 7&18 25 70",
        "45 77 23&81 45 19&68 64 13",
        "0 69 1&1 0 69",
        "60 56 37&56 93 4",
      ])
    ).toEqual(35);
  });
});
