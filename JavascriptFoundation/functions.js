
function add7(num) {
  return num + 7;
};

function multiply(num1, num2) {
  return num1 * num2;
}


function capitalize(text ) {
  // text = text.toString();
  text = text.toLowerCase();
  result = text.at(0).toUpperCase() + text.substring(1);
  return result;
}


function lastLetter(text) {
  return text.at(-1);
}

console.log(multiply(add7(10), 19));
console.log(capitalize("MAWUNYO"));
console.log(lastLetter("Mawunyo"));
