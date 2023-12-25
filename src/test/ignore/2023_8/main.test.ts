import { extract, processor } from "../../app/1/main";

describe("run extract", () => {
  it("should run extract", () => {
    const count = extract(`BBB = (AAA, ZZZ)`);
    expect(count).toEqual({
      key: "BBB",
      left: "AAA",
      right: "ZZZ",
    });
  });
});

describe("run process", () => {
  it("should run process", () => {
    const count = processor(`LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`);
    expect(count).toEqual(6);
  });

  it("should run process", () => {
    const count = processor(`RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`);
    expect(count).toEqual(2);
  });
  it("should run process", () => {
    const count = processor(`LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`);
    expect(count).toEqual(6);
  });
});
