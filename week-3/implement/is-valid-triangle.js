// Implement a function isValidTriangle

// Given the lengths of three sides of a triangle (a, b, c),
// When the function isValidTriangle is called with these side lengths as input,
// Then it should:

// Check for Valid Input:

// Given the side lengths a, b, and c,
// When any of the side lengths is less than or equal to zero,
// Then it should return "Invalid" because a triangle cannot have zero or negative side lengths.
// Check Triangle Inequality Theorem:

// Given the side lengths a, b, and c,
// When the sum of any two side lengths is less than or equal to the length of the third side (i.e., a + b <= c, a + c <= b, b + c <= a),
// Then it should return "Invalid" because these conditions violate the Triangle Inequality, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.
// Valid Triangle:

// Given valid side lengths that satisfy the conditions mentioned above,
// When the function is called with these side lengths,
// Then it should return "Valid" because the input forms a valid triangle.
// This specification outlines the behavior of the isValidTriangle function for different input scenarios, ensuring it properly checks for invalid side lengths and whether they form a valid triangle according to the Triangle Inequality Theorem.
