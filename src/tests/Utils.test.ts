import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  it("should pass", () => {
    const text = Utils.toUpperCase("mos martin");
    expect(text).toBe("MOS MARTIN");
  });
});
