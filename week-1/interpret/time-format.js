const totalSeconds = 340368;

const remainingSeconds = totalSeconds % 60;
const totalMinutes = (totalSeconds - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;
const days = (totalHours - remainingHours) / 24;

const result = `days: ${days}, hours: ${remainingHours}, minutes: ${remainingMinutes}, seconds: ${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions
// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) What value is assigned to the days variable on line 10? Use documentation if you're unsure about the operator

// d) What variable could you use to store the value 24 - in other words, what would be a meaningful name for the value 24
// in this program? What does the 24 represent?

// e) Similarly, what variable could you assign to the value 60?
