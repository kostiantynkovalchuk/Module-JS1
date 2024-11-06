const isValidTriangle = require("./is-valid-triangle"); // Import the function
test("test valid triangle", () => {
  expect(isValidTriangle(3, 3, 3)).toBe(true);
  expect(isValidTriangle(4, 2, 1)).toBe(false);
}); //.test.js
