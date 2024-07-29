// create a function that takes a string and returns the name of the package and the version number with the string appended to the end
function ibk(value) {
  return `this is a simple package with zero depencies ${value}`;
}

// export default ibk;
module.exports = ibk;
