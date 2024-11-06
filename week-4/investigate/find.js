function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find// It is increased by 1 until the while loop is observed.
// b) What is the if statement used to check // it checks if the index of the character is inside the length of a string.
// c) Why is index++ being used?// it launches one more round of while loop. we need to keep looking until we find the right character.
// d) What is the condition index < str.length used for? // it requires the index to be inside the string length, otherwise return "-1"
