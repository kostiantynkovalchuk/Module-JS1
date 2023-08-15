function calculateUpperBound(num, degreeOfAccuracy) {
  return num + degreeOfAccuracy / 2;
}

function calculateLowerBound(num, degreeOfAccuracy) {
  return num - degreeOfAccuracy / 2;
}

function calculateErrorInterval(num, degreeOfAccuracy) {
  const upperBound = calculateUpperBound(num, degreeOfAccuracy);
  const lowerBound = calculateLowerBound(num, degreeOfAccuracy);

  return `${lowerBound} <= num < ${upperBound}`;
}

console.log(
  `error interval for 30 to the nearest 10 is ${calculateErrorInterval(30, 10)}`
);
