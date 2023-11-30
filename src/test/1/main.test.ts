import { main } from "../../app/1/main";

describe("test true", () => {
  it("should true to be true", () => {
    expect(main()).toEqual("a");
  });
});
