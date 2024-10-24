function pad(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  const remainingHours = totalHours % 24;

  return `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(143));

// You can play computer with this example
// Use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
//3

// Call formatTimeDisplay with an input of 143, now answer the following:

// b) What value is assigned to the parameter num when pad is called for the first time?
//totalHours % 24

// c) What is the return value of pad when it is called for the first time?
//`0${num}`

// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer
//seconds % 60, this is the value of remainingSeconds

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer
//23 as this is a return value for input 143

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn
//padStart(2, "0")
