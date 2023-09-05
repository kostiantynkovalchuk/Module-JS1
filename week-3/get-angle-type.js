function getAngleType(angle) {
  if (angel < 90) {
    return "acute";
  }
  if (angle === 90) {
    return "right angle";
  }
  if (angle > 90) {
    return "obtuse";
  }
  if (angle > 360) {
    return "reflex";
  }
}

// if an gle
