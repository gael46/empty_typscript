import {
  analyse,
  computeSequence,
  hash,
  hashSequence,
  totalSequence,
} from "../../app/1/main";

describe("run hashSequence", () => {
  it("should run hashSequence", () => {
    const count = hashSequence(`rn=1`);
    expect(count).toEqual(30);
  });
});
describe("run hash", () => {
  it("should run has", () => {
    const count = hash(`H`);
    expect(count).toEqual(200);
  });
});

describe("run toto", () => {
  it("should run has", () => {
    const count = totalSequence(
      `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`
    );
    expect(count).toEqual(1320);
  });
});
describe("run computeSequence", () => {
  it("should computeSequence", () => {
    const count = computeSequence(
      `rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7`
    );
    expect(count).toEqual(145);
  });
});
describe("run analyse", () => {
  it("should analyse", () => {
    const { label, num, sign } = analyse(`rn=1`);
    expect(label).toEqual("rn");
    expect(sign).toEqual("=");
    expect(num).toEqual("1");
  });
});
