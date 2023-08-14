function getTime() {
  const currentTime = new Date();

  const minutes = currentTime.getMinutes;
  const hours = currentTime.getHours();
  const seconds = currentTime.getSeconds();

  return `${minutes}${hours}${seconds}`;
}

function setTime() {
  const time = "12:45:33"; // need to call getTime here so the time updates

  document.querySelector(
    "#current-time"
  ).innerText = `The current time is ${time}`;
}

setInterval(setTime, 1000);
