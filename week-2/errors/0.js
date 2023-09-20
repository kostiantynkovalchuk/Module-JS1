// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if you don't know

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
