import Add from "../src/add";

describe("test--1", () => {
  it("tset", () => {
    const expected = 2;
    const actual = Add(1,1);
    expect(actual).toBe(expected);
  });
});
