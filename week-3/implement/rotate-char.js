// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// Description:

// Given a character (char) and a shift value (shift),
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Check Input Validity:

// Given the char input, which must be a single character (a string of length 1),
// And the shift input, which must be a number,
// When the function is called with these inputs,
// Then it should validate that char is a single character and shift is a number, throwing errors if either condition is not met.
// Rotate Lowercase Letters:

// Given a lowercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.
// Rotate Uppercase Letters:

// Given an uppercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
// Leave Non-Letter Characters Unchanged:

// Given a character (char) that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.

console.log(rotateCharacter("A", 3)); // Output: "D"
console.log(rotateCharacter("z", 1)); // Output: "a"
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)
