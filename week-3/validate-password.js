function validatePassword(password) {}

// should check if a password is valid
// returns true if a password is valid - must contain at least 9 characters
// returns true if a password

const input = "sdfsdf";
const currentOutput = validatePassword(input);
const targetOutput = "Your password must contain at least 9 characters";
console.assert(
  currentOutput === targetOutput,
  `for ${input}, expected output was ${targetOutput} but got ${currentOutput}`
);
