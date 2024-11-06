// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(input) {
  const number = input.toString(); // Convert the number to a string to easily access digits
  const lastDigit = parseInt(number[number.length - 1]); // Get the last digit as a number
  const lastTwoDigits = parseInt(number.slice(-2)); // Get the last two digits to handle teens (11, 12, 13)

  // Check for the special case of 11, 12, 13, which all use "th"
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${number}th`;
  }

  // Check the last digit for the appropriate suffix
  if (lastDigit === 1) {
    return `${number}st`;
  } else if (lastDigit === 2) {
    return `${number}nd`;
  } else if (lastDigit === 3) {
    return `${number}rd`;
  } else {
    return `${number}th`;
  }
}

// Test cases
console.log(getOrdinalNumber(1)); // "1st"
console.log(getOrdinalNumber(2)); // "2nd"
console.log(getOrdinalNumber(3)); // "3rd"
console.log(getOrdinalNumber(4)); // "4th"
console.log(getOrdinalNumber(11)); // "11th"
console.log(getOrdinalNumber(21)); // "21st"
console.log(getOrdinalNumber(102)); // "102nd"

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});
