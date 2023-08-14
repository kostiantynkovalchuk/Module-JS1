const totalSeconds = 340368;

const remainingSeconds = totalSeconds % 60;
const totalMinutes = (totalSeconds - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;
const days = (totalHours - remainingHours) / 24;

const result = `days: ${days}, hours: ${remainingHours}, minutes: ${remainingMinutes}, seconds: ${remainingSeconds}`;
console.log(result);
