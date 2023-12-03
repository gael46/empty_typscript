import {
  computeDistanceAnyway,
  computeDistanceIfSameLocation,
} from "../../../app/2016_1/main";

describe("computeDistanceAnyway", () => {
  it("should computeDistanceAnyway R2, L3", () => {
    expect(computeDistanceAnyway("R2,L3")).toEqual(5);
  });

  it("should computeDistanceAnyway R2, R2, R2", () => {
    expect(computeDistanceAnyway("R2,R2,R2")).toEqual(2);
  });

  it("should computeDistanceAnyway R5, L5, R5, R3", () => {
    expect(computeDistanceAnyway("R5,L5,R5,R3")).toEqual(12);
  });

  it("should computeDistanceIfSameLocation R8, R4, R4, R8", () => {
    expect(computeDistanceIfSameLocation("R8,R4,R4,R8")).toEqual(4);
  });
});
