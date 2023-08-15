function median() {}

describe("median", function () {
  it("returns middle value of an odd-length list", function () {
    expect(median([2])).toBe(2);
    expect(median([2, 9, 7])).toBe(7);
  });

  it("returns mean of two middle values of a nonempty even-length list", function () {
    expect(median([7, 2])).toBe(4.5);
    expect(median([7, 2, 10, 9])).toBe(8);
  });

  it("returns NaN for an empty list", function () {
    expect(median([])).toBeNaN();
  });
});
